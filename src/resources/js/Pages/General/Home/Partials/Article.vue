<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Button from 'primevue/button';

import ArticleCard from '@/Components/Elements/ArticleCard.vue';
import CardCarousel from '@/Components/Elements/CardCarousel.vue';
import route from '@/Composables/Common/Route';
import { default as ArticleType } from '@/Interfaces/Article';

const props = defineProps<{
    articles: Array<ArticleType>;
}>();
</script>
<template>
    <div class="tw-flex tw-h-screen tw-flex-col tw-items-center">
        <CardCarousel>
            <template #content>
                <template v-for="article in props.articles" :key="article.id">
                    <div class="panel tw-mx-0 tw-overflow-y-visible">
                        <ArticleCard
                            :article="article"
                            data-cursor-type="explore"
                        />
                    </div>
                </template>
            </template>
        </CardCarousel>
        <div class="tw-container tw-flex tw-justify-end">
            <Link :href="route('article.index')">
                <Button
                    rounded
                    outlined
                    label="Dive More"
                    icon="pi pi-angle-double-right"
                    iconPos="right"
                />
            </Link>
        </div>
    </div>
</template>
