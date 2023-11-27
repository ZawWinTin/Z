<script setup>
import Button from 'primevue/button';

const props = defineProps({
    outlined: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
});
</script>
<template>
    <Button
        :pt="{
            root: ({ props, context }) => ({
                class: [
                    'tw-items-center tw-cursor-pointer tw-inline-flex tw-overflow-hidden tw-relative tw-select-none tw-text-center tw-align-bottom',
                    'tw-transition tw-duration-300 tw-ease-in-out',
                    'focus:tw-outline-none focus:outline-offset-0',
                    {
                        'tw-text-slate-50 dark:tw-text-slate-50 tw-bg-primary dark:tw-bg-primary tw-border tw-border-primary dark:tw-border-primary hover:tw-bg-primary-dark dark:hover:tw-bg-primary-dark hover:tw-border-primary dark:hover:tw-border-primary focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1':
                            !props.link &&
                            props.severity === null &&
                            !props.text &&
                            !props.outlined &&
                            !props.plain,
                        'tw-text-primary tw-bg-transparent tw-border-transparent focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                            props.link,
                    },
                    {
                        'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1':
                            props.severity === null,
                        'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-slate-500/80 focus:tw-ring-offset-1':
                            props.severity === 'secondary',
                        'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-500/80 focus:tw-ring-offset-1':
                            props.severity === 'success',
                        'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500/80 focus:tw-ring-offset-1':
                            props.severity === 'info',
                        'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-orange-500/80 focus:tw-ring-offset-1':
                            props.severity === 'warning',
                        'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-purple-500/80 focus:tw-ring-offset-1':
                            props.severity === 'help',
                        'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500/80 focus:tw-ring-offset-1':
                            props.severity === 'danger',
                    },
                    {
                        'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-slate-500 dark:tw-bg-slate-400 tw-border tw-border-slate-500 dark:tw-border-slate-400 hover:tw-bg-slate-600 dark:hover:tw-bg-slate-500 hover:tw-border-slate-600 dark:hover:tw-border-slate-500':
                            props.severity === 'secondary' &&
                            !props.text &&
                            !props.outlined &&
                            !props.plain,
                        'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-green-500 dark:tw-bg-green-400 tw-border tw-border-green-500 dark:tw-border-green-400 hover:tw-bg-green-600 dark:hover:tw-bg-green-500 hover:tw-border-green-600 dark:hover:tw-border-green-500':
                            props.severity === 'success' &&
                            !props.text &&
                            !props.outlined &&
                            !props.plain,
                        'tw-text-slate-50 dark:tw-text-slate-900 dark:tw-bg-blue-400 tw-bg-blue-500 dark:tw-bg-blue-400 tw-border tw-border-blue-500 dark:tw-border-blue-400 hover:tw-bg-blue-600 hover:tw-border-blue-600 dark:hover:tw-bg-blue-500 dark:hover:tw-border-blue-500':
                            props.severity === 'info' &&
                            !props.text &&
                            !props.outlined &&
                            !props.plain,
                        'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-orange-500 dark:tw-bg-orange-400 tw-border tw-border-orange-500 dark:tw-border-orange-400 hover:tw-bg-orange-600 dark:hover:tw-bg-orange-500 hover:tw-border-orange-600 dark:hover:tw-border-orange-500':
                            props.severity === 'warning' &&
                            !props.text &&
                            !props.outlined &&
                            !props.plain,
                        'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-purple-500 dark:tw-bg-purple-400 tw-border tw-border-purple-500 dark:tw-border-purple-400 hover:tw-bg-purple-600 dark:hover:tw-bg-purple-500 hover:tw-border-purple-600 dark:hover:tw-border-purple-500':
                            props.severity === 'help' &&
                            !props.text &&
                            !props.outlined &&
                            !props.plain,
                        'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-red-500 dark:tw-bg-red-400 tw-border tw-border-red-500 dark:tw-border-red-400 hover:tw-bg-red-600 dark:hover:tw-bg-red-500 hover:tw-border-red-600 dark:hover:tw-border-red-500':
                            props.severity === 'danger' &&
                            !props.text &&
                            !props.outlined &&
                            !props.plain,
                    },
                    { 'tw-shadow-lg': props.raised },
                    {
                        'tw-rounded-md': !props.rounded,
                        'tw-rounded-full': props.rounded,
                        'tw-aspect-square': props.label == null && props.rounded,
                    },
                    {
                        'tw-bg-transparent tw-border-transparent':
                            props.text && !props.plain,
                        'tw-text-blue-500 dark:tw-text-blue-400 hover:bg-blue-300/20':
                            props.text &&
                            (props.severity === null ||
                                props.severity === 'info') &&
                            !props.plain,
                        'tw-text-slate-500 dark:tw-text-slate-400 hover:bg-slate-300/20':
                            props.text &&
                            props.severity === 'secondary' &&
                            !props.plain,
                        'tw-text-green-500 dark:tw-text-green-400 hover:bg-green-300/20':
                            props.text &&
                            props.severity === 'success' &&
                            !props.plain,
                        'tw-text-orange-500 dark:tw-text-orange-400 hover:bg-orange-300/20':
                            props.text &&
                            props.severity === 'warning' &&
                            !props.plain,
                        'tw-text-purple-500 dark:tw-text-purple-400 hover:bg-purple-300/20':
                            props.text &&
                            props.severity === 'help' &&
                            !props.plain,
                        'tw-text-red-500 dark:tw-text-red-400 hover:bg-red-300/20':
                            props.text &&
                            props.severity === 'danger' &&
                            !props.plain,
                    },
                    { 'tw-shadow-lg': props.raised && props.text },
                    {
                        'tw-text-slate-500 hover:bg-slate-300/20':
                            props.plain && props.text,
                        'tw-text-slate-500 tw-border tw-border-slate-500 hover:bg-slate-300/20':
                            props.plain && props.outlined,
                        'tw-text-slate-50 tw-bg-slate-500 tw-border tw-border-slate-500 hover:tw-bg-slate-600 hover:tw-border-slate-600':
                            props.plain && !props.outlined && !props.text,
                    },
                    {
                        'tw-bg-transparent tw-border': props.outlined && !props.plain,
                        'tw-text-primary dark:tw-text-primary tw-border tw-border-primary dark:tw-border-primary hover:tw-bg-primary/20':
                            props.outlined &&
                            props.severity === null &&
                            !props.plain,
                        'tw-text-blue-500 dark:tw-text-blue-400 tw-border tw-border-blue-500 dark:tw-border-blue-400 hover:tw-bg-blue-300/20':
                            props.outlined &&
                            props.severity === 'info' &&
                            !props.plain,
                        'tw-text-slate-500 dark:tw-text-slate-400 tw-border tw-border-slate-500 dark:tw-border-slate-400 hover:tw-bg-slate-300/20':
                            props.outlined &&
                            props.severity === 'secondary' &&
                            !props.plain,
                        'tw-text-green-500 dark:tw-text-green-400 tw-border tw-border-green-500 dark:tw-border-green-400 hover:tw-bg-green-300/20':
                            props.outlined &&
                            props.severity === 'success' &&
                            !props.plain,
                        'tw-text-orange-500 dark:tw-text-orange-400 tw-border tw-border-orange-500 dark:tw-border-orange-400 hover:tw-bg-orange-300/20':
                            props.outlined &&
                            props.severity === 'warning' &&
                            !props.plain,
                        'tw-text-purple-500 dark:tw-text-purple-400 tw-border tw-border-purple-500 dark:tw-border-purple-400 hover:tw-bg-purple-300/20':
                            props.outlined &&
                            props.severity === 'help' &&
                            !props.plain,
                        'tw-text-red-500 dark:tw-text-red-400 tw-border tw-border-red-500 dark:tw-border-red-400 hover:tw-bg-red-300/20':
                            props.outlined &&
                            props.severity === 'danger' &&
                            !props.plain,
                    },
                    {
                        'tw-px-4 tw-py-2 tw-text-base': props.size === null,
                        'tw-text-xs tw-py-2 tw-px-3': props.size === 'small',
                        'tw-text-xl tw-py-3 tw-px-4': props.size === 'large',
                    },
                    {
                        'tw-flex-column':
                            props.iconPos == 'top' || props.iconPos == 'bottom',
                    },
                    {
                        'tw-opacity-60 tw-pointer-events-none tw-cursor-default':
                            context.disabled,
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
            loadingIcon: 'tw-mr-2',
            icon: ({ props }) => ({
                class: [
                    'tw-mx-0',
                    {
                        'tw-mr-2': props.iconPos == 'left' && props.label != null,
                        'tw-ml-2 tw-order-1': props.iconPos == 'right' && props.label != null,
                        'tw-mb-2': props.iconPos == 'top' && props.label != null,
                        'tw-mt-2 tw-order-2': props.iconPos == 'bottom' && props.label != null,
                    },
                ],
            }),
            badge: ({ props }) => ({
                class: [
                    {
                        'tw-ml-2 tw-w-4 tw-h-4 tw-leading-none tw-flex tw-items-center tw-justify-center':
                            props.badge,
                    },
                ],
            }),
        }"
        :rounded="props.rounded"
        :outlined="props.outlined"
        :loading="props.loading"
    />
</template>
