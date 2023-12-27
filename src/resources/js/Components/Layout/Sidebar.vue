<script setup lang="ts">
import {
    ArrowUpOnSquareIcon as ArrowUpOnSquareOutlineIcon,
    EnvelopeIcon as EnvelopeOutlineIcon,
    HomeIcon as HomeOutlineIcon,
    MagnifyingGlassIcon,
    NewspaperIcon as NewspaperOutlineIcon,
    PresentationChartLineIcon as PresentationChartLineOutlineIcon,
    TagIcon as TagOutlineIcon,
    WrenchScrewdriverIcon as WrenchScrewdriverOutlineIcon,
} from '@heroicons/vue/24/outline';
import {
    ArrowUpOnSquareIcon as ArrowUpOnSquareSolidIcon,
    EnvelopeIcon as EnvelopeSolidIcon,
    HomeIcon as HomeSolidIcon,
    NewspaperIcon as NewspaperSolidIcon,
    PresentationChartLineIcon as PresentationChartLineSolidIcon,
    TagIcon as TagSolidIcon,
    WrenchScrewdriverIcon as WrenchScrewdriverSolidIcon,
} from '@heroicons/vue/24/solid';
import { Link } from '@inertiajs/vue3';

import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import AdminMenuButton from '@/Components/UI/AdminMenuButton.vue';
import DarkModeToggle from '@/Components/UI/DarkModeToggle.vue';
import { useAdminMenuStore } from '@/Composables/Admin/AdminMenuStore';
import { isActiveRoute } from '@/Composables/Common/Helper';
import route from '@/Composables/Common/Route';

const adminMenuStore = useAdminMenuStore();

const menuLinkClasses =
    'tw-whitespace-nowrap tw-text-slate-100 hover:main-bg-3-dark-only tw-py-2 tw-duration-200 tw-ease-in-out tw-text-left tw-uppercase tw-px-4 tw-flex tw-flex-row tw-font-semibold tw-justify-start';

const getActiveClasses = (routeName: string) => {
    if (isActiveRoute(routeName)) {
        return '!tw-text-primary tw-pointer-events-none tw-select-none !tw-font-bold main-bg-1';
    }
    return '';
};
</script>
<template>
    <div
        class="main-bg-2-dark-only tw-z-50 tw-flex tw-h-full tw-flex-col tw-space-y-1 tw-py-4 tw-uppercase tw-shadow-[0.1rem_0_0.5rem_0.1rem_rgba(0,0,0,0.25)] tw-transition-all tw-duration-300 tw-ease-in-out"
    >
        <div
            class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-4 tw-pb-8"
        >
            <Link class="tw-py-0.5" :href="route('admin.dashboard')">
                <ApplicationLogo
                    class="tw-h-6 tw-w-6 !tw-stroke-slate-50 !tw-text-slate-50"
                />
            </Link>
            <DarkModeToggle
                class="!tw-text-[10.5%]"
                :class="
                    adminMenuStore.isAdminMenuCollapse
                        ? 'tw-hidden'
                        : 'tw-hidden sm:tw-block'
                "
            />
            <AdminMenuButton class="tw-block sm:tw-hidden" />
        </div>
        <DarkModeToggle
            class="tw-mx-4 !tw-text-[10.5%]"
            :class="
                adminMenuStore.isAdminMenuCollapse
                    ? 'tw-hidden'
                    : 'tw-block sm:tw-hidden'
            "
        />
        <Link class="tw-group" :class="[menuLinkClasses]" href="#">
            <span class="tw-block">
                <MagnifyingGlassIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="tw-ml-4"
                :class="
                    adminMenuStore.isAdminMenuCollapse
                        ? 'tw-hidden'
                        : 'tw-block'
                "
                >Search</span
            >
        </Link>
        <hr class="tw-mx-2 tw-h-px tw-border-0 tw-bg-slate-700" />
        <Link
            class="tw-group"
            :class="[getActiveClasses('admin.dashboard'), menuLinkClasses]"
            :href="route('admin.dashboard')"
        >
            <span
                class="group-hover:tw-block"
                :class="
                    isActiveRoute('admin.dashboard') ? 'tw-block' : 'tw-hidden'
                "
            >
                <PresentationChartLineSolidIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="group-hover:tw-hidden"
                :class="
                    isActiveRoute('admin.dashboard') ? 'tw-hidden' : 'tw-block'
                "
            >
                <PresentationChartLineOutlineIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="tw-ml-4"
                :class="
                    adminMenuStore.isAdminMenuCollapse
                        ? 'tw-hidden'
                        : 'tw-block'
                "
                >Dashboard</span
            >
        </Link>
        <Link
            class="tw-group"
            :class="[getActiveClasses('admin.article.index'), menuLinkClasses]"
            :href="route('admin.article.index')"
        >
            <span
                class="group-hover:tw-block"
                :class="
                    isActiveRoute('admin.article.index')
                        ? 'tw-block'
                        : 'tw-hidden'
                "
            >
                <NewspaperSolidIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="group-hover:tw-hidden"
                :class="
                    isActiveRoute('admin.article.index')
                        ? 'tw-hidden'
                        : 'tw-block'
                "
            >
                <NewspaperOutlineIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="tw-ml-4"
                :class="
                    adminMenuStore.isAdminMenuCollapse
                        ? 'tw-hidden'
                        : 'tw-block'
                "
                >Articles</span
            >
        </Link>
        <Link
            class="tw-group"
            :class="[getActiveClasses('admin.category.index'), menuLinkClasses]"
            :href="route('admin.category.index')"
        >
            <span
                class="group-hover:tw-block"
                :class="
                    isActiveRoute('admin.category.index')
                        ? 'tw-block'
                        : 'tw-hidden'
                "
            >
                <TagSolidIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="group-hover:tw-hidden"
                :class="
                    isActiveRoute('admin.category.index')
                        ? 'tw-hidden'
                        : 'tw-block'
                "
            >
                <TagOutlineIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="tw-ml-4"
                :class="
                    adminMenuStore.isAdminMenuCollapse
                        ? 'tw-hidden'
                        : 'tw-block'
                "
                >Categories</span
            >
        </Link>
        <Link
            class="tw-group"
            :class="[getActiveClasses('admin.contact.index'), menuLinkClasses]"
            :href="route('admin.contact.index')"
        >
            <span
                class="group-hover:tw-block"
                :class="
                    isActiveRoute('admin.contact.index')
                        ? 'tw-block'
                        : 'tw-hidden'
                "
            >
                <EnvelopeSolidIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="group-hover:tw-hidden"
                :class="
                    isActiveRoute('admin.contact.index')
                        ? 'tw-hidden'
                        : 'tw-block'
                "
            >
                <EnvelopeOutlineIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="tw-ml-4"
                :class="
                    adminMenuStore.isAdminMenuCollapse
                        ? 'tw-hidden'
                        : 'tw-block'
                "
                >Contacts</span
            >
        </Link>
        <hr class="tw-mx-2 !tw-mt-auto tw-h-px tw-border-0 tw-bg-slate-700" />
        <a
            class="tw-group"
            :class="[menuLinkClasses]"
            :href="route('home')"
            target="_blank"
        >
            <span class="tw-hidden group-hover:tw-block">
                <HomeSolidIcon class="tw-h-6 tw-w-6" />
            </span>
            <span class="tw-block group-hover:tw-hidden">
                <HomeOutlineIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="tw-ml-4 tw-flex tw-w-full tw-items-center tw-justify-between"
                :class="
                    adminMenuStore.isAdminMenuCollapse
                        ? 'tw-hidden'
                        : 'tw-block'
                "
            >
                <span>Main View</span>
                <i class="pi pi-arrow-up-right main-text-dark-only" />
            </span>
        </a>
        <Link
            class="tw-group"
            :class="[getActiveClasses('admin.setting.index'), menuLinkClasses]"
            :href="route('admin.setting.index')"
        >
            <span
                class="group-hover:tw-block"
                :class="
                    isActiveRoute('admin.setting.index')
                        ? 'tw-block'
                        : 'tw-hidden'
                "
            >
                <WrenchScrewdriverSolidIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="group-hover:tw-hidden"
                :class="
                    isActiveRoute('admin.setting.index')
                        ? 'tw-hidden'
                        : 'tw-block'
                "
            >
                <WrenchScrewdriverOutlineIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="tw-ml-4"
                :class="
                    adminMenuStore.isAdminMenuCollapse
                        ? 'tw-hidden'
                        : 'tw-block'
                "
                >Setting</span
            >
        </Link>
        <Link
            class="tw-group"
            :class="[menuLinkClasses]"
            :href="route('logout')"
            method="post"
            as="button"
        >
            <span class="tw-hidden group-hover:tw-block">
                <ArrowUpOnSquareSolidIcon class="tw-h-6 tw-w-6" />
            </span>
            <span class="tw-block group-hover:tw-hidden">
                <ArrowUpOnSquareOutlineIcon class="tw-h-6 tw-w-6" />
            </span>
            <span
                class="tw-ml-4"
                :class="
                    adminMenuStore.isAdminMenuCollapse
                        ? 'tw-hidden'
                        : 'tw-block'
                "
                >Logout</span
            >
        </Link>
    </div>
</template>
