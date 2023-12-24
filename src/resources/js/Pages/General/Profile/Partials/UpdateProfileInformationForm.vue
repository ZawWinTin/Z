<script setup lang="ts">
import route from '@/Composables/Common/Route';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import Transitions from '@/Composables/UI/Transitions';
import StatusMessage from '@/Components/UI/StatusMessage.vue';

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
                    tw-font-semibold
                    tw-text-lg
                    main-text-for-input
                    "
            >
                Profile Information
            </h2>

            <p
                class="
                    tw-mt-1
                    main-text
                    tw-text-sm
                    "
            >
                Update your account's profile information and email address.
            </p>
        </header>

        <form
            class="tw-mt-7 tw-space-y-7"
            @submit.prevent="form.patch(route('profile.update'))"
        >
            <div>
                <span class="p-float-label">
                    <InputText
                        id="name"
                        v-model="form.name"
                        class="tw-block tw-mt-1 tw-w-full"
                        required
                        autofocus
                        autocomplete="name"
                    />
                    <InputLabel for="name" value="Name" class="tw-ml-4" />
                </span>
                <InputError class="tw-mt-2 tw-ml-4" :message="form.errors.name" />
            </div>

            <div>
                <span class="p-float-label">
                    <InputText
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="tw-block tw-mt-1 tw-w-full"
                        required
                        autocomplete="username"
                    />
                    <InputLabel for="email" value="Email" class="tw-ml-4" />
                </span>

                <InputError class="tw-mt-2 tw-ml-4" :message="form.errors.email" />
            </div>

            //TODO: check
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
                <Button type="submit" rounded label="Save" icon="pi pi-check" :loading="form.processing" />

                <transition
                    :enter-from-class="Transitions.overlay.enterFromClass"
                    :enter-active-class="Transitions.overlay.enterActiveClass"
                    :leave-active-class="Transitions.overlay.leaveActiveClass"
                    :leave-to-class="Transitions.overlay.leaveToClass"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="main-text tw-text-sm"
                    >
                        Saved.
                    </p>
                </transition>
            </div>
        </form>
    </section>
</template>
