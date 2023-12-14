<script setup>
import Slider from 'primevue/slider';
import InputSwitch from 'primevue/inputswitch';
import Dropdown from 'primevue/dropdown';
const props = defineProps({
    setting: {
        default: null,
    },
});

const NUMBER = 'number';
const BOOLEAN = 'boolean';
const DROPDOWN = 'dropdown';
</script>
<template>
    <div class="tw-rounded-2xl tw-shadow hover:tw-shadow-primary tw-w-[calc(33.33%-1rem)] tw-flex tw-flex-col tw-p-5 tw-bg-slate-50 dark:tw-bg-slate-900 tw-transition tw-duration-300 tw-space-y-4 tw-justify-between">
        <!-- Label -->
        <div class="tw-w-full tw-flex tw-flex-row tw-items-center tw-justify-center tw-h-[4.5rem]">
            <div class="tw-w-1/4
                main-gradient-text-color
                tw-text-4xl
                tw-flex
                tw-justify-center
                tw-items-center">
                    <i :class="props.setting.icon_name"></i>
            </div>
            <div class="tw-w-3/4 tw-flex tw-flex-col tw-items-center tw-justify-center">
                <span class="tw-w-full main-gradient-text-color tw-text-xl">
                    {{ props.setting.label }}
                </span>
                <span class="tw-w-full tw-text-slate-700 dark:tw-text-slate-400">
                    {{ props.setting.description }}
                </span>
            </div>
        </div>
        <!-- Setting -->
        <div class="tw-w-full">
            <template v-if="props.setting.type === NUMBER">
                <div class="tw-flex tw-flex-row tw-items-center tw-space-x-2">
                    <Slider v-model="props.setting.value" :min="parseInt(props.setting.options.min)" :max="parseInt(props.setting.options.max)" class="tw-w-full" />
                    <span class="tw-transition tw-duration-300 tw-w-24 tw-py-1 tw-text-center tw-font-semibold tw-rounded-full tw-bg-slate-100 dark:tw-bg-slate-800 tw-text-slate-800 dark:tw-text-primary">
                        {{ props.setting.value }}
                    </span>
                </div>
            </template>
            <template v-if="props.setting.type === BOOLEAN">
                <div class="tw-flex tw-flex-row tw-justify-end tw-items-center tw-space-x-2">
                    <InputSwitch v-model="props.setting.value" />
                    <span class="tw-transition tw-duration-300 tw-w-6 tw-py-1 tw-text-right tw-font-semibold tw-rounded-full tw-text-primary">
                        {{ props.setting.value ? 'On' : 'Off' }}
                    </span>
                </div>
            </template>
            <template v-if="props.setting.type === DROPDOWN">
                <div class="tw-w-1/2 tw-ml-auto">
                    <Dropdown v-model="props.setting.value" :options="props.setting.options" optionLabel="label" optionValue="value" />
                </div>
            </template>
        </div>
    </div>
</template>