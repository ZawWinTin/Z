<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Cursor from '@/Components/UI/Cursor.vue';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';
import route from '@/Composables/Common/Route';
</script>

<template>
    <main
        class="main-bg-1 tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-pt-6 tw-duration-300 tw-ease-in-out sm:tw-justify-center sm:tw-pt-0"
    >
        <Cursor />

        <div
            class="main-bg-2 tw-z-[1] tw-mt-6 tw-w-full tw-overflow-hidden tw-px-6 tw-py-4 tw-shadow-md tw-duration-300 tw-ease-in-out sm:tw-max-w-md sm:tw-rounded-lg"
        >
            <div class="tw-relative tw-py-6">
                <div class="tw-flex tw-flex-col tw-items-center">
                    <Link class="tw-group tw-relative" :href="route('home')">
                        <ApplicationLogo class="tw-h-10 tw-w-10" />
                        <ApplicationLogo
                            class="tw-absolute tw-top-0 tw-h-10 tw-w-10 group-hover:tw-animate-ping"
                        />
                    </Link>
                </div>
                <DarkModeToggle
                    class="!tw-absolute tw-right-0 tw-top-0 !tw-text-[9%]"
                />
            </div>
            <slot />
        </div>
    </main>
</template>
