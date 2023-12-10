<script setup>
import { ref } from 'vue';
import route from '@/Composables/Common/Route';
import { useForm } from '@inertiajs/vue3';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import InputText from 'primevue/inputtext';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
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
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <section>
        <header>
            <h2
                class="
                    tw-font-medium
                    dark:tw-text-slate-100
                    tw-text-lg
                    tw-text-slate-900
                    "
            >
                Update Password
            </h2>

            <p
                class="
                    tw-mt-1
                    dark:tw-text-slate-400
                    tw-text-slate-600
                    tw-text-sm
                    "
            >
                Ensure your account is using a long, random password to stay
                secure.
            </p>
        </header>

        <form class="tw-mt-6 tw-space-y-6" @submit.prevent="updatePassword">
            <div>
                <InputLabel for="current_password" value="Current Password" />

                <InputText
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    type="password"
                    class="tw-block tw-mt-1 tw-w-full"
                    autocomplete="current-password"
                />

                <InputError
                    :message="form.errors.current_password"
                    class="tw-mt-2"
                />
            </div>

            <div>
                <InputLabel for="password" value="New Password" />

                <InputText
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    class="tw-block tw-mt-1 tw-w-full"
                    autocomplete="new-password"
                />

                <InputError :message="form.errors.password" class="tw-mt-2" />
            </div>

            <div>
                <InputLabel
                    for="password_confirmation"
                    value="Confirm Password"
                />

                <InputText
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="tw-block tw-mt-1 tw-w-full"
                    autocomplete="new-password"
                />

                <InputError
                    :message="form.errors.password_confirmation"
                    class="tw-mt-2"
                />
            </div>

            <div class="tw-flex tw-gap-4 tw-items-center">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition
                    enter-active-class="tw-transition tw-ease-in-out"
                    enter-from-class="tw-opacity-0"
                    leave-active-class="tw-transition tw-ease-in-out"
                    leave-to-class="tw-opacity-0"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="
                            tw-text-slate-600
                            dark:tw-text-slate-400
                            tw-text-sm
                            "
                    >
                        Saved.
                    </p>
                </Transition>
            </div>
        </form>
    </section>
</template>
