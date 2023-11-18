<script setup>
import route from '@/Composables/Route';
import Checkbox from '@/Components/UI/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/UI/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div
            v-if="status"
            class="
                tw-font-medium
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

                <TextInput
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

            <div class="tw-mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="tw-block tw-mt-1 tw-w-full"
                    required
                    autocomplete="current-password"
                />

                <InputError class="tw-mt-2" :message="form.errors.password" />
            </div>

            <div class="tw-block tw-mt-4">
                <label class="tw-flex tw-items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span
                        class="
                            tw-ml-2
                            dark:tw-text-slate-400
                            tw-text-slate-600
                            tw-text-sm
                            "
                        >Remember me</span
                    >
                </label>
            </div>

            <div class="
                tw-flex
                tw-items-center
                tw-justify-end
                tw-mt-4
                ">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
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
                    Forgot your password?
                </Link>

                <PrimaryButton
                    class="tw-ml-4"
                    :class="{ 'tw-opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
