<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';

defineProps<{
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
}>();
</script>

<template>
    <Head title="Profile" />

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
                Profile
            </h2>
        </template>

        <div class="tw-py-12">
            <div
                class="
                    tw-max-w-7xl
                    sm:tw-px-6
                    lg:tw-px-8
                    tw-mx-auto
                    tw-space-y-6
                    "
            >
                <div
                    class="
                        tw-bg-slate-50
                        dark:tw-bg-slate-800
                        sm:tw-p-8
                        sm:tw-rounded-lg
                        tw-p-4
                        tw-shadow
                        "
                >
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class="tw-max-w-xl"
                    />
                </div>

                <div
                    class="
                        tw-bg-slate-50
                        dark:tw-bg-slate-800
                        sm:tw-p-8
                        sm:tw-rounded-lg
                        tw-p-4
                        tw-shadow
                        "
                >
                    <UpdatePasswordForm class="tw-max-w-xl" />
                </div>

                <div
                    class="
                        tw-bg-slate-50
                        dark:tw-bg-slate-800
                        sm:tw-p-8
                        sm:tw-rounded-lg
                        tw-p-4
                        tw-shadow
                        "
                >
                    <DeleteUserForm class="tw-max-w-xl" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
