<script setup lang="ts">
import { computed } from 'vue';
import route from '@/Composables/Common/Route';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps<{
    status: {
        type: String,
    },
}>();

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(
    () => props.status === 'verification-link-sent',
);
</script>

<template>
    <section>
        <Head title="Email Verification" />

        <div
            class="
                tw-mb-4
                dark:tw-text-slate-400
                tw-text-slate-600
                tw-text-sm
                "
        >
            Thanks for signing up! Before getting started, could you verify your
            email address by clicking on the link we just emailed to you? If you
            didn't receive the email, we will gladly send you another.
        </div>

        <div
            v-if="verificationLinkSent"
            class="
                tw-font-medium
                dark:tw-text-green-400
                tw-mb-4
                tw-text-green-600
                tw-text-sm
                "
        >
            A new verification link has been sent to the email address you
            provided during registration.
        </div>

        <form @submit.prevent="submit">
            <div class="
                tw-flex
                tw-items-center
                tw-justify-between
                tw-mt-4
                ">
                <PrimaryButton
                    :class="{ 'tw-opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Resend Verification Email
                </PrimaryButton>

                <Link
                    :href="route('logout')"
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
                    >Log Out</Link
                >
            </div>
        </form>
    </section>
</template>
