<script setup>
import AdminHeader from '@/Components/Layout/AdminHeader.vue';
import Sidebar from '@/Components/Layout/Sidebar.vue';
import { ref } from 'vue';

let isAdminMenuCollapse = ref(false);
let setMenuCollapse = (isMenuCollapse) => {
    isAdminMenuCollapse.value = isMenuCollapse;
}
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
            tw-min-h-screen
            tw-scroll-smooth
            "
    >
        <Sidebar :class="isAdminMenuCollapse ? 'tw-w-[3.5rem]' : 'tw-w-1/6'" :isMenuCollapse="isAdminMenuCollapse" />
        <div class="tw-relative" :class="isAdminMenuCollapse ? 'tw-w-full' : 'tw-w-5/6'">
            <AdminHeader @isMenuCollapse="setMenuCollapse" />
            <article class="tw-pt-4">
                <slot />
            </article>
        </div>
    </main>
</template>
