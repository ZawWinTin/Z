<script setup lang="ts">
import AdminMenuButton from '@/Components/UI/AdminMenuButton.vue';
</script>
<template>
    <div
        class="tw-pointer-events-none tw-absolute tw-left-0 tw-top-0 tw-z-40 tw-flex tw-w-full tw-flex-col tw-px-4 tw-pt-4 tw-duration-300"
    >
        <!-- Navigation Bar -->
        <div class="tw-flex tw-items-center tw-justify-between">
            <AdminMenuButton class="tw-pointer-events-auto" />
        </div>
    </div>
</template>
