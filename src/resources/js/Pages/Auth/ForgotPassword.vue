<script setup lang="ts">
import route from '@/Composables/Common/Route';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { Head, useForm } from '@inertiajs/vue3';

defineProps<{
    status?: string,
}>();

const form = useForm<{
    email: string,
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

        <div
            class="
                tw-mb-4
                dark:tw-text-slate-400
                tw-text-slate-600
                tw-text-sm
                "
        >
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
        </div>

        <div
            v-if="status"
            class="
                tw-font-medium
                dark:tw-text-green-400
                tw-mb-4
                tw-text-green-600
                tw-text-sm
                "
        >
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />

                <InputText
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="tw-block tw-mt-1 tw-w-full"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="tw-mt-2" :message="form.errors.email" />
            </div>

            <div class="
                tw-flex
                tw-items-center
                tw-justify-end
                tw-mt-4
                ">
                <Button label="Email Password Reset Link"
                    :loading="form.processing"
                />
            </div>
        </form>
    </section>
</template>
