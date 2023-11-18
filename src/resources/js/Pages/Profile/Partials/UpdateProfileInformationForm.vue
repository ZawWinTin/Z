<script setup>
import route from '@/Composables/Route';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/UI/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
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

                <TextInput
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

                <TextInput
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

                <div
                    v-show="status === 'verification-link-sent'"
                    class="
                        tw-font-medium
                        dark:tw-text-green-400
                        tw-mt-2
                        tw-text-green-600
                        tw-text-sm
                        "
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <div class="tw-flex tw-gap-4 tw-items-center">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

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
