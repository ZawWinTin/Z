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
    <div class="tw-rounded-2xl tw-shadow hover:tw-shadow-primary tw-w-[calc(33.33%-1rem)] tw-flex tw-flex-col tw-p-5 main-bg-3 tw-transition tw-duration-300 tw-space-y-4 tw-justify-between">
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
            <template v-if="props.setting.type === NUMBER">
                <div class="tw-flex tw-flex-row tw-items-center tw-space-x-2">
                    <Slider v-model="props.setting.value" :min="parseInt(props.setting.options.min)" :max="parseInt(props.setting.options.max)" class="tw-w-full" />
                    <span class="tw-transition tw-duration-300 tw-w-24 tw-py-1 tw-text-center tw-font-semibold tw-rounded-full main-bg-2 tw-text-slate-800 dark:tw-text-primary">
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