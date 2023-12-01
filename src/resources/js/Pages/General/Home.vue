<script setup>
import { Head } from '@inertiajs/vue3';
import CardContainer from '@/Components/Elements/CardContainer.vue';
import ArticleCard from '@/Components/Elements/ArticleCard.vue';
</script>
<template>
    <section class="tw-container">
        <Head title="Home" />
        <div class="tw-text-center">
            <h1 class="tw-font-bold tw-text-2xl tw-text-primary">
                Hello from Vue!
            </h1>
            <p class="tw-text-slate-500 dark:tw-text-slate-400">
                This is a Vue component in a Laravel app using Inertia.js.
            </p>
        </div>
        <CardContainer>
            <!-- <ArticleCard class="article1" data-cursor-type="project" />
            <ArticleCard class="article2" data-cursor-type="link" />
            <ArticleCard class="article3" data-cursor-type="project" /> -->
        </CardContainer>
    </section>
</template>
