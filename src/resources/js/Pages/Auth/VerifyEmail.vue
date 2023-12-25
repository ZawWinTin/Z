<script setup lang="ts">
import { computed } from 'vue';
import route from '@/Composables/Common/Route';
import Button from 'primevue/button';
import { Head, Link, useForm } from '@inertiajs/vue3';
import StatusMessage from '@/Components/UI/StatusMessage.vue';

const props = defineProps<{
    status?: string,
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
                main-text
                tw-text-sm
                text-justify
                "
        >
            Thanks for signing up! Before getting started, could you verify your
            email address by clicking on the link we just emailed to you? If you
            didn't receive the email, we will gladly send you another.
        </div>

        <StatusMessage :show="verificationLinkSent"
            message="A new verification link has been sent to the email address you
                provided during registration." />

        <form @submit.prevent="submit">
            <div class="
                tw-flex
                tw-items-center
                tw-justify-between
                tw-mt-4
                ">
                <Button type="submit" rounded label="Resend Verification Email"
                    :loading="form.processing" />

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="main-link"
                    >Log Out</Link
                >
            </div>
        </form>
    </section>
</template>
