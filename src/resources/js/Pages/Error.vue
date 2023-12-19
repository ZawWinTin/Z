<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
import Button from 'primevue/button';
import { Link } from '@inertiajs/vue3';
import route from '@/Composables/Common/Route';

const props = defineProps<{ status: number }>();

const title = computed(() => {
    return {
        503: '503: Service Unavailable',
        500: '500: Server Error',
        404: '404: Page Not Found',
        403: '403: Forbidden',
    }[props.status];
});

const description = computed(() => {
    return {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
    }[props.status];
});

const back = () => {
    window.history.back();
};
</script>
<template>
    <section class="tw-relative tw-flex tw-h-screen tw-justify-center tw-items-center">
        <Head title="404" />
        <div
            class="tw-flex tw-max-w-md tw-h-full tw-justify-center tw-items-center tw-flex-col"
        >
            <h1 class="tw-font-bold tw-text-2xl tw-text-primary tw-text-center">
                {{ title }}
            </h1>
            <p class="main-text tw-mt-1">
                {{ description }}
            </p>
            <div class="tw-mt-4 tw-flex tw-flex-row tw-space-x-4 tw-justify-around">
                <Link :href="route('home')">
                    <Button size="small"
                        class="tw-uppercase"
                        rounded
                        label="Go to Home"
                        icon="pi pi-home"
                    />
                </Link>
                <Button size="small"
                    class="tw-uppercase"
                    rounded
                    outlined
                    label="Back"
                    @click="back"
                    icon="pi pi-undo"
                />
            </div>
        </div>
        <div class="tw-absolute tw-bottom-8 tw-max-w-md tw-flex tw-flex-col tw-space-y-2">
            <Link :href="route('home')">
                <Button
                    class="tw-mx-auto tw-uppercase"
                    rounded
                    text
                    raised
                    label="Contact Us"
                    icon="pi pi-envelope"
                />
            </Link>
        </div>
    </section>
</template>
