<script setup>
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';
</script>
<template>
    <div class="tw-container tw-flex tw-items-center tw-justify-between tw-p-2">
        <Link :href="route('home')">
            <ApplicationLogo class="tw-h-6 tw-w-6" />
        </Link>
        <DarkModeToggle />
    </div>
</template>
