<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="tw-min-h-screen tw-flex tw-flex-col sm:tw-justify-center tw-items-center tw-pt-6 sm:tw-pt-0 tw-bg-gray-100 dark:tw-bg-gray-900">
        <div>
            <Link class="tw-relative tw-group" :href="route('home')">
                <ApplicationLogo class="tw-w-10 tw-h-10" />
                <ApplicationLogo class="tw-top-0 tw-absolute tw-w-10 tw-h-10 group-hover:tw-animate-ping" />
            </Link>
        </div>

        <div
            class="tw-w-full sm:tw-max-w-md tw-mt-6 tw-px-6 tw-py-4 tw-bg-white dark:tw-bg-gray-800 tw-shadow-md tw-overflow-hidden sm:tw-rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
