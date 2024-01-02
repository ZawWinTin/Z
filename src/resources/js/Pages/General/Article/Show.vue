<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

import CategoryBadge from '@/Components/Elements/CategoryBadge.vue';
import { getDate } from '@/Composables/Common/Helper';
import Article from '@/Interfaces/Article';

const props = defineProps<{
    article: Article;
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
    </section>
</template>
