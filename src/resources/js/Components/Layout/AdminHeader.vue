<script setup lang="ts">
import AdminMenuButton from '@/Components/Buttons/AdminMenuButton.vue';
</script>
<template>
    <div class="
        tw-absolute
        tw-flex
        tw-flex-col
        tw-left-0
        tw-top-0
        tw-pt-4
        tw-px-4
        tw-w-full
        tw-duration-300
        tw-pointer-events-none
        tw-z-40
    ">
        <!-- Navigation Bar -->
        <div class="tw-flex tw-items-center tw-justify-between">
            <AdminMenuButton class="tw-pointer-events-auto" />
        </div>
    </div>
</template>