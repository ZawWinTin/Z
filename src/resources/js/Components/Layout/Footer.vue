<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import { scrollToTop } from '@/Composables/Common/Helper';
import {
    useContactViewStore,
    useScrollToTopStore,
} from '@/Composables/Common/PiniaStore';
import route from '@/Composables/Common/Route';
import Transitions from '@/Composables/UI/Transitions';

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

const contact = ref<HTMLElement | null>(null);

const footerInputTheme =
    'tw-text-slate-300 !tw-bg-slate-900 !tw-border-slate-700 focus:tw-ring-offset-slate-800';

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

const goToTop = () => {
    scrollToTop();
    useScrollToTopStore().flicking?.moveTo(0);
};

const contactScrollY = (event: WheelEvent) => {
    event.preventDefault();

    const deltaY = event.deltaY;

    if (Math.abs(deltaY) > 40) {
        if (deltaY < 0) {
            scrollToTop();
        }
    }
};

onMounted(() => {
    contact.value?.addEventListener('wheel', contactScrollY, {
        passive: false,
    });
});
onUnmounted(() => {
    contact.value?.removeEventListener('wheel', contactScrollY);
});
</script>
<template>
    <footer ref="contact" class="main-bg-3-dark-only tw-mt-auto tw-h-screen">
        <Toast
            position="bottom-center"
            group="contact"
            @close="toastVisible = false"
            :pt="{ transition: Transitions.overlay }"
        >
            <template #container="{ message }">
                <section
                    class="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-bg-slate-950 tw-p-3 tw-shadow tw-shadow-primary"
                >
                    <div class="tw-flex tw-flex-row tw-justify-center tw-gap-4">
                        <i
                            class="pi tw-text-2xl"
                            :class="
                                isContactSuccess
                                    ? 'pi-envelope tw-text-primary'
                                    : 'pi-times tw-text-red-500'
                            "
                        ></i>
                        <p
                            class="tw-text-base tw-font-semibold"
                            :class="
                                isContactSuccess
                                    ? 'tw-text-slate-50'
                                    : 'tw-text-red-500'
                            "
                        >
                            {{ message.summary }}
                        </p>
                    </div>
                    <template v-if="!!message.detail">
                        <p class="main-text-dark-only tw-m-0 tw-text-base">
                            {{ message.detail }}
                        </p>
                    </template>
                </section>
            </template>
        </Toast>
        <div
            class="tw-container tw-flex tw-h-full tw-flex-row tw-items-center tw-py-12"
        >
            <div
                class="tw-flex tw-w-1/2 tw-flex-col tw-gap-8 tw-p-4 lg:tw-w-3/5"
            ></div>
            <div
                class="tw-relative tw-flex tw-h-full tw-w-1/2 tw-flex-col tw-justify-center tw-gap-8 lg:tw-w-2/5"
            >
                <transition
                    :enter-from-class="Transitions.overlay.enterFromClass"
                    :enter-active-class="Transitions.overlay.enterActiveClass"
                    :leave-active-class="Transitions.overlay.leaveActiveClass"
                    :leave-to-class="Transitions.overlay.leaveToClass"
                >
                    <form
                        v-show="contactViewStore.isShow"
                        class="main-bg-2-dark-only tw-flex tw-flex-col tw-gap-8 tw-rounded-md tw-p-8 tw-shadow-lg tw-transition tw-duration-300 hover:tw-shadow-primary"
                        @submit.prevent="submitContact"
                    >
                        <h3 class="main-text-gradient tw-text-3xl tw-uppercase">
                            Contact Us
                        </h3>
                        <div
                            class="tw-flex tw-w-full tw-flex-col tw-gap-8 lg:tw-flex-row lg:tw-gap-4"
                        >
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
                                    class="tw-ml-4 tw-mt-2"
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
                                    class="tw-ml-4 tw-mt-2"
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
                                class="tw-ml-4 tw-mt-2"
                                :message="form.errors.content"
                            />
                        </div>
                        <Button
                            type="submit"
                            rounded
                            raised
                            label="Send"
                            icon="pi pi-send"
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
                    <Button
                        rounded
                        raised
                        @click="goToTop"
                        class="!tw-absolute tw-bottom-0 tw-right-0 !tw-h-12 !tw-w-12 tw-border-none !tw-bg-slate-950/80 !tw-text-primary tw-transition tw-duration-300 hover:!tw-bg-primary hover:!tw-text-slate-950 focus:tw-ring-offset-slate-800 motion-safe:tw-animate-bounce"
                        icon="pi pi-chevron-up"
                    />
                </transition>
            </div>
        </div>
    </footer>
</template>
