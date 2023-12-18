<script setup lang="ts">
import route from '@/Composables/Common/Route';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { Head, useForm } from '@inertiajs/vue3';

const props = defineProps<{
    email: string,
    token: string,
}>();

const form = useForm<{
    token: string,
    password: string,
    password_confirmation: string,
}>({
    token: props.token,
    password: '',
    password_confirmation: '',
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
            <div>
                <InputLabel for="email" value="Email" />

                <InputText
                    id="email"
                    v-model="props.email"
                    type="email"
                    class="tw-block tw-mt-1 tw-w-full"
                    required
                    autofocus
                    disabled
                    autocomplete="username"
                />
            </div>

            <div class="tw-mt-4">
                <InputLabel for="password" value="Password" />
                <Password
                    id="password"
                    v-model="form.password"
                    class="tw-block tw-mt-1 tw-w-full"
                    :inputProps="{ autocomplete: 'new-password' }"
                    toggleMask
                    feedback
                />
                <InputError class="tw-mt-2" :message="form.errors.password" />
            </div>

            <div class="tw-mt-4">
                <InputLabel
                    for="password_confirmation"
                    value="Confirm Password"
                />
                <Password
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    class="tw-block tw-mt-1 tw-w-full"
                    :inputProps="{ autocomplete: 'new-password' }"
                    toggleMask
                    feedback
                />

                <InputError
                    class="tw-mt-2"
                    :message="form.errors.password_confirmation"
                />
            </div>

            <div class="
                tw-flex
                tw-items-center
                tw-justify-end
                tw-mt-4
                ">
                <Button type="submit" rounded label="Reset Password" :loading="form.processing" />
            </div>
        </form>
    </section>
</template>
