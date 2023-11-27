<script setup>
import Password from 'primevue/password';
import { ref } from 'vue';
import { TRANSITIONS } from '@/Composables/Theme';

const props = defineProps({
    id: {
        default: null,
    },
    feedback: {
        default: false,
    },
    autocomplete: {
        default: null,
    }
});
const input = ref(null);
</script>

<template>
    <Password
        v-model="input"
        :inputId="props.id"
        :inputProps="{ autocomplete: props.autocomplete }"
        :pt="{
            root: ({ props }) => ({
                class: [
                    'tw-inline-flex tw-relative tw-p-0 tw-rounded-md tw-border-none tw-bg-transparent',
                    {
                        'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default': props.disabled
                    }
                ]
            }),
            input: {
                class: [
                    'dark:tw-bg-slate-900 dark:tw-text-slate-300',
                    'tw-w-full tw-pr-8 tw-rounded-md tw-duration-300 tw-ease-in-out tw-shadow-sm',
                    'tw-border-slate-300 dark:tw-border-slate-700',
                    'hover:tw-border-primary/80 dark:hover:tw-border-primary/80',
                    'focus:tw-border-primary focus:tw-ring-primary dark:focus:tw-border-primary dark:focus:tw-ring-primary'
                ]
            },
            panel: 'tw-p-5 tw-bg-slate-50 dark:tw-bg-slate-900 tw-text-slate-700 dark:tw-text-slate-50/80 tw-shadow-md tw-rounded-md',
            meter: 'tw-mb-2 tw-bg-slate-300 dark:tw-bg-slate-700 tw-h-3',
            meterlabel: ({ instance, props }) => ({
                class: [
                    'tw-transition tw-duration-1000 tw-ease-in-out tw-h-full',
                    {
                        'tw-bg-red-500': instance?.meter?.strength == 'weak',
                        'tw-bg-orange-500': instance?.meter?.strength == 'medium',
                        'tw-bg-green-500': instance?.meter?.strength == 'strong'
                    },
                    { 'tw-pr-[2.5rem] ': props.toggleMask }
                ]
            }),
            showicon: {
                class: ['tw-absolute tw-top-1/2 -tw-mt-2', 'tw-right-3 tw-text-slate-600 dark:tw-text-slate-400']
            },
            hideicon: {
                class: ['tw-absolute tw-top-1/2 -tw-mt-2', 'tw-right-3 tw-text-slate-600 dark:tw-text-slate-400']
            },
            transition: TRANSITIONS.overlay
        }"
        toggleMask
        :feedback="props.feedback"
    />
</template>
