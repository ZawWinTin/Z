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
import { NumberOption, DropdownOption } from '@/Interfaces/SettingOptions';

type SettingCardData = {
    setting: SystemSetting | EnvSetting;
    type: string;
};

const props = defineProps<SettingCardData>();

const form = useForm<{
    setting_type: string;
    key: any;
    value: any;
}>({
    setting_type: '',
    key: null,
    value: null,
});

const toast = useToast();

const currentValue = ref<any>(null);

onMounted(() => {
    initializeValue(props);
});

const initializeValue = (data: SettingCardData) => {
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
};
const updateSettings = () => {
    form.setting_type = props.type;
    switch (props.type) {
        case SettingType.SYSTEM:
            form.key = (props.setting as SystemSetting).id;
            break;
        case SettingType.ENV:
            form.key = (props.setting as EnvSetting).name;
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
    <div
        class="main-bg-3 tw-flex tw-w-[calc(33.33%-1rem)] tw-flex-col tw-justify-between tw-space-y-4 tw-rounded-2xl tw-p-5 tw-shadow tw-transition tw-duration-300 hover:tw-shadow-primary"
    >
        <Toast />
        <!-- Label -->
        <div
            class="tw-flex tw-h-[4.5rem] tw-w-full tw-flex-row tw-items-center tw-justify-center"
        >
            <div
                class="main-text-gradient tw-flex tw-w-1/4 tw-items-center tw-justify-center tw-text-4xl"
            >
                <i :class="props.setting.icon_name"></i>
            </div>
            <div
                class="tw-flex tw-w-3/4 tw-flex-col tw-items-center tw-justify-center"
            >
                <span class="main-text-gradient tw-w-full tw-text-xl">
                    {{ props.setting.label }}
                </span>
                <span class="main-text tw-w-full tw-text-sm">
                    {{ props.setting.description }}
                </span>
            </div>
        </div>
        <!-- Setting -->
        <div class="tw-w-full">
            <template v-if="props.setting.type === DataType.NUMBER">
                <div class="tw-flex tw-flex-row tw-items-center tw-space-x-2">
                    <Slider
                        v-model="currentValue"
                        @slideend="updateSettings"
                        :min="(props.setting.options as NumberOption).min"
                        :max="(props.setting.options as NumberOption).max"
                        class="tw-w-full"
                    />
                    <span
                        class="main-bg-2 tw-w-24 tw-rounded-full tw-py-1 tw-text-center tw-font-semibold tw-text-slate-800 tw-transition tw-duration-300 dark:tw-text-primary"
                    >
                        {{ currentValue }}
                    </span>
                </div>
            </template>
            <template v-if="props.setting.type === DataType.BOOLEAN">
                <div
                    class="tw-flex tw-flex-row tw-items-center tw-justify-end tw-space-x-2"
                >
                    <InputSwitch
                        v-model="currentValue"
                        @change="updateSettings"
                    />
                    <span
                        class="tw-w-6 tw-rounded-full tw-py-1 tw-text-right tw-font-semibold tw-text-primary tw-transition tw-duration-300"
                    >
                        {{ currentValue ? 'On' : 'Off' }}
                    </span>
                </div>
            </template>
            <template v-if="props.setting.type === DataType.DROPDOWN">
                <div class="tw-ml-auto tw-w-full lg:tw-w-1/2">
                    <Dropdown
                        v-model="currentValue"
                        @change="updateSettings"
                        :options="
                            props.setting.options as Array<DropdownOption>
                        "
                        optionLabel="label"
                        optionValue="value"
                    />
                </div>
            </template>
        </div>
    </div>
</template>
