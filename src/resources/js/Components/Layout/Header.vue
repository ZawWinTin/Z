<script setup>
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import MainMenuButton from '@/Components/Elements/MainMenuButton.vue';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';
</script>
<template>
    <div
        class="
            tw-bg-opacity-0
            tw-bg-slate-950
            tw-fixed
            tw-flex
            tw-flex-col
            tw-h-screen
            tw-inset-0
            tw-overflow-hidden
            tw-pb-8
            tw-pt-2
            tw-space-y-2
            tw-w-full
            tw-z-[99]
            "
    >
        <div
            class="tw-container tw-flex tw-items-center tw-justify-between tw-py-2"
        >
            <Link :href="route('home')">
                <ApplicationLogo class="tw-h-6 tw-w-6" />
            </Link>
            <MainMenuButton />
        </div>
        <div class="tw-container tw-flex tw-h-full tw-flex-row-reverse">
            <section
                class="
                    tw-flex
                    tw-flex-col
                    tw-h-full
                    tw-pl-4
                    tw-space-y-4
                    tw-w-1/3
                    "
            >
                <div
                    class="
                        tw-bg-slate-50
                        tw-duration-300
                        tw-flex
                        tw-flex-col
                        tw-p-4
                        tw-rounded-lg
                        tw-text-slate-900
                        tw-transition
                        "
                >
                    <div
                        class="
                            tw-flex
                            tw-flex-row
                            tw-items-center
                            tw-justify-between
                            tw-w-full
                            "
                    >
                        <span
                            class="
                                tw-font-semibold
                                tw-select-none
                                tw-uppercase
                                "
                            >Appearance</span
                        >
                        <DarkModeToggle />
                    </div>
                </div>
            </section>
            <section
                class="
                    tw-flex
                    tw-flex-col
                    tw-h-full
                    tw-px-4
                    tw-w-1/3
                    "
            ></section>
            <section
                class="
                    tw-flex
                    tw-flex-col
                    tw-h-full
                    tw-pr-4
                    tw-w-1/3
                    "
            ></section>
        </div>
    </div>
</template>
