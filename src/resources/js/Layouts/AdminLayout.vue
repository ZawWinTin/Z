<script setup>
import AdminHeader from '@/Components/Layout/AdminHeader.vue';
import Sidebar from '@/Components/Layout/Sidebar.vue';
import Preloader from '@/Components/Elements/Preloader.vue';
import { useAdminMenuStore } from '@/Composables/Admin/AdminMenuStore';

const adminMenuStore = useAdminMenuStore();

</script>
<template>
    <main
        class="
            tw-bg-slate-50
            dark:tw-bg-slate-950
            selection:tw-bg-primary/80
            selection:tw-text-slate-50
            tw-duration-300
            tw-ease-in-out
            tw-flex
            tw-flex-row
            tw-h-screen
            tw-scroll-smooth
            "
    >
        <Sidebar :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden tw-w-0 sm:tw-flex sm:tw-w-[3.5rem]' : 'tw-w-2/3 sm:tw-w-1/6 tw-absolute sm:tw-static'" />
        <div class="tw-relative tw-w-full" :class="adminMenuStore.isAdminMenuCollapse ? '' : 'sm:tw-w-5/6'">
            <AdminHeader />
            <article class="tw-pt-14 tw-pb-4 tw-mx-4 tw-h-screen tw-overflow-y-auto">
                <slot />
            </article>
        </div>
        <Preloader :isAdminLayout="true" />
    </main>
</template>
