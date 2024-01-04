<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

import ArticleCard from '@/Components/Elements/ArticleCard.vue';
import CardCarousel from '@/Components/Elements/CardCarousel.vue';
import CategoryBadge from '@/Components/Elements/CategoryBadge.vue';
import { getDate } from '@/Composables/Common/Helper';
import Article from '@/Interfaces/Article';

const props = defineProps<{
    article: Article;
    other_articles: Array<Article>;
}>();
</script>
<template>
    <section class="tw-min-h-screen tw-pb-8">
        <Head :title="props.article.title" />

        <div class="tw-h-48">
            <img
                class="tw-relative tw-h-full tw-w-full tw-object-cover"
                alt="Cover Image"
                :src="props.article.cover_image.url"
                :style="`object-position: ${
                    props.article.cover_image?.object_position || 'center 50%'
                }`"
            />
        </div>
        <div class="tw-container tw-flex tw-flex-col tw-space-y-4 tw-pt-8">
            <h1 class="main-text-gradient tw-text-5xl">
                {{ props.article.title }}
            </h1>
            <div class="tw-flex tw-flex-row tw-items-start tw-justify-between">
                <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
                    <template
                        v-for="category in props.article.categories"
                        :key="category.id"
                    >
                        <CategoryBadge :category="category" />
                    </template>
                </div>
                <span class="main-text tw-ml-auto">
                    {{ getDate(props.article.created_at) }}
                </span>
            </div>
        </div>
        <!-- TODO: Add HeartIcon -->
        <div class="tw-flex tw-w-full tw-flex-col tw-space-y-4 tw-pb-8">
            <div class="tw-container">
                <h3 class="tw-text-3xl tw-font-bold tw-text-primary">
                    Other Articles
                </h3>
            </div>
            <CardCarousel>
                <template #content>
                    <template
                        v-for="article in props.other_articles"
                        :key="article.id"
                    >
                        <div class="panel tw-mx-0 tw-overflow-y-visible">
                            <ArticleCard
                                :article="article"
                                data-cursor-type="explore"
                            />
                        </div>
                    </template>
                </template>
            </CardCarousel>
        </div>
    </section>
</template>
