<script setup lang="ts">
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid';
</script>
<template>
    <button
        class="tw-flex tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-slate-900 tw-bg-transparent tw-px-2 tw-py-0.5 tw-font-semibold tw-uppercase tw-text-slate-900 tw-transition tw-duration-300 hover:tw-border-transparent hover:tw-bg-slate-50 hover:tw-text-slate-900 dark:tw-border-slate-50 dark:tw-text-slate-50 dark:hover:tw-bg-slate-50 dark:hover:tw-text-slate-900"
    >
        Menu
        <span class="-tw-mr-1">
            <EllipsisVerticalIcon class="tw-h-4 tw-w-4 tw-stroke-current" />
        </span>
    </button>
</template>
