<script setup>
import ToggleButton from 'primevue/togglebutton';
</script>
<template>
    <ToggleButton
        :pt="{
            root: ({ props, context }) => ({
                class: [
                    'tw-inline-flex tw-cursor-pointer tw-select-none tw-items-center tw-align-bottom tw-text-center tw-overflow-hidden tw-relative',
                    'tw-px-4 tw-py-3 tw-rounded-md tw-text-base tw-w-36',
                    'tw-border tw-transition tw-duration-300 tw-ease-in-out',
                    {
                        'tw-outline-none tw-outline-offset-0 tw-shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:tw-shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                            context.focused,
                    },
                    {
                        'tw-bg-slate-50 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-blue-900/40 tw-text-slate-700 dark:tw-text-slate-50/80 hover:tw-bg-slate-100 dark:hover:tw-bg-slate-800/80 hover:tw-border-slate-300 dark:hover:tw-bg-slate-800/70 hover:tw-text-slate-700 dark:hover:tw-text-slate-50/80':
                            !props.modelValue,
                        'tw-bg-blue-500 tw-border-blue-500 tw-text-slate-50 hover:tw-bg-blue-600 hover:tw-border-blue-600':
                            props.modelValue,
                    },
                    {
                        'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                            props.disabled,
                    },
                ],
            }),
            label: ({ props }) => ({
                class: [
                    'tw-flex-1',
                    'tw-duration-300',
                    'tw-font-semibold',
                    {
                        'hover:tw-underline': props.link,
                    },
                    { 'tw-invisible tw-w-0': props.label == null },
                ],
            }),
            icon: ({ props }) => ({
                class: [
                    'tw-mx-0',
                    {
                        'tw-mr-2':
                            props.iconPos == 'left' && props.label != null,
                        'tw-ml-2 tw-order-1':
                            props.iconPos == 'right' && props.label != null,
                        'tw-mb-2':
                            props.iconPos == 'top' && props.label != null,
                        'tw-mt-2 tw-order-2':
                            props.iconPos == 'bottom' && props.label != null,
                    },
                ],
            }),
        }"
    />
</template>
