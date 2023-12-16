<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{ status: Number }>();

const title = computed(() => {
  return {
    503: '503: Service Unavailable',
    500: '500: Server Error',
    404: '404: Page Not Found',
    403: '403: Forbidden',
  }[props.status]
});

const description = computed(() => {
  return {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.',
  }[props.status]
});

</script>
<template>
    <section class="tw-container tw-h-screen -tw-mt-4">
        <Head title="404" />
        <div class="tw-flex tw-h-full tw-justify-center tw-items-center tw-flex-col">
            <h1 class="tw-font-bold tw-text-2xl tw-text-primary">
                {{ title }}
            </h1>
            <p class="main-text">
                {{ description }}
            </p>
        </div>
    </section>
</template>
