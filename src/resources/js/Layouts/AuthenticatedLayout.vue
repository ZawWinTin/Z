<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/UI/Dropdown.vue';
import DropdownLink from '@/Components/UI/DropdownLink.vue';
import NavLink from '@/Components/UI/NavLink.vue';
import ResponsiveNavLink from '@/Components/UI/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="
            tw-bg-slate-100
            dark:tw-bg-slate-900
            tw-min-h-screen
            ">
            <nav
                class="
                    tw-bg-slate-50
                    dark:tw-bg-slate-800
                    dark:tw-border-slate-700
                    tw-border-b
                    tw-border-slate-100
                    "
            >
                <!-- Primary Navigation Menu -->
                <div
                    class="
                        tw-max-w-7xl
                        sm:tw-px-6
                        lg:tw-px-8
                        tw-mx-auto
                        tw-px-4
                        "
                >
                    <div class="tw-flex tw-h-16 tw-justify-between">
                        <div class="tw-flex">
                            <!-- Logo -->
                            <div class="
                                tw-flex
                                tw-items-center
                                tw-shrink-0
                                ">
                                <Link :href="route('home')">
                                    <ApplicationLogo class="tw-h-6 tw-w-6" />
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div
                                class="
                                    tw-hidden
                                    sm:tw--my-px
                                    sm:tw-flex
                                    sm:tw-ml-10
                                    tw-space-x-8
                                    "
                            >
                                <NavLink
                                    :href="route('dashboard')"
                                    :active="route().current('dashboard')"
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div
                            class="
                                tw-hidden
                                sm:tw-flex
                                sm:tw-items-center
                                sm:tw-ml-6
                                "
                        >
                            <!-- Settings Dropdown -->
                            <div class="
                                tw-ml-3
                                tw-relative
                                ">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span
                                            class="tw-inline-flex tw-rounded-md"
                                        >
                                            <button
                                                type="button"
                                                class="
                                                    tw-bg-slate-50
                                                    dark:hover:tw-text-slate-300
                                                    dark:tw-bg-slate-800
                                                    dark:tw-text-slate-400
                                                    focus:tw-outline-none
                                                    hover:tw-text-slate-700
                                                    tw-border
                                                    tw-border-transparent
                                                    tw-duration-150
                                                    tw-ease-in-out
                                                    tw-font-medium
                                                    tw-inline-flex
                                                    tw-items-center
                                                    tw-leading-4
                                                    tw-px-3
                                                    tw-py-2
                                                    tw-rounded-md
                                                    tw-text-slate-500
                                                    tw-text-sm
                                                    tw-transition
                                                    "
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="
                                                        tw--mr-0.5
                                                        tw-h-4
                                                        tw-ml-2
                                                        tw-w-4
                                                        "
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink
                                            :href="route('profile.edit')"
                                        >
                                            Profile
                                        </DropdownLink>
                                        <DropdownLink
                                            :href="route('logout')"
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div
                            class="
                                tw--mr-2
                                sm:tw-hidden
                                tw-flex
                                tw-items-center
                                "
                        >
                            <button
                                class="
                                    tw-duration-150
                                    dark:focus:tw-bg-slate-900
                                    dark:focus:tw-text-slate-400
                                    dark:hover:tw-bg-slate-900
                                    dark:hover:tw-text-slate-400
                                    dark:tw-text-slate-500
                                    focus:tw-bg-slate-100
                                    focus:tw-outline-none
                                    focus:tw-text-slate-500
                                    hover:tw-bg-slate-100
                                    hover:tw-text-slate-500
                                    tw-ease-in-out
                                    tw-inline-flex
                                    tw-items-center
                                    tw-justify-center
                                    tw-p-2
                                    tw-rounded-md
                                    tw-text-slate-400
                                    tw-transition
                                    "
                                @click="
                                    showingNavigationDropdown =
                                        !showingNavigationDropdown
                                "
                            >
                                <svg
                                    class="tw-h-6 tw-w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        :class="{
                                            'tw-hidden':
                                                showingNavigationDropdown,
                                            'tw-inline-flex':
                                                !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            'tw-hidden':
                                                !showingNavigationDropdown,
                                            'tw-inline-flex':
                                                showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div
                    :class="{
                        'tw-block': showingNavigationDropdown,
                        'tw-hidden': !showingNavigationDropdown,
                    }"
                    class="sm:tw-hidden"
                >
                    <div class="
                        tw-pb-3
                        tw-pt-2
                        tw-space-y-1
                        ">
                        <ResponsiveNavLink
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div
                        class="
                            tw-border-slate-200
                            dark:tw-border-slate-600
                            tw-border-t
                            tw-pb-1
                            tw-pt-4
                            "
                    >
                        <div class="tw-px-4">
                            <div
                                class="
                                    tw-font-medium
                                    dark:tw-text-slate-200
                                    tw-text-base
                                    tw-text-slate-800
                                    "
                            >
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div
                                class="
                                    tw-font-medium
                                    tw-text-slate-500
                                    tw-text-sm
                                    "
                            >
                                {{ $page.props.auth.user.email }}
                            </div>
                        </div>

                        <div class="tw-mt-3 tw-space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')">
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                :href="route('logout')"
                                method="post"
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header
                v-if="$slots.header"
                class="
                    tw-bg-slate-50
                    dark:tw-bg-slate-800
                    tw-shadow
                    "
            >
                <div
                    class="
                        tw-max-w-7xl
                        sm:tw-px-6
                        lg:tw-px-8
                        tw-mx-auto
                        tw-px-4
                        tw-py-6
                        "
                >
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
