<script setup>
import { nextTick, ref } from 'vue';
import route from '@/Composables/Common/Route';
import { useForm } from '@inertiajs/vue3';
import DangerButton from '@/Components/Buttons/DangerButton.vue';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Modal from '@/Components/UI/Modal.vue';
import SecondaryButton from '@/Components/Buttons/SecondaryButton.vue';
import InputText from 'primevue/inputtext';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <section class="tw-space-y-6">
        <header>
            <h2
                class="
                    tw-font-medium
                    dark:tw-text-slate-100
                    tw-text-lg
                    tw-text-slate-900
                    "
            >
                Delete Account
            </h2>

            <p
                class="
                    tw-mt-1
                    dark:tw-text-slate-400
                    tw-text-slate-600
                    tw-text-sm
                    "
            >
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Before deleting your account, please
                download any data or information that you wish to retain.
            </p>
        </header>

        <DangerButton @click="confirmUserDeletion">Delete Account</DangerButton>

        <Modal :show="confirmingUserDeletion" @close="closeModal">
            <div class="tw-p-6">
                <h2
                    class="
                        tw-font-medium
                        dark:tw-text-slate-100
                        tw-text-lg
                        tw-text-slate-900
                        "
                >
                    Are you sure you want to delete your account?
                </h2>

                <p
                    class="
                        tw-mt-1
                        dark:tw-text-slate-400
                        tw-text-slate-600
                        tw-text-sm
                        "
                >
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Please enter your password to
                    confirm you would like to permanently delete your account.
                </p>

                <div class="tw-mt-6">
                    <InputLabel
                        for="password"
                        value="Password"
                        class="tw-sr-only"
                    />

                    <InputText
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="
                            tw-block
                            tw-mt-1
                            tw-w-3/4
                            "
                        placeholder="Password"
                        @keyup.enter="deleteUser"
                    />

                    <InputError
                        :message="form.errors.password"
                        class="tw-mt-2"
                    />
                </div>

                <div class="tw-flex tw-justify-end tw-mt-6">
                    <SecondaryButton @click="closeModal">
                        Cancel
                    </SecondaryButton>

                    <DangerButton
                        class="tw-ml-3"
                        :class="{ 'tw-opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        Delete Account
                    </DangerButton>
                </div>
            </div>
        </Modal>
    </section>
</template>
