<script setup>
import { useAdminMenuStore } from '@/Composables/Admin/AdminMenuStore';

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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="tw-h-5 tw-stroke-current tw-w-5">
                    <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                </svg>
            </template>
            <template v-if="!adminMenuStore.isAdminMenuCollapse">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="tw-h-5 tw-stroke-current tw-w-5">
                    <path fill-rule="evenodd" d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z" clip-rule="evenodd" />
                </svg>
            </template>
        </span>
    </button>
</template>