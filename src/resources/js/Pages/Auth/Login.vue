<script setup>
import route from '@/Composables/Route';
import Checkbox from '@/Components/UI/Checkbox.vue';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Button from '@/Components/UI/Button.vue';
import TextInput from '@/Components/UI/TextInput.vue';
import PasswordInput from '@/Components/UI/PasswordInput.vue';
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
    form.post(location.href, {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <section>
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
            <div class="tw-mt-7">
                <span class="p-float-label">
                    <TextInput
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="tw-block tw-mt-1 tw-w-full"
                        autofocus
                        autocomplete="username"
                    />
                    <InputLabel for="email" value="Email" class="tw-ml-2" />
                </span>
                <InputError class="tw-mt-2" :message="form.errors.email" />
            </div>

            <div class="tw-mt-7">
                <span class="p-float-label">
                    <PasswordInput
                        id="password"
                        v-model="form.password"
                        type="password"
                        class="tw-block tw-mt-1 tw-w-full"
                        autocomplete="current-password"
                    />
                    <InputLabel for="password" value="Password" class="tw-ml-2" />
                </span>
                <InputError class="tw-mt-2" :message="form.errors.password" />
            </div>

            <div class="tw-block tw-mt-4">
                <div class="tw-flex tw-flex-row-reverse tw-items-center tw-justify-end">
                    <label for="remember"
                        class="
                            tw-ml-2
                            dark:tw-text-slate-400
                            tw-text-slate-600
                            tw-text-sm
                            tw-cursor-pointer
                            "
                        >Remember me</label
                    >
                    <Checkbox v-model="form.remember" id="remember" name="remember" :binary="true" />
                </div>
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
                <Button type="submit" :loading="form.processing" label="Log In" />
            </div>
        </form>
    </section>
</template>
