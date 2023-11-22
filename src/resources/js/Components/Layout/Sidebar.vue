<script setup>
import { Link } from '@inertiajs/vue3';
import route from '@/Composables/Route';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { useAdminMenuStore } from '@/Composables/Admin/AdminMenuStore';
import AdminMenuButton from '@/Components/Buttons/AdminMenuButton.vue';

const adminMenuStore = useAdminMenuStore();

let menuLinkClasses = `
    tw-whitespace-nowrap
    tw-text-slate-100
    hover:tw-bg-slate-900
    tw-py-2
    tw-duration-200
    tw-ease-in-out
    tw-text-left
    tw-uppercase
    tw-px-4
    tw-flex
    tw-flex-row
    tw-font-semibold
    tw-justify-start`;

let getActiveClasses = (routeName) => {
    if (isActiveRoute(routeName)) {
        return `!tw-text-primary
            tw-pointer-events-none
            tw-select-none
            !tw-font-bold
            tw-bg-slate-50
            dark:tw-bg-slate-950`;
    }
    return '';
};

let isActiveRoute = (routeName) => {
    return route().has(routeName) && location.pathname == new URL(route(routeName)).pathname;
}
</script>
<template>
    <div class="
        tw-h-full
        tw-z-50
        tw-bg-slate-800
        tw-ease-in-out
        tw-duration-300
        tw-flex
        tw-flex-col
        tw-space-y-1
        tw-py-4
        tw-transition-all
        tw-uppercase
        tw-shadow-[0.1rem_0_0.5rem_0.1rem_rgba(0,0,0,0.25)]
    ">
        <div class="tw-flex tw-flex-row tw-pb-8 tw-px-4 tw-justify-between tw-items-center">
            <Link class="tw-py-0.5" :href="route('admin.dashboard')">
                <ApplicationLogo class="tw-h-6 tw-w-6 !tw-stroke-slate-50 !tw-text-slate-50"/>
            </Link>
            <DarkModeToggle class="!tw-text-[10.5%]" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-hidden sm:tw-block'"/>
            <AdminMenuButton class="tw-block sm:tw-hidden" />
        </div>
        <DarkModeToggle class="tw-mx-4 !tw-text-[10.5%]" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block sm:tw-hidden'"/>
        <Link class="tw-group" :class="[getActiveClasses('admin.dashboard'), menuLinkClasses]" :href="route('admin.dashboard')">
            <span class="group-hover:tw-block" :class="isActiveRoute('admin.dashboard') ? 'tw-block' : 'tw-hidden'">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-6 tw-h-6">
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>
            </span>
            <span class="group-hover:tw-hidden" :class="isActiveRoute('admin.dashboard') ? 'tw-hidden' : 'tw-block'">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Dashboard</span>
        </Link>
        <Link class="tw-group" :class="[getActiveClasses('admin.article.index'), menuLinkClasses]" :href="route('admin.article.index')">
            <span class="group-hover:tw-block" :class="isActiveRoute('admin.article.index') ? 'tw-block' : 'tw-hidden'">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-6 tw-h-6">
                    <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clip-rule="evenodd" />
                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                </svg>
            </span>
            <span class="group-hover:tw-hidden" :class="isActiveRoute('admin.article.index') ? 'tw-hidden' : 'tw-block'">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Articles</span>
        </Link>
        <Link class="tw-group" :class="[getActiveClasses('admin.category.index'), menuLinkClasses]" :href="route('admin.category.index')">
            <span class="group-hover:tw-block" :class="isActiveRoute('admin.category.index') ? 'tw-block' : 'tw-hidden'">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-6 tw-h-6">
                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd" />
                </svg>
            </span>
            <span class="group-hover:tw-hidden" :class="isActiveRoute('admin.category.index') ? 'tw-hidden' : 'tw-block'">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Categories</span>
        </Link>
        <hr class="tw-bg-slate-700 tw-border-0 tw-h-px tw-mx-2 !tw-mt-auto"/>
        <Link class="tw-group" :class="[menuLinkClasses]" :href="route('home')">
            <span class="tw-hidden group-hover:tw-block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-6 tw-h-6">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
            </span>
            <span class="tw-block group-hover:tw-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Main View</span>
        </Link>
        <Link class="tw-group" :class="[menuLinkClasses]" :href="route('admin.logout')" method="post" as="button">
            <span class="tw-hidden group-hover:tw-block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-6 tw-h-6">
                    <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                </svg>
            </span>
            <span class="tw-block group-hover:tw-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                </svg>
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Logout</span>
        </Link>
    </div>
</template>
