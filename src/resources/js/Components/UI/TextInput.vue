<script setup>
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const input = ref(null);
</script>

<template>
    <InputText
        v-model="input"
        :pt="{
            root: ({ props, context }) => ({
            class: [
                'tw-duration-300 tw-ease-in-out tw-rounded-full tw-shadow-sm',
                'tw-border-slate-300 dark:tw-bg-slate-900 dark:tw-border-slate-700 dark:tw-text-slate-300',
                'focus:tw-border-primary dark:focus:tw-border-primary focus:tw-ring-primary dark:focus:tw-ring-primary',
                {
                    'hover:tw-border-primary/80 dark:hover:tw-border-primary/80 focus:tw-outline-none focus:tw-outline-offset-0': !context.disabled,
                    'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default': context.disabled
                },
                ]
            })
        }"
    />
</template>
