<script setup>
import ToggleButton from 'primevue/togglebutton';
</script>
<template>
    <ToggleButton
        :pt="{
            root: ({ props, context }) => ({
                class: [
                    'tw-inline-flex tw-cursor-pointer tw-select-none tw-items-center tw-align-bottom tw-text-center tw-overflow-hidden tw-relative',
                    'tw-px-4 tw-py-2 tw-rounded-full tw-text-base tw-w-36',
                    'tw-border tw-transition tw-duration-300 tw-ease-in-out',
                    {
                        'dark:tw-ring-offset-slate-800 tw-outline-none tw-ring-2 tw-ring-primary/80 tw-ring-offset-1':
                            context.focused,
                    },
                    {
                        'tw-bg-slate-50 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-primary/40 tw-text-slate-700 dark:tw-text-slate-50/80 hover:tw-bg-slate-100 dark:hover:tw-bg-slate-800/80 hover:tw-border-slate-300 dark:hover:tw-bg-slate-800/70 hover:tw-text-slate-700 dark:hover:tw-text-slate-50/80':
                            !props.modelValue,
                        'tw-bg-primary tw-border-primary tw-text-slate-50 hover:tw-bg-primary-dark hover:tw-border-primary-dark':
                            props.modelValue,
                    },
                    {
                        'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                            props.disabled,
                    },
                ],
            }),
            label: () => ({
                class: [
                    'tw-w-full',
                    'tw-text-center',
                    'tw-font-semibold',
                ],
            }),
            icon: ({ props }) => ({
                class: [
                    'tw-mr-2',
                    {
                        'tw-text-slate-600 dark:tw-text-slate-50/70': !props.modelValue,
                        'tw-text-slate-50': props.modelValue
                    }
                ],
            }),
        }"
    />
</template>
