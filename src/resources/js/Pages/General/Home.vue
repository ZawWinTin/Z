<script setup>
import { Head } from '@inertiajs/vue3';
import CardContainer from '@/Components/Elements/CardContainer.vue';
import Card from '@/Components/Elements/Card.vue';
</script>
<template>
    <section class="tw-container">
        <Head title="Home" />
        <h1 class="tw-font-bold tw-text-2xl tw-text-primary">
            Hello from Vue!
        </h1>
        <p class="tw-text-slate-500 dark:tw-text-slate-400">
            This is a Vue component in a Laravel app using Inertia.js.
        </p>
        <CardContainer>
            <Card class="article1" data-cursor-type="project" />
            <Card class="article2" data-cursor-type="link" />
            <Card class="article3" data-cursor-type="project" />
            <Card class="article4" data-cursor-type="link" />
        </CardContainer>
    </section>
</template>
