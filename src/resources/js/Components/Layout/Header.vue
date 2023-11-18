<script setup>
import { onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import route from '@/Composables/Route';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import MainMenuButton from '@/Components/Buttons/MainMenuButton.vue';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';

// TODO:If not use, remove and background click not working
let headerContainer = ref(null);
let navBar = ref(null);
let mainMenuScreen = ref(null);

let isMenuOpen = ref(false);

let sectionClasses = 'tw-flex tw-flex-col tw-h-full tw-space-y-4 tw-w-1/3';
let menuCardClasses =
    'tw-bg-slate-50 tw-duration-300 tw-flex tw-flex-col tw-p-4 tw-rounded-lg tw-text-slate-900 tw-transition tw-font-semibold tw-uppercase tw-space-y-1';
let menuLinkClasses = 'hover:tw-bg-slate-200 tw-py-2 tw-rounded-full tw-px-4 tw-duration-200 tw-ease-in-out';

onMounted(() => {
    initializeScrolling();
});

let initializeScrolling = () => {
    isMenuOpen.value = false;
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

let getActiveClasses = (routeName) => {
    if (isActiveRoute(routeName)) {
        return `tw-text-transparent
            tw-pointer-events-none
            tw-select-none
            tw-bg-clip-text
            tw-bg-gradient-to-r
            tw-from-indigo-500
            tw-to-primary`;
    }
    return '';
};

let isActiveRoute = (routeName) => {
    return route().has(routeName) && location.pathname == new URL(route(routeName)).pathname;
}
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
            <section :class="sectionClasses" class="tw-pl-4">
                <div :class="menuCardClasses">
                    <Link :class="[getActiveClasses('home'), menuLinkClasses]" :href="route('home')">Home</Link>
                    <template v-if="route().has('admin.dashboard')">
                        <hr
                            class="tw-bg-slate-300 tw-border-0 tw-h-px"
                        />
                        <Link :class="menuLinkClasses" :href="route('admin.dashboard')"
                            >Overview Dashboard</Link
                        >
                        <Link :class="menuLinkClasses" :href="route('admin.logout')" method="post"
                            >Logout</Link
                        >
                    </template>
                </div>
                <div :class="menuCardClasses">
                    <div
                        class="
                            tw-flex
                            tw-flex-row
                            tw-items-center
                            tw-justify-between
                            tw-w-full
                            tw-px-4
                            "
                    >
                        <span class="tw-select-none">Appearance</span>
                        <DarkModeToggle />
                    </div>
                </div>
            </section>
            <section :class="sectionClasses" class="tw-px-4"></section>
            <section :class="sectionClasses" class="tw-pr-4"></section>
        </div>
    </div>
</template>
