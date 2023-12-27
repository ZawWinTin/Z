<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import Button from 'primevue/button';
import Password from 'primevue/password';

import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import route from '@/Composables/Common/Route';
import Transitions from '@/Composables/UI/Transitions';

const passwordInput = ref<HTMLInputElement | null>(null);
const currentPasswordInput = ref<HTMLInputElement | null>(null);

const form = useForm<{
    current_password: string;
    password: string;
    password_confirmation: string;
}>({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                // passwordInput.value?.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                // currentPasswordInput.value?.focus();
            }
        },
    });
};
</script>

<template>
    <section>
        <header>
            <h2 class="main-text-for-input tw-text-lg tw-font-semibold">
                Update Password
            </h2>

            <p class="main-text tw-mt-1 tw-text-sm">
                Ensure your account is using a long, random password to stay
                secure.
            </p>
        </header>

        <form class="tw-mt-7 tw-space-y-7" @submit.prevent="updatePassword">
            <div>
                <span class="p-float-label">
                    <Password
                        id="current_password"
                        ref="currentPasswordInput"
                        v-model="form.current_password"
                        class="tw-mt-1 tw-block tw-w-full"
                        :inputProps="{ autocomplete: 'current-password' }"
                        toggleMask
                        autofocus
                        :feedback="false"
                    />
                    <InputLabel
                        for="current_password"
                        value="Current Password"
                        class="tw-ml-4"
                    />
                </span>

                <InputError
                    :message="form.errors.current_password"
                    class="tw-ml-4 tw-mt-2"
                />
            </div>

            <div>
                <span class="p-float-label">
                    <Password
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        class="tw-mt-1 tw-block tw-w-full"
                        :inputProps="{ autocomplete: 'new-password' }"
                        toggleMask
                        feedback
                    />
                    <InputLabel
                        for="password"
                        value="New Password"
                        class="tw-ml-4"
                    />
                </span>

                <InputError
                    :message="form.errors.password"
                    class="tw-ml-4 tw-mt-2"
                />
            </div>

            <div>
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
                    :message="form.errors.password_confirmation"
                    class="tw-ml-4 tw-mt-2"
                />
            </div>

            <div class="tw-flex tw-items-center tw-gap-4">
                <Button
                    type="submit"
                    rounded
                    label="Save"
                    icon="pi pi-check"
                    :loading="form.processing"
                />

                <transition
                    :enter-from-class="Transitions.overlay.enterFromClass"
                    :enter-active-class="Transitions.overlay.enterActiveClass"
                    :leave-active-class="Transitions.overlay.leaveActiveClass"
                    :leave-to-class="Transitions.overlay.leaveToClass"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="main-text tw-text-sm"
                    >
                        Saved.
                    </p>
                </transition>
            </div>
        </form>
    </section>
</template>
