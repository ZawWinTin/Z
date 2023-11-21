<script setup>
import { Head } from '@inertiajs/vue3';
import CardContainer from '@/Components/Elements/CardContainer.vue';
import Card from '@/Components/Elements/Card.vue';
</script>
<template>
    <section class="tw-container">
        <Head title="Article - Admin" />
        <div class="tw-text-center">
            <h1 class="tw-font-bold tw-text-2xl tw-text-primary">
                Hello from Article!
            </h1>
            <p class="tw-text-slate-500 dark:tw-text-slate-400">
                This is Article Page.
            </p>
        </div>
        <CardContainer>
            <Card class="article1" data-cursor-type="project" />
            <Card class="article2" data-cursor-type="link" />
            <Card class="article3" data-cursor-type="project" />
        </CardContainer>
    </section>
</template>
