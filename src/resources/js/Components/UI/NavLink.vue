<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{
    href: string,
    active?: boolean,
}>();

const classes = computed(() =>
    props.active
        ? 'tw-inline-flex tw-items-center tw-px-1 tw-pt-1 tw-border-b-2 tw-border-indigo-400 dark:tw-border-indigo-600 tw-text-sm tw-font-medium tw-leading-5 tw-text-slate-900 dark:tw-text-slate-100 focus:tw-outline-none focus:tw-border-indigo-700 tw-transition tw-duration-150 tw-ease-in-out'
        : 'tw-inline-flex tw-items-center tw-px-1 tw-pt-1 tw-border-b-2 tw-border-transparent tw-text-sm tw-font-medium tw-leading-5 tw-text-slate-500 dark:tw-text-slate-400 hover:tw-text-slate-700 dark:hover:tw-text-slate-300 hover:tw-border-slate-300 dark:hover:tw-border-slate-700 focus:tw-outline-none focus:tw-text-slate-700 dark:focus:tw-text-slate-300 focus:tw-border-slate-300 dark:focus:tw-border-slate-700 tw-transition tw-duration-150 tw-ease-in-out',
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
