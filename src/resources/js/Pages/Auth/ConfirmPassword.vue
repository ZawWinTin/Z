<script setup lang="ts">
import route from '@/Composables/Common/Route';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm<{
    password: string
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
            class="
                tw-mb-4
                dark:tw-text-slate-400
                tw-text-slate-600
                tw-text-sm
                "
        >
            This is a secure area of the application. Please confirm your
            password before continuing.
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="password" value="Password" />
                <InputText
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="tw-block tw-mt-1 tw-w-full"
                    required
                    autocomplete="current-password"
                    autofocus
                />
                <InputError class="tw-mt-2" :message="form.errors.password" />
            </div>

            <div class="tw-flex tw-justify-end tw-mt-4">
                <Button label="Confirm"
                    class="tw-ml-4"
                    :loading="form.processing"
                />
            </div>
        </form>
    </section>
</template>
