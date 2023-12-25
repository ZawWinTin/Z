<script setup lang="ts">
import route from '@/Composables/Common/Route';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm<{
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
}>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <section>
        <Head title="Register" />

        <form @submit.prevent="submit">
            <div class="tw-mt-7">
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

            <div class="tw-mt-7">
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

            <div class="tw-mt-7">
                <span class="p-float-label">
                    <Password
                        id="password"
                        v-model="form.password"
                        class="tw-block tw-mt-1 tw-w-full"
                        required
                        toggleMask
                        feedback
                        :inputProps="{ autocomplete: 'new-password' }"
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
                        required
                        toggleMask
                        feedback
                        :inputProps="{ autocomplete: 'new-password' }"
                    />
                    <InputLabel class="tw-ml-4"
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
                tw-justify-between
                tw-mt-4
                ">
                <Link
                    :href="route('login')"
                    class="main-link"
                >
                    Already registered?
                </Link>

                <Button type="submit" rounded label="Register"
                    :loading="form.processing"
                />
            </div>
        </form>
    </section>
</template>
