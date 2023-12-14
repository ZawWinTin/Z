<script setup>
import { onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import route from '@/Composables/Common/Route';
import Transitions from '@/Composables/UI/Transitions';
import { isActiveRoute } from '@/Composables/Common/Helper';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import MainMenuButton from '@/Components/Buttons/MainMenuButton.vue';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';

let isMenuOpen = ref(false);

let sectionClasses = 'tw-flex tw-flex-col tw-h-full tw-space-y-4 tw-w-1/3';
let menuCardClasses =
    'tw-bg-slate-50 tw-duration-300 tw-flex tw-flex-col tw-p-4 tw-rounded-lg tw-text-slate-900 tw-transition tw-font-semibold tw-uppercase tw-space-y-1';
let menuLinkClasses = 'hover:tw-bg-slate-200 tw-py-2 tw-rounded-full tw-px-4 tw-duration-200 tw-ease-in-out tw-text-left tw-uppercase';

onMounted(() => {
    initializeScrolling();
});

let initializeScrolling = () => {
    isMenuOpen.value = false;
    document.querySelector('body').classList.remove('tw-overflow-hidden');
};

let toggleMainMenu = (event) => {
    event.stopPropagation();
    isMenuOpen.value = !isMenuOpen.value;
    if (isMenuOpen.value) {
        document.body.classList.add('tw-overflow-hidden');
    } else {
        document.body.classList.remove('tw-overflow-hidden');
    }
};

let getActiveClasses = (routeName) => {
    if (isActiveRoute(routeName)) {
        return 'main-text-gradient tw-pointer-events-none tw-select-none';
    }
    return '';
};
</script>
<template>
    <div
        @click="toggleMainMenu"
        class="
            tw-bg-slate-950
            tw-duration-300
            tw-fixed
            tw-flex
            tw-flex-col
            tw-inset-0
            tw-overflow-hidden
            tw-pb-8
            tw-pt-4
            tw-space-y-3
            tw-transition-all
            tw-w-full
            tw-z-[90]
            "
        :class="
            isMenuOpen
                ? 'tw-pointer-events-auto tw-h-screen tw-bg-opacity-80'
                : 'tw-pointer-events-none tw-h-auto tw-bg-opacity-0'
        "
    >
        <!-- Navigation Bar -->
        <div
            class="
                tw-container
                tw-flex
                tw-items-center
                tw-justify-between
                "
        >
            <Link class="tw-pointer-events-auto tw-py-0.5" :href="route('home')">
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
        <transition
            :enter-from-class="Transitions.floatIn.enterFromClass"
            :enter-active-class="
                Transitions.floatIn.enterActiveClass
            "
            :leave-active-class="
                Transitions.floatIn.leaveActiveClass
            "
            :leave-to-class="Transitions.floatIn.leaveToClass"
        >
            <div v-show="isMenuOpen"
                class="tw-container tw-flex tw-flex-row-reverse tw-h-full"
            >
                <section :class="sectionClasses" class="tw-pl-4">
                    <div :class="menuCardClasses">
                        <Link :class="[getActiveClasses('home'), menuLinkClasses]" :href="route('home')">Home</Link>
                        <Link :class="[getActiveClasses('article.index'), menuLinkClasses]" :href="route('article.index')">Articles</Link>
                        <Link :class="[getActiveClasses('about'), menuLinkClasses]" href="#">About</Link>
                        <Link :class="[getActiveClasses('contact'), menuLinkClasses]" href="#">Contact</Link>
                        <template v-if="route().has('admin.dashboard')">
                            <hr
                                class="tw-bg-slate-300 tw-border-0 tw-h-px"
                            />
                            <Link :class="menuLinkClasses" :href="route('admin.dashboard')"
                                >Overview Dashboard</Link
                            >
                            <Link :class="menuLinkClasses" :href="route('admin.logout')" method="post" as="button"
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
        </transition>
    </div>
</template>
