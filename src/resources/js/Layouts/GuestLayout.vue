<script setup>
import { Link } from '@inertiajs/vue3';
import route from '@/Composables/Route';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
    <div
        class="
            tw-bg-slate-100
            dark:tw-bg-slate-900
            sm:tw-justify-center
            sm:tw-pt-0
            tw-flex
            tw-flex-col
            tw-items-center
            tw-min-h-screen
            tw-pt-6
            "
    >
        <div>
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

        <div
            class="
                tw-bg-slate-50
                dark:tw-bg-slate-800
                sm:tw-max-w-md
                sm:tw-rounded-lg
                tw-mt-6
                tw-overflow-hidden
                tw-px-6
                tw-py-4
                tw-shadow-md
                tw-w-full
                "
        >
            <slot />
        </div>
    </div>
</template>
