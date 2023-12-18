<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import route from '@/Composables/Common/Route';
import { isActiveRoute } from '@/Composables/Common/Helper';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { useAdminMenuStore } from '@/Composables/Admin/AdminMenuStore';
import AdminMenuButton from '@/Components/UI/AdminMenuButton.vue';
import {
    PresentationChartLineIcon as PresentationChartLineSolidIcon,
    NewspaperIcon as NewspaperSolidIcon,
    TagIcon as TagSolidIcon,
    HomeIcon as HomeSolidIcon,
    WrenchScrewdriverIcon as WrenchScrewdriverSolidIcon,
    ArrowUpOnSquareIcon as ArrowUpOnSquareSolidIcon,
} from '@heroicons/vue/24/solid';
import {
    MagnifyingGlassIcon,
    PresentationChartLineIcon as PresentationChartLineOutlineIcon,
    NewspaperIcon as NewspaperOutlineIcon,
    TagIcon as TagOutlineIcon,
    HomeIcon as HomeOutlineIcon,
    WrenchScrewdriverIcon as WrenchScrewdriverOutlineIcon,
    ArrowUpOnSquareIcon as ArrowUpOnSquareOutlineIcon,
} from '@heroicons/vue/24/outline';

const adminMenuStore = useAdminMenuStore();

const menuLinkClasses = `
    tw-whitespace-nowrap
    tw-text-slate-100
    hover:main-bg-3-dark-only
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

const getActiveClasses = (routeName: string) => {
    if (isActiveRoute(routeName)) {
        return `!tw-text-primary
            tw-pointer-events-none
            tw-select-none
            !tw-font-bold
            main-bg-1`;
    }
    return '';
};
</script>
<template>
    <div class="
        tw-h-full
        tw-z-50
        main-bg-2-dark-only
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
        <Link class="tw-group" :class="[menuLinkClasses]" href="#">
            <span class="tw-block">
                <MagnifyingGlassIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Search</span>
        </Link>
        <hr class="tw-bg-slate-700 tw-border-0 tw-h-px tw-mx-2"/>
        <Link class="tw-group" :class="[getActiveClasses('admin.dashboard'), menuLinkClasses]" :href="route('admin.dashboard')">
            <span class="group-hover:tw-block" :class="isActiveRoute('admin.dashboard') ? 'tw-block' : 'tw-hidden'">
                <PresentationChartLineSolidIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="group-hover:tw-hidden" :class="isActiveRoute('admin.dashboard') ? 'tw-hidden' : 'tw-block'">
                <PresentationChartLineOutlineIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Dashboard</span>
        </Link>
        <Link class="tw-group" :class="[getActiveClasses('admin.article.index'), menuLinkClasses]" :href="route('admin.article.index')">
            <span class="group-hover:tw-block" :class="isActiveRoute('admin.article.index') ? 'tw-block' : 'tw-hidden'">
                <NewspaperSolidIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="group-hover:tw-hidden" :class="isActiveRoute('admin.article.index') ? 'tw-hidden' : 'tw-block'">
                <NewspaperOutlineIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Articles</span>
        </Link>
        <Link class="tw-group" :class="[getActiveClasses('admin.category.index'), menuLinkClasses]" :href="route('admin.category.index')">
            <span class="group-hover:tw-block" :class="isActiveRoute('admin.category.index') ? 'tw-block' : 'tw-hidden'">
                <TagSolidIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="group-hover:tw-hidden" :class="isActiveRoute('admin.category.index') ? 'tw-hidden' : 'tw-block'">
                <TagOutlineIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Categories</span>
        </Link>
        <hr class="tw-bg-slate-700 tw-border-0 tw-h-px tw-mx-2 !tw-mt-auto"/>
        <a class="tw-group" :class="[menuLinkClasses]" :href="route('home')" target="_blank">
            <span class="tw-hidden group-hover:tw-block">
                <HomeSolidIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="tw-block group-hover:tw-hidden">
                <HomeOutlineIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="tw-ml-4 tw-w-full tw-flex tw-justify-between tw-items-center" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">
                <span>Main View</span>
                <i class="pi pi-arrow-up-right main-text-dark-only" />
            </span>
        </a>
        <Link class="tw-group" :class="[getActiveClasses('admin.setting.index'), menuLinkClasses]" :href="route('admin.setting.index')">
            <span class="group-hover:tw-block" :class="isActiveRoute('admin.setting.index') ? 'tw-block' : 'tw-hidden'">
                <WrenchScrewdriverSolidIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="group-hover:tw-hidden" :class="isActiveRoute('admin.setting.index') ? 'tw-hidden' : 'tw-block'">
                <WrenchScrewdriverOutlineIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Setting</span>
        </Link>
        <Link class="tw-group" :class="[menuLinkClasses]" :href="route('logout')" method="post" as="button">
            <span class="tw-hidden group-hover:tw-block">
                <ArrowUpOnSquareSolidIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="tw-block group-hover:tw-hidden">
                <ArrowUpOnSquareOutlineIcon class="tw-w-6 tw-h-6" />
            </span>
            <span class="tw-ml-4" :class="adminMenuStore.isAdminMenuCollapse ? 'tw-hidden' : 'tw-block'">Logout</span>
        </Link>
    </div>
</template>
