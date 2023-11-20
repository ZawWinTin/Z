<script setup>
import { Link } from '@inertiajs/vue3';
import route from '@/Composables/Route';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';

const props = defineProps({
    isMenuCollapse: {
        default: false,
    },
});

let menuLinkClasses = 'tw-text-slate-700 hover:tw-text-slate-100 dark:tw-text-slate-100 dark:hover:tw-text-slate-100 hover:tw-bg-slate-700 dark:hover:tw-bg-slate-900 tw-py-2 tw-duration-200 tw-ease-in-out tw-text-left tw-uppercase tw-px-4 tw-flex tw-flex-row';


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
    <div class="
        tw-h-screen
        tw-bg-slate-300
        dark:tw-bg-slate-800
        tw-ease-in-out
        tw-duration-300
        tw-flex
        tw-flex-col
        tw-space-y-1
        tw-py-4 tw-transition-all tw-font-semibold tw-uppercase
    ">
        <div class="tw-flex tw-flex-row tw-pb-8 tw-px-4" :class="props.isMenuCollapse ? 'tw-justify-between' : 'tw-justify-between'">
            <Link :href="route('admin.dashboard')">
                <ApplicationLogo class="tw-h-6 tw-w-6"/>
            </Link>
            <DarkModeToggle class="!tw-text-[10.5%]" :class="props.isMenuCollapse ? 'tw-hidden' : ''"/>
        </div>
        <Link class="tw-group" :class="[menuLinkClasses, props.isMenuCollapse ? 'tw-justify-start' : 'tw-justify-start']" :href="route('admin.dashboard')">
            <span class="tw-hidden group-hover:tw-block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-6 tw-h-6">
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>
            </span>
            <span class="tw-block group-hover:tw-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            </span>
            <span class="tw-ml-4" :class="props.isMenuCollapse ? 'tw-hidden' : 'tw-block'">Dashboard</span>
        </Link>
        <Link class="tw-group" :class="[menuLinkClasses, props.isMenuCollapse ? 'tw-justify-start' : 'tw-justify-start']" :href="route('admin.dashboard')">
            <span class="tw-hidden group-hover:tw-block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-6 tw-   h-6">
                    <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clip-rule="evenodd" />
                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                </svg>
            </span>
            <span class="tw-block group-hover:tw-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
            </span>
            <span class="tw-ml-4" :class="props.isMenuCollapse ? 'tw-hidden' : 'tw-block'">Articles</span>
        </Link>
    </div>
</template>
