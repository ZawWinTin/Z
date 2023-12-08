<script setup>
import Checkbox from 'primevue/checkbox';
import route from '@/Composables/Route';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { TRANSITIONS } from '@/Composables/Theme';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

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

const isShowingPassword = ref(false);
const isShowingEmailLoading = ref(false);

const submit = () => {
    if (!isShowingPassword.value) {
        isShowingEmailLoading.value = true;
    }
    form.post(location.href, {
        onSuccess: () => {
            isShowingPassword.value = true;
        },
        onFinish: () => {
            form.reset('password');
            isShowingEmailLoading.value = false;
        },
    });
};

const hidePassword = () => {
    form.clearErrors();
    form.reset('password');
    isShowingPassword.value = false;
};
</script>

<template>
    <section>
        <Head title="Log in" />

        <div
            v-if="status"
            class="tw-font-medium tw-mb-4 tw-text-green-600 tw-text-sm"
        >
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div class="tw-mt-7">
                <span class="p-float-label p-input-icon-right tw-w-full">
                    <template v-if="isShowingEmailLoading">
                        <i
                            class="pi pi-spin pi-spinner tw-right-3 tw-text-slate-600 dark:tw-text-slate-400"
                        />
                    </template>
                    <InputText
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="tw-block tw-w-full"
                        autofocus
                        autocomplete="username email"
                        @input="hidePassword"
                    />
                    <InputLabel for="email" value="Email" class="tw-ml-4" />
                </span>
                <InputError
                    class="tw-mt-2 tw-ml-4"
                    :message="form.errors.email"
                />
            </div>

            <transition
                :enter-from-class="TRANSITIONS.overlay.enterFromClass"
                :enter-active-class="TRANSITIONS.overlay.enterActiveClass"
                :leave-active-class="TRANSITIONS.overlay.leaveActiveClass"
                :leave-to-class="TRANSITIONS.overlay.leaveToClass"
            >
                <div v-if="isShowingPassword">
                    <div class="tw-mt-7">
                        <span class="p-float-label">
                            <Password
                                id="password"
                                v-model="form.password"
                                class="tw-block tw-w-full"
                                :inputProps="{ autocomplete: 'current-password' }"
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
                            class="tw-mt-2 tw-ml-4"
                            :message="form.errors.password"
                        />
                    </div>

                    <div class="tw-block tw-mt-4">
                        <div
                            class="tw-flex tw-flex-row-reverse tw-items-center tw-justify-end"
                        >
                            <label
                                for="remember"
                                class="tw-ml-2 dark:tw-text-slate-400 tw-text-slate-600 tw-text-sm tw-cursor-pointer"
                                >Remember me</label
                            >
                            <Checkbox
                                v-model="form.remember"
                                inputId="remember"
                                name="remember"
                                :binary="true"
                            />
                        </div>
                    </div>
                </div>
            </transition>

            <div class="tw-flex tw-items-center tw-justify-end tw-mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="tw-rounded-md dark:focus:tw-ring-offset-slate-800 dark:hover:tw-text-slate-100 dark:tw-text-slate-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2 hover:tw-text-slate-900 tw-text-slate-600 tw-text-sm tw-underline"
                >
                    Forgot your password?
                </Link>
                <Button
                    rounded
                    type="submit"
                    :loading="form.processing"
                    :label="isShowingPassword ? 'Log In' : 'Next'"
                />
            </div>
        </form>
    </section>
</template>
