<script setup lang="ts">
import { onMounted, computed, ref, watchEffect } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import route from '@/Composables/Common/Route';
import Transitions from '@/Composables/UI/Transitions';
import { isActiveRoute, scrollToTop } from '@/Composables/Common/Helper';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import MainMenuButton from '@/Components/UI/MainMenuButton.vue';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';
import { useContactViewStore } from '@/Composables/Common/PiniaStore';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const isMenuOpen = ref(false);

const toast = useToast();
const toastVisible = ref(false);

const contact = ref<HTMLElement | null>(null);
const contactViewStore = useContactViewStore();

const fragments = {
    home: { url: 'home', element: ref<HTMLElement | null>(null) },
    articles: { url: 'article.index', element: ref<HTMLElement | null>(null) },
    about: { url: 'home', element: ref<HTMLElement | null>(null) },
    contact: { url: 'contact', element: ref<HTMLElement | null>(null) },
};

const sectionClasses = 'tw-flex tw-flex-col tw-h-full tw-space-y-4 tw-w-1/3';
const menuCardClasses =
    'main-bg-3-light-only tw-duration-300 tw-flex tw-flex-col tw-p-4 tw-rounded-lg tw-text-slate-900 tw-transition tw-font-semibold tw-uppercase tw-space-y-1';
const menuLinkClasses = 'hover:tw-bg-slate-200 tw-py-2 tw-rounded-full tw-px-4 tw-duration-200 tw-ease-in-out tw-text-left tw-uppercase';
const activeClasses= 'main-text-gradient tw-pointer-events-none tw-select-none';

onMounted(() => {
    initializeScrolling();
    initializeFlashMessage();
});

const initializeFlashMessage = () => {
    const message = usePage().props.flash.message;
    if (message && message.type == 'auth') {
        showFlashMessage(message.details);
    }
};

const showFlashMessage = (message: string) => {
    toastVisible.value = true;
    toast.add({
        summary: message,
        detail: '',
        group: 'auth',
        life: 8000,
    });
};

watchEffect(() => {
    initializeFlashMessage();
});

const initializeScrolling = () => {
    isMenuOpen.value = false;
    document.body.classList.remove('tw-overflow-hidden');

    contact.value = document.querySelector('footer');

    window.addEventListener('scroll', () => {
        contactViewStore.setReach(!!(contact.value && window.scrollY >= (contact.value.offsetTop - 48)));
        contactViewStore.setShow(!!(contact.value && window.scrollY >= (contact.value.offsetTop - (window.innerHeight / 2))));
    });
};

const toggleMainMenu = (event: MouseEvent, openMainMenu: boolean | null = null) => {
    event.stopPropagation();

    isMenuOpen.value = (openMainMenu === null) ? !isMenuOpen.value : openMainMenu;
    if (isMenuOpen.value) {
        document.body.classList.add('tw-overflow-hidden');
    } else {
        document.body.classList.remove('tw-overflow-hidden');
    }
};

const getActiveClasses = (routeName: string) => {
    if (isActiveRoute(routeName) && !contactViewStore.isReached) {
        return activeClasses;
    }
    return '';
};

const checkActiveLink = (routeName: string) => {
    if (isActiveRoute(routeName)) {
        scrollToTop();
    }
};

const getContactClasses = computed(() => {//TODO: Universal (Scroll)
    return contactViewStore.isReached ? activeClasses : '';
});

const scrollToContact = () => {//TODO: Universal (Scroll)
    contact.value?.scrollIntoView({ behavior: 'smooth' });
}
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
            <Link class="tw-pointer-events-auto tw-py-0.5" @click="toggleMainMenu($event, false)" :href="route('home')">
                <ApplicationLogo
                    class="tw-h-6 tw-w-6 tw-transition tw-duration-300 "
                    :class="
                        (isMenuOpen || contactViewStore.isReached)
                            ? '!tw-stroke-slate-50 !tw-text-slate-50'
                            : ''
                    "
                />
            </Link>
            <MainMenuButton
                class="tw-transition tw-duration-300 tw-pointer-events-auto"
                @click="toggleMainMenu"
                :class="{
                        '!tw-bg-slate-50 !tw-text-slate-900 !tw-border-slate-50' : isMenuOpen,
                        'hover:!tw-bg-slate-50 hover:!tw-text-slate-900 !tw-border-slate-50 !tw-text-slate-50' : contactViewStore.isReached
                    }
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
                        <Link :class="[getActiveClasses('home'), menuLinkClasses]" @click="checkActiveLink('home')" :href="route('home')">Home</Link>
                        <Link :class="[getActiveClasses('article.index'), menuLinkClasses]" @click="checkActiveLink('article.index')" :href="route('article.index')">Articles</Link>
                        <Link :class="[getActiveClasses('about'), menuLinkClasses]" href="#">About</Link>
                        <button :class="[getContactClasses, menuLinkClasses]" @click="scrollToContact">Contact</button>
                        <hr
                            class="tw-bg-slate-300 tw-border-0 tw-h-px"
                        />
                        <template v-if="route().has('admin.dashboard')">
                            <a class="tw-flex tw-flex-row tw-justify-between tw-items-center"
                                :class="menuLinkClasses" :href="route('admin.dashboard')"
                                target="_blank">
                                <span>Overview Dashboard</span>
                                <i class="pi pi-arrow-up-right main-text-light-only" />
                            </a>
                        </template>
                        <template v-if="$page.props.auth.user">
                            <Link :class="menuLinkClasses"
                                :href="route('logout')"
                                method="post" as="button">
                                Log Out
                            </Link>
                        </template>
                        <template v-if="!$page.props.auth.user">
                            <Link :class="menuLinkClasses" :href="route('login')">Log In</Link>
                            <Link :class="menuLinkClasses" :href="route('register')">Sign In</Link>
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

        <!-- Auth Flash Message (Login/Logout) -->
        <Toast position="bottom-center" group="auth" @close="toastVisible = false" :pt="{ transition: Transitions.overlay }">
            <template #container="{ message }">
                <section class="tw-flex tw-flex-col tw-p-3 tw-gap-2 tw-w-full tw-bg-slate-950 tw-shadow tw-shadow-primary tw-rounded-full tw-justify-center tw-items-center" >
                    <div class="tw-flex tw-flex-row tw-gap-4 tw-justify-center">
                        <i class="pi tw-text-primary tw-text-2xl" :class="$page.props.auth.user ? 'pi-sign-in' : 'pi-sign-out'"></i>
                        <p class="tw-font-semibold tw-text-base tw-text-slate-50">{{ message.summary }}</p>
                    </div>
                    <template v-if="!!message.detail">
                        <p class="tw-m-0 tw-text-base main-text-dark-only">{{ message.detail }}</p>
                    </template>
                </section>
            </template>
        </Toast>
    </div>
</template>
