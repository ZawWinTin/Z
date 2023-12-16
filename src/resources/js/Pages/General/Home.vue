<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import CardContainer from '@/Components/Elements/CardContainer.vue';
import ArticleCard from '@/Components/Elements/ArticleCard.vue';

const props = defineProps<{
    articles: {
        default: [],
    },
}>();
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
            <template
                v-for="article in props.articles"
                :key="article.id"
            >
                <ArticleCard :article="article" data-cursor-type="explore" />
            </template>
        </CardContainer>
    </section>
</template>
