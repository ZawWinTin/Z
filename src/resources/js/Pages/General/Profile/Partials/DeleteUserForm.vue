<script setup lang="ts">
import { nextTick, ref } from 'vue';
import route from '@/Composables/Common/Route';
import { useForm } from '@inertiajs/vue3';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Password from 'primevue/password';

const confirmingUserDeletion = ref(false);
const passwordInput = ref<HTMLInputElement | null>(null);

const form = useForm<{
    password: string,
}>({
    password: '',
});

const confirmUserDeletion = () => {
    form.reset();
    confirmingUserDeletion.value = true;

    //TODO:
    // nextTick(() => passwordInput.value?.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: false,
        onSuccess: () => closeModal(),
        // onError: () => passwordInput.value?.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;
};
</script>

<template>
    <section class="tw-space-y-6">
        <header>
            <h2
                class="
                    tw-font-semibold
                    tw-text-lg
                    tw-text-red-500
                    dark:tw-text-red-400
                    "
            >
                Delete Account
            </h2>

            <p
                class="
                    tw-mt-1
                    main-text
                    tw-text-sm
                    "
            >
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Before deleting your account, please
                download any data or information that you wish to retain.
            </p>
        </header>

        <Button rounded label="Delete Account" severity="danger"
            icon="pi pi-trash" @click="confirmUserDeletion" />

        <Dialog v-model:visible="confirmingUserDeletion" modal header="Are you sure you want to delete your account?">
            <div>
                <p
                    class="
                        main-text
                        tw-text-sm
                        "
                >
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Please enter your password to
                    confirm you would like to permanently delete your account.
                </p>
                <div class="tw-mt-7">
                    <span class="p-float-label">
                        <Password
                            id="delete-confirm-password"
                            ref="passwordInput"
                            v-model="form.password"
                            class="
                                tw-block
                                tw-mt-1
                                tw-w-3/4
                                "
                            toggleMask
                            autofocus
                            :feedback="false"
                            @keyup.enter="deleteUser"
                        />
                        <InputLabel
                            for="delete-confirm-password"
                            value="Password"
                            class="tw-ml-4"
                        />
                    </span>
                    <InputError
                        :message="form.errors.password"
                        class="tw-mt-2 tw-ml-4"
                    />
                </div>
            </div>
            <template #footer>
                <Button rounded
                    class="tw-ml-3"
                    :loading="form.processing"
                    severity="danger"
                    label="Delete Account"
                    @click="deleteUser"
                    icon="pi pi-trash"
                />
                <Button rounded label="Cancel"
                    severity="danger"
                    icon="pi pi-times"
                    outlined
                    @click="closeModal" />
            </template>
        </Dialog>
    </section>
</template>
