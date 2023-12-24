<script setup lang="ts">
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import route from '@/Composables/Common/Route';
import Transitions from '@/Composables/UI/Transitions';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import StatusMessage from '@/Components/UI/StatusMessage.vue';

defineProps<{
    isGeneralLogin?: boolean,
    status?: string,
}>();

const form = useForm<{
    email: string,
    password: string,
    remember: boolean,
}>({
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

        <StatusMessage class="tw-mb-4" :show="!!status" :message="status" />

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
                        autocomplete='username email'
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
                :enter-from-class="Transitions.overlay.enterFromClass"
                :enter-active-class="Transitions.overlay.enterActiveClass"
                :leave-active-class="Transitions.overlay.leaveActiveClass"
                :leave-to-class="Transitions.overlay.leaveToClass"
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

            <div class="tw-flex tw-items-center tw-mt-4"
                :class="isGeneralLogin ? 'tw-justify-between' : 'tw-justify-end'">
                <Link
                    v-if="isGeneralLogin"
                    :href="route('password.request')"
                    class="tw-transition
                    tw-rounded-md
                    tw-duration-300
                    focus:main-primary-focus
                    main-text
                    hover:tw-text-primary
                    tw-text-sm
                    tw-underline"
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
        <!-- TODO: Google Login -->
        <template v-if="isGeneralLogin">
            <div class="tw-relative tw-mt-8">
                <hr class="tw-bg-slate-300 dark:tw-bg-slate-700 tw-border-0 tw-h-px">
                <span class="tw-uppercase main-text main-bg-2 tw-px-4 tw-py-2 tw-border tw-border-slate-300 dark:tw-border-slate-700 tw-rounded-full tw-absolute tw-translate-y-[-50%] tw-translate-x-[50%] tw-right-1/2">OR</span>
                <div class="
                    tw-flex
                    tw-items-center
                    tw-justify-center
                    tw-mt-8
                    ">
                    <Link
                        :href="route('register')"
                        class="tw-transition
                        tw-rounded-md
                        tw-duration-300
                        focus:main-primary-focus
                        main-text
                        hover:tw-text-primary
                        tw-text-sm
                        tw-underline"
                    >
                        Don't have an account?
                    </Link>
                </div>
            </div>
        </template>
    </section>
</template>
