<script setup lang="ts">
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid';
</script>
<template>
    <button
        class="
            tw-bg-transparent
            dark:hover:tw-bg-slate-50
            dark:hover:tw-text-slate-900
            dark:tw-border-slate-50
            dark:tw-text-slate-50
            hover:tw-bg-slate-50
            hover:tw-border-transparent
            hover:tw-text-slate-900
            tw-border-2
            tw-border-slate-900
            tw-duration-300
            tw-flex
            tw-font-semibold
            tw-items-center
            tw-justify-center
            tw-px-2
            tw-py-0.5
            tw-rounded-full
            tw-text-slate-900
            tw-transition
            tw-uppercase
            "
    >
        Menu
        <span class="-tw-mr-1">
            <EllipsisVerticalIcon class="tw-h-4 tw-stroke-current tw-w-4" />
        </span>
    </button>
</template>
