<script setup lang="ts">
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

defineProps<{
    mustVerifyEmail?: boolean,
    status?: string,
}>();
</script>

<template>
    <section class="tw-pt-4 tw-flex tw-flex-col">
        <Head title="Profile" />
        <div class="tw-text-center">
            <h1
                class="tw-font-bold tw-text-2xl tw-text-primary"
            >
                Profile
            </h1>
        </div>

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
                <TabView class="
                        tw-transition
                        tw-duration-300
                        main-bg-2
                        sm:tw-p-8
                        sm:tw-rounded-lg
                        tw-p-4
                        tw-shadow
                        !tw-bg-opacity-60
                        ">
                    <TabPanel header="Profile Information">
                        <UpdateProfileInformationForm
                            :must-verify-email="mustVerifyEmail"
                            :status="status"
                            class="tw-max-w-xl"
                        />
                    </TabPanel>
                    <TabPanel header="Update Password">
                        <UpdatePasswordForm class="tw-max-w-xl" />
                    </TabPanel>
                    <TabPanel header="Delete Account" :pt="{
                        headerAction: ({ parent, context }) => ({
                            class: [
                                {
                                    'tw-border-red-500 tw-text-red-500 dark:tw-border-red-400 dark:tw-text-red-400':
                                        parent.state.d_activeIndex === context.index
                                }
                            ]
                        })
                    }">
                        <DeleteUserForm class="tw-max-w-xl" />
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </section>
</template>
