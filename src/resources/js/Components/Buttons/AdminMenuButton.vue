<script setup>
import { useAdminMenuStore } from '@/Composables/Admin/AdminMenuStore';
import { Bars3Icon } from '@heroicons/vue/20/solid';
import { ChevronDoubleLeftIcon } from '@heroicons/vue/20/solid';

const adminMenuStore = useAdminMenuStore();
</script>
<template>
    <button
        @click="adminMenuStore.toggleAdminMenu"
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
        <span>
            <template v-if="adminMenuStore.isAdminMenuCollapse">
                <Bars3Icon class="tw-h-5 tw-stroke-current tw-w-5" />
            </template>
            <template v-if="!adminMenuStore.isAdminMenuCollapse">
                <ChevronDoubleLeftIcon class="tw-h-5 tw-stroke-current tw-w-5" />
            </template>
        </span>
    </button>
</template>