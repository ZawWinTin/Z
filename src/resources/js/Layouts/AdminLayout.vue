<script setup lang="ts">
import Preloader from '@/Components/Elements/Preloader.vue';
import AdminHeader from '@/Components/Layout/AdminHeader.vue';
import Sidebar from '@/Components/Layout/Sidebar.vue';
import { useAdminMenuStore } from '@/Composables/Admin/AdminMenuStore';

const adminMenuStore = useAdminMenuStore();
</script>
<template>
    <main
        class="main-bg-1 tw-flex tw-h-screen tw-flex-row tw-scroll-smooth tw-duration-300 tw-ease-in-out"
    >
        <Sidebar
            :class="
                adminMenuStore.isAdminMenuCollapse
                    ? 'tw-hidden tw-w-0 sm:tw-flex sm:tw-w-[3.5rem]'
                    : 'tw-absolute tw-w-2/3 sm:tw-static sm:tw-w-1/6'
            "
        />
        <div
            class="tw-relative tw-w-full"
            :class="adminMenuStore.isAdminMenuCollapse ? '' : 'sm:tw-w-5/6'"
        >
            <AdminHeader />
            <article class="tw-mx-4 tw-h-screen tw-pb-8 tw-pt-16">
                <slot />
            </article>
        </div>
        <Preloader :isAdminLayout="true" />
    </main>
</template>
