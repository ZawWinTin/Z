<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import StatusMessage from '@/Components/UI/StatusMessage.vue';
import route from '@/Composables/Common/Route';

defineProps<{
    status?: string;
}>();

const form = useForm<{
    email: string;
}>({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <section>
        <Head title="Forgot Password" />

        <div class="main-text tw-mb-4 tw-text-justify tw-text-sm">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
        </div>

        <StatusMessage class="tw-mb-4" :show="!!status" :message="status" />

        <form @submit.prevent="submit">
            <div class="tw-mt-7">
                <span class="p-float-label p-input-icon-right tw-w-full">
                    <InputText
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="tw-block tw-w-full"
                        autofocus
                        :inputProps="{ autocomplete: 'username email' }"
                    />
                    <InputLabel for="email" value="Email" class="tw-ml-4" />
                </span>
                <InputError
                    class="tw-ml-4 tw-mt-2"
                    :message="form.errors.email"
                />
            </div>

            <div class="tw-mt-4 tw-flex tw-items-center tw-justify-end">
                <Button
                    type="submit"
                    rounded
                    label="Email Password Reset Link"
                    :loading="form.processing"
                />
            </div>
        </form>
    </section>
</template>
