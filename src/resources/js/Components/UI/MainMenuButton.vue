<script setup lang="ts">
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/vue/20/solid';
import Button from 'primevue/button';

const props = defineProps<{
    isMenuOpen: boolean;
}>();
</script>
<template>
    <Button
        outlined
        rounded
        class="tw-group tw-aspect-auto tw-border-2 tw-border-slate-900 !tw-px-2 !tw-py-0.5 tw-font-semibold tw-uppercase tw-text-slate-900 tw-transition tw-duration-300 hover:tw-bg-slate-50 hover:tw-text-slate-900 focus:!tw-border-slate-900 focus:!tw-outline-none focus:!tw-ring-2 focus:!tw-ring-slate-900/80 focus:!tw-ring-offset-1 dark:tw-border-slate-50 dark:tw-text-slate-50 dark:hover:tw-bg-slate-50 dark:hover:tw-text-slate-900 focus:dark:!tw-border-slate-50 focus:dark:!tw-ring-slate-50/80 focus:dark:!tw-ring-offset-slate-800"
        :class="{
            '!tw-border-slate-50 !tw-bg-slate-50 !tw-text-slate-900':
                props.isMenuOpen,
        }"
    >
        <div class="menu-btn-text tw-h-6">
            <div
                class="transition-transform tw-flex tw-flex-col tw-items-center tw-duration-300"
                :class="{
                    'group-hover:tw-translate-y-[-1.5rem]': props.isMenuOpen,
                }"
            >
                <div class="tw-flex tw-flex-row tw-items-center">
                    <span>Menu</span>
                    <span class="-tw-mr-1">
                        <EllipsisVerticalIcon
                            class="tw-h-4 tw-w-4 tw-stroke-current"
                        />
                    </span>
                </div>
                <div class="tw-flex tw-flex-row tw-items-center">
                    <span>Close</span>
                    <span>
                        <XMarkIcon class="tw-h-4 tw-w-4 tw-stroke-current" />
                    </span>
                </div>
            </div>
        </div>
    </Button>
</template>
<style lang="scss" scoped>
.menu-btn-text {
    clip-path: polygon(0 0, 100% 0, 100% 1.5rem, 0 1.5rem);
}
</style>
