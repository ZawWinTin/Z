<script setup lang="ts">
import route from '@/Composables/Common/Route';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps<{
    mustVerifyEmail?: boolean,
    status?: string,
}>();

const user = usePage().props.auth.user;

const form = useForm<{
    name: string,
    email: string,
}>({
    name: user.name,
    email: user.email,
});
</script>

<template>
    <section>
        <header>
            <h2
                class="
                    tw-font-medium
                    dark:tw-text-slate-100
                    tw-text-lg
                    tw-text-slate-900
                    "
            >
                Profile Information
            </h2>

            <p
                class="
                    tw-mt-1
                    dark:tw-text-slate-400
                    tw-text-slate-600
                    tw-text-sm
                    "
            >
                Update your account's profile information and email address.
            </p>
        </header>

        <form
            class="tw-mt-6 tw-space-y-6"
            @submit.prevent="form.patch(route('profile.update'))"
        >
            <div>
                <InputLabel for="name" value="Name" />

                <InputText
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="tw-block tw-mt-1 tw-w-full"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="tw-mt-2" :message="form.errors.name" />
            </div>

            <div>
                <InputLabel for="email" value="Email" />

                <InputText
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="tw-block tw-mt-1 tw-w-full"
                    required
                    autocomplete="username"
                />

                <InputError class="tw-mt-2" :message="form.errors.email" />
            </div>

            <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <p
                    class="
                        tw-mt-2
                        dark:tw-text-slate-200
                        tw-text-slate-800
                        tw-text-sm
                        "
                >
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="
                            tw-rounded-md
                            dark:focus:tw-ring-offset-slate-800
                            dark:hover:tw-text-slate-100
                            dark:tw-text-slate-400
                            focus:tw-outline-none
                            focus:tw-ring-2
                            focus:tw-ring-indigo-500
                            focus:tw-ring-offset-2
                            hover:tw-text-slate-900
                            tw-text-slate-600
                            tw-text-sm
                            tw-underline
                            "
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <StatusMessage :show="status === 'verification-link-sent'" class="tw-mt-2"
                    message="A new verification link has been sent to your email address." />
            </div>

            <div class="tw-flex tw-gap-4 tw-items-center">
                <Button label="Save" :loading="form.processing" />

                <Transition
                    enter-active-class="tw-transition tw-ease-in-out"
                    enter-from-class="tw-opacity-0"
                    leave-active-class="tw-transition tw-ease-in-out"
                    leave-to-class="tw-opacity-0"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="
                            tw-text-slate-600
                            dark:tw-text-slate-400
                            tw-text-sm
                            "
                    >
                        Saved.
                    </p>
                </Transition>
            </div>
        </form>
    </section>
</template>
