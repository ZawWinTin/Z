<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
}>();

const classes = computed(() =>
    props.active
        ? 'tw-block tw-w-full tw-pl-3 tw-pr-4 tw-py-2 tw-border-l-4 tw-border-indigo-400 dark:tw-border-indigo-600 tw-text-left tw-text-base tw-font-medium tw-text-indigo-700 dark:tw-text-indigo-300 tw-bg-indigo-50 dark:tw-bg-indigo-900/50 focus:tw-outline-none focus:tw-text-indigo-800 dark:focus:tw-text-indigo-200 focus:tw-bg-indigo-100 dark:focus:tw-bg-indigo-900 focus:tw-border-indigo-700 dark:focus:tw-border-indigo-300 tw-transition tw-duration-150 tw-ease-in-out'
        : 'tw-block tw-w-full tw-pl-3 tw-pr-4 tw-py-2 tw-border-l-4 tw-border-transparent tw-text-left tw-text-base tw-font-medium tw-text-slate-600 dark:tw-text-slate-400 hover:tw-text-slate-800 dark:hover:tw-text-slate-200 hover:tw-bg-slate-50 dark:hover:tw-bg-slate-700 hover:tw-border-slate-300 dark:hover:tw-border-slate-600 focus:tw-outline-none focus:tw-text-slate-800 dark:focus:tw-text-slate-200 focus:tw-bg-slate-50 dark:focus:tw-bg-slate-700 focus:tw-border-slate-300 dark:focus:tw-border-slate-600 tw-transition tw-duration-150 tw-ease-in-out',
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
