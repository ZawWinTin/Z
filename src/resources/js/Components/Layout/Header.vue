<script setup>
import { onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import MainMenuButton from '@/Components/Elements/MainMenuButton.vue';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';

// TODO:If not use, remove and background click not working
let headerContainer = ref(null);
let navBar = ref(null);
let mainMenuScreen = ref(null);

let isMenuOpen = ref(false);

onMounted(() => {
    initializeScrolling();
});

let initializeScrolling = () => {
    document.querySelector('body').classList.remove('tw-overflow-hidden');
};

let toggleMainMenu = () => {
    let body = document.querySelector('body');
    isMenuOpen.value = !isMenuOpen.value;
    if (isMenuOpen.value) {
        body.classList.add('tw-overflow-hidden');
    } else {
        body.classList.remove('tw-overflow-hidden');
    }
};
</script>
<template>
    <div
        ref="headerContainer"
        @click.self="toggleMainMenu"
        class="
            tw-bg-slate-950
            tw-duration-300
            tw-fixed
            tw-flex
            tw-flex-col
            tw-inset-0
            tw-overflow-hidden
            tw-pb-8
            tw-pt-2
            tw-space-y-2
            tw-transition-all
            tw-w-full
            tw-z-[99]
            "
        :class="
            isMenuOpen
                ? 'tw-pointer-events-auto tw-h-screen tw-bg-opacity-80'
                : 'tw-pointer-events-none tw-h-auto tw-bg-opacity-10'
        "
    >
        <!-- Navigation Bar -->
        <div
            ref="navBar"
            class="
                tw-container
                tw-flex
                tw-items-center
                tw-justify-between
                tw-py-2
                "
        >
            <Link class="tw-pointer-events-auto" :href="route('home')">
                <ApplicationLogo
                    class="tw-h-6 tw-w-6"
                    :class="
                        isMenuOpen
                            ? '!tw-stroke-slate-50 !tw-text-slate-50'
                            : ''
                    "
                />
            </Link>
            <MainMenuButton
                class="tw-pointer-events-auto"
                @click="toggleMainMenu"
                :class="
                    isMenuOpen
                        ? '!tw-bg-slate-50 !tw-text-slate-900 !tw-border-slate-50'
                        : ''
                "
            />
        </div>

        <!-- Main Menu Screen -->
        <div
            ref="mainMenuScreen"
            class="tw-container tw-flex-row-reverse tw-h-full"
            :class="isMenuOpen ? 'tw-flex' : 'tw-hidden'"
        >
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
