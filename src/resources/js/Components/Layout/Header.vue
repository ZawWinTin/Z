<script setup lang="ts">
import { onMounted, onUnmounted, computed, ref, watchEffect } from 'vue';
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
import { UserRole } from '@/Constants/UserRole';

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
const menuLinkClasses =
    'hover:tw-bg-slate-200 tw-py-2 tw-rounded-full tw-px-4 tw-duration-200 tw-ease-in-out tw-text-left tw-uppercase';
const activeClasses =
    'main-text-gradient tw-pointer-events-none tw-select-none';

onMounted(() => {
    initializeScrolling();
    initializeFlashMessage();
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});

const initializeFlashMessage = () => {
    const message = usePage().props.flash.message;
    if (message && ['auth', 'email', 'account_delete'].includes(message.type)) {
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

    window.addEventListener('scroll', onScroll);
};

const onScroll = () => {
    contactViewStore.setReach(
        !!(contact.value && window.scrollY >= contact.value.offsetTop - 48),
    );
    contactViewStore.setShow(
        !!(
            contact.value &&
            window.scrollY >= contact.value.offsetTop - window.innerHeight / 2
        ),
    );
};

const toggleMainMenu = (
    event: MouseEvent,
    openMainMenu: boolean | null = null,
) => {
    event.stopPropagation();

    isMenuOpen.value = openMainMenu === null ? !isMenuOpen.value : openMainMenu;
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

const getContactClasses = computed(() => {
    //TODO: Universal (Scroll)
    return contactViewStore.isReached ? activeClasses : '';
});

const scrollToContact = () => {
    //TODO: Universal (Scroll)
    contact.value?.scrollIntoView({ behavior: 'smooth' });
};
</script>
<template>
    <div
        @click="toggleMainMenu"
        class="tw-fixed tw-inset-0 tw-z-[90] tw-flex tw-w-full tw-flex-col tw-space-y-3 tw-overflow-hidden tw-bg-slate-950 tw-pb-8 tw-pt-4 tw-transition-all tw-duration-300"
        :class="
            isMenuOpen
                ? 'tw-pointer-events-auto tw-h-screen tw-bg-opacity-80'
                : 'tw-pointer-events-none tw-h-auto tw-bg-opacity-0'
        "
    >
        <!-- Navigation Bar -->
        <div class="tw-container tw-flex tw-items-center tw-justify-between">
            <Link
                class="tw-pointer-events-auto tw-py-0.5"
                @click="toggleMainMenu($event, false)"
                :href="route('home')"
            >
                <ApplicationLogo
                    class="tw-h-6 tw-w-6 tw-transition tw-duration-300"
                    :class="
                        isMenuOpen || contactViewStore.isReached
                            ? '!tw-stroke-slate-50 !tw-text-slate-50'
                            : ''
                    "
                />
            </Link>
            <MainMenuButton
                class="tw-pointer-events-auto tw-transition tw-duration-300"
                @click="toggleMainMenu"
                :class="{
                    '!tw-border-slate-50 !tw-bg-slate-50 !tw-text-slate-900':
                        isMenuOpen,
                    '!tw-border-slate-50 !tw-text-slate-50 hover:!tw-bg-slate-50 hover:!tw-text-slate-900':
                        contactViewStore.isReached,
                }"
            />
        </div>

        <!-- Main Menu Screen -->
        <transition
            :enter-from-class="Transitions.floatIn.enterFromClass"
            :enter-active-class="Transitions.floatIn.enterActiveClass"
            :leave-active-class="Transitions.floatIn.leaveActiveClass"
            :leave-to-class="Transitions.floatIn.leaveToClass"
        >
            <div
                v-show="isMenuOpen"
                class="tw-container tw-flex tw-h-full tw-flex-row-reverse"
            >
                <section :class="sectionClasses" class="tw-pl-4">
                    <div :class="menuCardClasses">
                        <Link
                            :class="[getActiveClasses('home'), menuLinkClasses]"
                            @click="checkActiveLink('home')"
                            :href="route('home')"
                            >Home</Link
                        >
                        <Link
                            :class="[
                                getActiveClasses('article.index'),
                                menuLinkClasses,
                            ]"
                            @click="checkActiveLink('article.index')"
                            :href="route('article.index')"
                            >Articles</Link
                        >
                        <Link
                            :class="[
                                getActiveClasses('about'),
                                menuLinkClasses,
                            ]"
                            href="#"
                            >About</Link
                        >
                        <button
                            :class="[getContactClasses, menuLinkClasses]"
                            @click="scrollToContact"
                        >
                            Contact
                        </button>
                        <hr class="tw-h-px tw-border-0 tw-bg-slate-300" />
                        <template v-if="route().has('admin.dashboard')">
                            <a
                                class="tw-flex tw-flex-row tw-items-center tw-justify-between"
                                :class="menuLinkClasses"
                                :href="route('admin.dashboard')"
                                target="_blank"
                            >
                                <span>Overview Dashboard</span>
                                <i
                                    class="pi pi-arrow-up-right main-text-light-only"
                                />
                            </a>
                        </template>
                        <template v-if="$page.props.auth.user">
                            <!-- TODO:Fix Design -->
                            <template
                                v-if="
                                    $page.props.auth.user.role === UserRole.USER
                                "
                            >
                                <Link
                                    :class="[
                                        getActiveClasses('profile.edit'),
                                        menuLinkClasses,
                                    ]"
                                    @click="checkActiveLink('profile.edit')"
                                    :href="route('profile.edit')"
                                >
                                    Profile
                                </Link>
                            </template>
                            <Link
                                :class="menuLinkClasses"
                                :href="route('logout')"
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Link>
                        </template>
                        <template v-if="!$page.props.auth.user">
                            <Link
                                :class="menuLinkClasses"
                                :href="route('login')"
                                >Log In</Link
                            >
                            <Link
                                :class="menuLinkClasses"
                                :href="route('register')"
                                >Sign In</Link
                            >
                        </template>
                    </div>
                    <div :class="menuCardClasses">
                        <div
                            class="tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-px-4"
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
        <Toast
            position="bottom-center"
            group="auth"
            @close="toastVisible = false"
            :pt="{ transition: Transitions.overlay }"
        >
            <template #container="{ message }">
                <section
                    class="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-bg-slate-950 tw-p-3 tw-shadow tw-shadow-primary"
                >
                    <div class="tw-flex tw-flex-row tw-justify-center tw-gap-4">
                        <i
                            class="pi tw-text-2xl tw-text-primary"
                            :class="{
                                'pi-sign-in':
                                    $page.props.flash.message?.type == 'auth' &&
                                    $page.props.auth.user,
                                'pi-sign-out':
                                    $page.props.flash.message?.type == 'auth' &&
                                    !$page.props.auth.user,
                                'pi-check':
                                    $page.props.flash.message?.type == 'email',
                                'pi-trash':
                                    $page.props.flash.message?.type ==
                                    'account_delete',
                            }"
                        ></i>
                        <p
                            class="tw-text-base tw-font-semibold tw-text-slate-50"
                        >
                            {{ message.summary }}
                        </p>
                    </div>
                    <template v-if="!!message.detail">
                        <p class="main-text-dark-only tw-m-0 tw-text-base">
                            {{ message.detail }}
                        </p>
                    </template>
                </section>
            </template>
        </Toast>
    </div>
</template>
