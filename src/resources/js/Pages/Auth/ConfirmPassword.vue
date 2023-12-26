<script setup lang="ts">
import route from '@/Composables/Common/Route';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Button from 'primevue/button';
import Password from 'primevue/password';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm<{
    password: string;
}>({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <section>
        <Head title="Confirm Password" />

        <div
            class="tw-mb-4 tw-text-sm tw-text-slate-600 dark:tw-text-slate-400"
        >
            This is a secure area of the application. Please confirm your
            password before continuing.
        </div>

        <form @submit.prevent="submit">
            <div class="tw-mt-7">
                <span class="p-float-label">
                    <Password
                        id="password"
                        v-model="form.password"
                        class="tw-mt-1 tw-block tw-w-full"
                        required
                        :inputProps="{ autocomplete: 'current-password' }"
                        autofocus
                        toggleMask
                        :feedback="false"
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

            <div class="tw-mt-4 tw-flex tw-justify-end">
                <Button
                    type="submit"
                    label="Confirm"
                    rounded
                    class="tw-ml-4"
                    :loading="form.processing"
                />
            </div>
        </form>
    </section>
</template>
