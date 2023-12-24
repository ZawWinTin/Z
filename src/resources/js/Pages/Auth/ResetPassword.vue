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
            <div class="tw-mt-7">
                <span class="p-float-label">
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
                    <InputLabel for="email" value="Email" class="tw-ml-4" />
                </span>
            </div>

            <div class="tw-mt-7">
                <span class="p-float-label">
                    <Password
                        id="password"
                        v-model="form.password"
                        class="tw-block tw-mt-1 tw-w-full"
                        :inputProps="{ autocomplete: 'new-password' }"
                        toggleMask
                        feedback
                    />
                    <InputLabel for="password" value="Password" class="tw-ml-4" />
                </span>
                <InputError class="tw-mt-2 tw-ml-4" :message="form.errors.password" />
            </div>

            <div class="tw-mt-7">
                <span class="p-float-label">
                    <Password
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        class="tw-block tw-mt-1 tw-w-full"
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
                    class="tw-mt-2 tw-ml-4"
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
