<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import InputLabel from '../UI/InputLabel.vue';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import route from '@/Composables/Common/Route';
import { useToast } from 'primevue/usetoast';
import InputError from '@/Components/UI/InputError.vue';
import { scrollToTop } from '@/Composables/Common/Helper';
import Transitions from '@/Composables/UI/Transitions';
import { useContactViewStore } from '@/Composables/Common/PiniaStore';

const form = useForm<{
    email: string;
    name: string;
    content: string;
}>({
    email: '',
    name: '',
    content: '',
});

const toast = useToast();
const toastVisible = ref(false);
const isContactSuccess = ref(false);
const contactViewStore = useContactViewStore();

const footerInputTheme = 'tw-text-slate-300 !tw-bg-slate-900 !tw-border-slate-700 focus:tw-ring-offset-slate-800';

const submitContact = () => {
    form.clearErrors();
    form.post(route('contact.store'), {
        preserveScroll: true,
        onSuccess: () => {
            toastVisible.value = true;
            isContactSuccess.value = true;
            toast.add({
                summary: 'Contact Successful',
                detail: '',
                group: 'contact',
                life: 3000,
            });
            form.reset();
        },
        onError: () => {
            toastVisible.value = true;
            isContactSuccess.value = false;
            toast.add({
                summary: 'Something went wrong!',
                detail: '',
                group: 'contact',
                life: 3000,
            });
        },
    });
};
</script>
<template>
    <footer class="main-bg-3-dark-only tw-h-screen tw-mt-auto">
        <Toast position="bottom-center" group="contact" @close="toastVisible = false" :pt="{ transition: Transitions.overlay }">
            <template #container="{ message }">
                <section class="tw-flex tw-flex-col tw-p-3 tw-gap-2 tw-w-full tw-bg-slate-950 tw-shadow tw-shadow-primary tw-rounded-full tw-justify-center tw-items-center" >
                    <div class="tw-flex tw-flex-row tw-gap-4 tw-justify-center">
                        <i class="pi tw-text-2xl" :class="isContactSuccess ? 'pi-envelope tw-text-primary' : 'pi-times tw-text-red-500'"></i>
                        <p class="tw-font-semibold tw-text-base"
                            :class="isContactSuccess ? 'tw-text-slate-50' : 'tw-text-red-500'">
                            {{ message.summary }}
                        </p>
                    </div>
                    <template v-if="!!message.detail">
                        <p class="tw-m-0 tw-text-base main-text-dark-only">{{ message.detail }}</p>
                    </template>
                </section>
            </template>
        </Toast>
        <div class="tw-container tw-flex tw-flex-row tw-items-center tw-h-full tw-py-12">
            <div class="tw-w-1/2 lg:tw-w-3/5 tw-flex tw-flex-col tw-gap-8 tw-p-4"></div>
            <div class="tw-w-1/2 lg:tw-w-2/5 tw-h-full tw-flex tw-flex-col tw-justify-center tw-gap-8 tw-relative">
                <transition
                    :enter-from-class="Transitions.overlay.enterFromClass"
                    :enter-active-class="Transitions.overlay.enterActiveClass"
                    :leave-active-class="Transitions.overlay.leaveActiveClass"
                    :leave-to-class="Transitions.overlay.leaveToClass"
                >
                    <form v-show="contactViewStore.isShow"
                        class="tw-flex tw-flex-col tw-gap-8 tw-p-8 main-bg-2-dark-only tw-rounded-md tw-transition tw-duration-300 tw-shadow-lg hover:tw-shadow-primary"
                        @submit.prevent="submitContact"
                    >
                        <h3 class="tw-text-3xl main-text-gradient tw-uppercase">Contact Us</h3>
                        <div class="tw-w-full tw-flex tw-flex-col lg:tw-flex-row tw-gap-8 lg:tw-gap-4">
                            <div class="tw-w-full">
                                <span
                                    class="p-float-label p-input-icon-right tw-w-full"
                                >
                                    <InputText
                                        id="contact-name"
                                        v-model="form.name"
                                        :class="footerInputTheme"
                                        required
                                    />
                                    <InputLabel
                                        for="contact-name"
                                        value="Name"
                                        class="tw-ml-4 !tw-text-primary/80"
                                    />
                                </span>
                                <InputError
                                    class="tw-mt-2 tw-ml-4"
                                    :message="form.errors.name"
                                />
                            </div>
                            <div class="tw-w-full">
                                <span
                                    class="p-float-label p-input-icon-right tw-w-full"
                                >
                                    <InputText
                                        id="contact-email"
                                        v-model="form.email"
                                        type="email"
                                        :class="footerInputTheme"
                                        required
                                    />
                                    <InputLabel
                                        for="contact-email"
                                        value="Email"
                                        class="tw-ml-4 !tw-text-primary/80"
                                    />
                                </span>
                                <InputError
                                    class="tw-mt-2 tw-ml-4"
                                    :message="form.errors.email"
                                />
                            </div>
                        </div>

                        <div>
                            <span
                                class="p-float-label p-input-icon-right tw-w-full"
                            >
                                <Textarea
                                    id="content"
                                    v-model.trim="form.content"
                                    autoResize
                                    :class="footerInputTheme"
                                    rows="5"
                                />
                                <InputLabel
                                    for="content"
                                    value="Content"
                                    class="tw-ml-4 !tw-text-primary/80"
                                />
                            </span>
                            <InputError
                                class="tw-mt-2 tw-ml-4"
                                :message="form.errors.content"
                            />
                        </div>
                        <Button
                            type="submit"
                            rounded raised
                            label="Send"
                            icon="pi pi-arrow-up-right"
                            iconPos="right"
                            class="tw-uppercase focus:tw-ring-offset-slate-800"
                            :loading="form.processing"
                        />
                    </form>
                </transition>
                <transition
                    :enter-from-class="Transitions.floatIn.enterFromClass"
                    :enter-active-class="Transitions.floatIn.enterActiveClass"
                    :leave-active-class="Transitions.floatIn.leaveActiveClass"
                    :leave-to-class="Transitions.floatIn.leaveToClass"
                >
                    <Button rounded raised @click="scrollToTop"
                        class="!tw-absolute tw-transition tw-duration-300
                        tw-right-0 tw-bottom-0
                        motion-safe:tw-animate-bounce
                        !tw-w-12 !tw-h-12
                        tw-border-none focus:tw-ring-offset-slate-800
                    !tw-bg-slate-950/80 !tw-text-primary
                    hover:!tw-bg-primary hover:!tw-text-slate-950"
                        icon="pi pi-chevron-up" />
                </transition>
            </div>
        </div>
    </footer>
</template>
