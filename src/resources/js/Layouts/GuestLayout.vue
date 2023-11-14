<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div
        class="tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-bg-gray-100 tw-pt-6 dark:tw-bg-gray-900 sm:tw-justify-center sm:tw-pt-0"
    >
        <div>
            <Link class="tw-group tw-relative" :href="route('home')">
                <ApplicationLogo class="tw-h-10 tw-w-10" />
                <ApplicationLogo
                    class="tw-absolute tw-top-0 tw-h-10 tw-w-10 group-hover:tw-animate-ping"
                />
            </Link>
        </div>

        <div
            class="tw-mt-6 tw-w-full tw-overflow-hidden tw-bg-white tw-px-6 tw-py-4 tw-shadow-md dark:tw-bg-gray-800 sm:tw-max-w-md sm:tw-rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
