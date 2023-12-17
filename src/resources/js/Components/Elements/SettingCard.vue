<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Slider from 'primevue/slider';
import Dropdown from 'primevue/dropdown';
import InputSwitch from 'primevue/inputswitch';
import route from '@/Composables/Common/Route';
import { SettingType } from '@/Constants/SettingType';
import { onMounted, ref } from 'vue';
import { DataType } from '@/Constants/DataType';
import SystemSetting from '@/Interfaces/SystemSetting';
import EnvSetting from '@/Interfaces/EnvSetting';

type SettingCardData = {
    setting: SystemSetting | EnvSetting,
    type: string,
};

const props = defineProps<SettingCardData>();

const form = useForm<{
    setting_type: string,
    key: any,
    value: any,
}>({
    setting_type: '',
    key: null,
    value: null,
});

const toast = useToast();

const currentValue = ref<any>(null);

onMounted(() => {
    intializeValue(props);
})

const intializeValue = (data: SettingCardData) => {
    switch (data.setting.type) {
        case DataType.NUMBER:
            currentValue.value = parseInt(data.setting.value);
            break;
        case DataType.BOOLEAN:
            currentValue.value = Boolean(data.setting.value);
            break;
        case DataType.DROPDOWN:
            currentValue.value = data.setting.value;
            break;
    }
}
const updateSettings = () => {
    form.setting_type = props.type;
    switch (props.type) {
        case SettingType.SYSTEM:
            form.key = props.setting.id;
            break;
        case SettingType.ENV:
            form.key = props.setting.name;
            break;
    }
    form.value = currentValue.value;
    form.post(route('admin.setting.save'), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            toast.add({
                severity: 'success',
                summary: 'Updated',
                detail: `${props.setting.label} is updated Successfully.`,
                life: 3000,
            });
        },
        onError: () => {
            toast.add({
                severity: 'error',
                summary: 'Update Failed',
                detail: `${props.setting.label} updating failed!`,
                life: 3000,
            });
        },
    });
};
</script>
<template>
    <div class="tw-rounded-2xl tw-shadow hover:tw-shadow-primary tw-w-[calc(33.33%-1rem)] tw-flex tw-flex-col tw-p-5 main-bg-3 tw-transition tw-duration-300 tw-space-y-4 tw-justify-between">
        <Toast />
        <!-- Label -->
        <div class="tw-w-full tw-flex tw-flex-row tw-items-center tw-justify-center tw-h-[4.5rem]">
            <div class="tw-w-1/4
                main-text-gradient
                tw-text-4xl
                tw-flex
                tw-justify-center
                tw-items-center">
                    <i :class="props.setting.icon_name"></i>
            </div>
            <div class="tw-w-3/4 tw-flex tw-flex-col tw-items-center tw-justify-center">
                <span class="tw-w-full main-text-gradient tw-text-xl">
                    {{ props.setting.label }}
                </span>
                <span class="tw-w-full main-text">
                    {{ props.setting.description }}
                </span>
            </div>
        </div>
        <!-- Setting -->
        <div class="tw-w-full">
            <template v-if="props.setting.type === DataType.NUMBER">
                <div class="tw-flex tw-flex-row tw-items-center tw-space-x-2">
                    <Slider v-model="currentValue" @slideend="updateSettings" :min="parseInt(props.setting.options.min)" :max="parseInt(props.setting.options.max)" class="tw-w-full" />
                    <span class="tw-transition tw-duration-300 tw-w-24 tw-py-1 tw-text-center tw-font-semibold tw-rounded-full main-bg-2 tw-text-slate-800 dark:tw-text-primary">
                        {{ currentValue }}
                    </span>
                </div>
            </template>
            <template v-if="props.setting.type === DataType.BOOLEAN">
                <div class="tw-flex tw-flex-row tw-justify-end tw-items-center tw-space-x-2">
                    <InputSwitch v-model="currentValue" @change="updateSettings" />
                    <span class="tw-transition tw-duration-300 tw-w-6 tw-py-1 tw-text-right tw-font-semibold tw-rounded-full tw-text-primary">
                        {{ currentValue ? 'On' : 'Off' }}
                    </span>
                </div>
            </template>
            <template v-if="props.setting.type === DataType.DROPDOWN">
                <div class="tw-w-full lg:tw-w-1/2 tw-ml-auto">
                    <Dropdown v-model="currentValue" @change="updateSettings" :options="props.setting.options" optionLabel="label" optionValue="value" />
                </div>
            </template>
        </div>
    </div>
</template>