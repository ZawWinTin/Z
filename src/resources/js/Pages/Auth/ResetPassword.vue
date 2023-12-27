<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import route from '@/Composables/Common/Route';

const props = defineProps<{
    email: string;
    token: string;
}>();

const resetEmail = ref<string>('');

const form = useForm<{
    token: string;
    password: string;
    password_confirmation: string;
}>({
    token: props.token,
    password: '',
    password_confirmation: '',
});

onMounted(() => {
    resetEmail.value = props.email;
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <section>
        <Head title="Reset Password" />

        <form @submit.prevent="submit">
            <div class="tw-mt-7">
                <span class="p-float-label">
                    <InputText
                        id="email"
                        v-model="resetEmail"
                        type="email"
                        class="tw-mt-1 tw-block tw-w-full"
                        required
                        autofocus
                        disabled
                        autocomplete="username"
                    />
                    <InputLabel for="email" value="Email" class="tw-ml-4" />
                </span>
            </div>

            <div class="tw-mt-7">
                <span class="p-float-label">
                    <Password
                        id="password"
                        v-model="form.password"
                        class="tw-mt-1 tw-block tw-w-full"
                        :inputProps="{ autocomplete: 'new-password' }"
                        toggleMask
                        feedback
                    />
                    <InputLabel
                        for="password"
                        value="Password"
                        class="tw-ml-4"
                    />
                </span>
                <InputError
                    class="tw-ml-4 tw-mt-2"
                    :message="form.errors.password"
                />
            </div>

            <div class="tw-mt-7">
                <span class="p-float-label">
                    <Password
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        class="tw-mt-1 tw-block tw-w-full"
                        :inputProps="{ autocomplete: 'new-password' }"
                        toggleMask
                        feedback
                    />
                    <InputLabel
                        class="tw-ml-4"
                        for="password_confirmation"
                        value="Confirm Password"
                    />
                </span>

                <InputError
                    class="tw-ml-4 tw-mt-2"
                    :message="form.errors.password_confirmation"
                />
            </div>

            <div class="tw-mt-4 tw-flex tw-items-center tw-justify-end">
                <Button
                    type="submit"
                    rounded
                    label="Reset Password"
                    :loading="form.processing"
                />
            </div>
        </form>
    </section>
</template>
