<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import route from '@/Composables/Common/Route';
import Cursor from '@/Components/UI/Cursor.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';
</script>

<template>
    <main
        class="
            main-bg-1
            tw-duration-300
            tw-ease-in-out
            sm:tw-justify-center
            sm:tw-pt-0
            tw-flex
            tw-flex-col
            tw-items-center
            tw-min-h-screen
            tw-pt-6
            "
    >
        <Cursor />

        <div
            class="
                tw-duration-300
                tw-ease-in-out
                main-bg-2
                sm:tw-max-w-md
                sm:tw-rounded-lg
                tw-mt-6
                tw-overflow-hidden
                tw-px-6
                tw-py-4
                tw-shadow-md
                tw-w-full
                tw-z-[1]
                "
        >
            <div class="tw-py-6 tw-relative">
                <div class="tw-flex tw-flex-col tw-items-center">
                    <Link class="tw-group tw-relative" :href="route('home')">
                        <ApplicationLogo class="tw-h-10 tw-w-10" />
                        <ApplicationLogo
                            class="
                                group-hover:tw-animate-ping
                                tw-absolute
                                tw-h-10
                                tw-top-0
                                tw-w-10
                                "
                        />
                    </Link>
                </div>
                <DarkModeToggle class="!tw-absolute tw-right-0 tw-top-0 !tw-text-[9%]" />
            </div>
            <slot />
        </div>
    </main>
</template>
