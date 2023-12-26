<script setup lang="ts">
import { useAdminMenuStore } from '@/Composables/Admin/AdminMenuStore';
import { Bars3Icon } from '@heroicons/vue/20/solid';
import { ChevronDoubleLeftIcon } from '@heroicons/vue/20/solid';

const adminMenuStore = useAdminMenuStore();
</script>
<template>
    <button
        @click="adminMenuStore.toggleAdminMenu"
        class="tw-flex tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-slate-900 tw-bg-transparent tw-px-2 tw-py-1 tw-font-semibold tw-uppercase tw-text-slate-900 tw-transition tw-duration-300 hover:tw-border-transparent hover:tw-bg-slate-50 hover:tw-text-slate-900 dark:tw-border-slate-50 dark:tw-text-slate-50 dark:hover:tw-bg-slate-50 dark:hover:tw-text-slate-900"
    >
        <span>
            <template v-if="adminMenuStore.isAdminMenuCollapse">
                <Bars3Icon class="tw-h-5 tw-w-5 tw-stroke-current" />
            </template>
            <template v-if="!adminMenuStore.isAdminMenuCollapse">
                <ChevronDoubleLeftIcon
                    class="tw-h-5 tw-w-5 tw-stroke-current"
                />
            </template>
        </span>
    </button>
</template>
