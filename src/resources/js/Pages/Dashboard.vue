<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="
                    tw-font-semibold
                    dark:tw-text-slate-200
                    tw-leading-tight
                    tw-text-slate-800
                    tw-text-xl
                    "
            >
                Dashboard
            </h2>
        </template>

        <div class="tw-py-12">
            <div class="
                tw-max-w-7xl
                sm:tw-px-6
                lg:tw-px-8
                tw-mx-auto
                ">
                <div
                    class="
                        tw-bg-white
                        dark:tw-bg-slate-800
                        sm:tw-rounded-lg
                        tw-overflow-hidden
                        tw-shadow-sm
                        "
                >
                    <div
                        class="
                            tw-p-6
                            dark:tw-text-slate-100
                            tw-text-slate-900
                            "
                    >
                        You're logged in!
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
