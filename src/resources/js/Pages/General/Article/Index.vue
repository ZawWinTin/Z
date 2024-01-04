<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { Head, router } from '@inertiajs/vue3';

import ArticleCard from '@/Components/Elements/ArticleCard.vue';
import CategoryBadge from '@/Components/Elements/CategoryBadge.vue';
import route from '@/Composables/Common/Route';
import Article from '@/Interfaces/Article';
import Category from '@/Interfaces/Category';
import Paginator from '@/Interfaces/Paginator';

const props = defineProps<{
    articles: Paginator<Article>; //TODO: Infinite Scroll with Filter
    categories: Array<Category>;
    errors: object;
}>();

const currentArticles = ref<Array<Article>>([]);
const currentCategories = ref<Array<Category>>([]);

const articleContainer = ref<HTMLElement | null>(null);
const nextPageUrl = ref<string | null>(null);
const loadMoreFragment = ref<HTMLElement | null>(null);
const searchLoading = ref<boolean>(false);

const filters = reactive<{
    categories: {
        value: number[];
    };
}>({
    categories: { value: [] },
});

const callToLoadMoreArticles = () => {
    const observer = new IntersectionObserver(entries =>
        entries.forEach(entry => entry.isIntersecting && loadMoreArticles(), {
            rootMargin: '0px 0px 0px 0px',
        }),
    );

    if (loadMoreFragment.value) {
        observer.observe(loadMoreFragment.value);
    }
};

onMounted(() => {
    currentArticles.value = props.articles.data;
    currentCategories.value = props.categories;

    nextPageUrl.value = props.articles.next_page_url;
    articleContainer.value?.addEventListener('scroll', callToLoadMoreArticles);
});

onUnmounted(() => {
    articleContainer.value?.removeEventListener(
        'scroll',
        callToLoadMoreArticles,
    );
});

const loadMoreArticles = () => {
    if (!nextPageUrl.value) {
        return;
    }

    router.visit(nextPageUrl.value, {
        preserveState: true,
        preserveScroll: true,
        only: ['articles'],
        onSuccess: data => {
            currentArticles.value = [
                ...currentArticles.value,
                ...(data.props.articles as Paginator<Article>).data,
            ];
            nextPageUrl.value = props.articles.next_page_url;
            window.history.replaceState(
                {},
                '',
                route('article.index', {}, true),
            );
        },
    });
};

const chooseCategory = (category: Category) => {
    searchLoading.value = true;
    const index = filters.categories.value.indexOf(category.id);
    if (index === -1) {
        filters.categories.value.push(category.id); // Add the item if it doesn't exist
    } else {
        filters.categories.value.splice(index, 1); // Remove the item if it exists
    }

    router.visit(
        route('article.index', { categories: filters.categories.value }),
        {
            preserveState: true,
            preserveScroll: true,
            only: ['articles'],
            onSuccess: data => {
                currentArticles.value = (
                    data.props.articles as Paginator<Article>
                ).data;
                nextPageUrl.value = props.articles.next_page_url;
                window.history.replaceState(
                    {},
                    '',
                    route('article.index', {}, true),
                );
            },
            onFinish: () => {
                searchLoading.value = false;
            },
        },
    );
};
</script>
<template>
    <section class="tw-h-screen tw-pb-8 tw-pt-16">
        <Head title="Article" />
        <div class="tw-container tw-flex tw-h-full tw-flex-row tw-space-x-4">
            <!-- Article Section -->
            <div
                class="tw-flex tw-w-full tw-flex-col tw-rounded-lg !tw-bg-opacity-60 tw-text-slate-900 tw-transition tw-duration-300 dark:tw-text-slate-100"
            >
                <!-- Articles -->
                <div
                    ref="articleContainer"
                    class="primary-scrollbar tw-relative tw-flex tw-h-full tw-flex-wrap tw-justify-around tw-gap-4 tw-transition tw-duration-300"
                >
                    <template
                        v-for="article in currentArticles"
                        :key="article.id"
                    >
                        <ArticleCard :article="article" />
                    </template>

                    <div
                        ref="loadMoreFragment"
                        v-if="!!nextPageUrl"
                        class="main-text tw-mt-7 tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center tw-space-x-2 tw-opacity-80"
                    >
                        <i class="pi pi-spin pi-spinner"></i>
                        <span>Loading</span>
                    </div>

                    <template v-if="!currentArticles.length">
                        <div
                            class="tw-flex tw-h-full tw-w-full tw-animate-pulse tw-flex-col tw-items-center tw-justify-center"
                        >
                            <div class="tw-w-1/3">
                                <img
                                    class="tw-h-full tw-w-full"
                                    src="/404.svg"
                                    alt="404"
                                />
                            </div>
                            <span class="main-text tw-font-semibold tw-italic"
                                >No Articles Exist.</span
                            >
                        </div>
                    </template>

                    <div
                        v-show="searchLoading"
                        class="main-text tw-absolute tw-z-10 tw-flex tw-h-full tw-w-full tw-flex-row tw-items-center tw-justify-center tw-space-x-4 tw-rounded-lg tw-text-xl tw-font-semibold"
                    >
                        <i class="pi pi-spin pi-spinner"></i>
                        <span>Processing...</span>
                    </div>
                </div>
            </div>

            <!-- Category Section -->
            <div
                class="main-bg-2 tw-flex tw-w-1/4 tw-flex-col tw-space-y-4 tw-rounded-lg !tw-bg-opacity-60 tw-py-4 tw-text-slate-900 tw-shadow-lg tw-transition tw-duration-300 dark:tw-text-slate-100"
            >
                <div class="tw-mx-4 tw-flex tw-flex-row tw-space-x-2">
                    <h3 class="tw-font-semibold tw-text-primary">
                        Popular Categories
                    </h3>
                </div>
                <div
                    class="primary-scrollbar tw-mx-2 tw-flex tw-flex-row tw-flex-wrap tw-gap-1 tw-transition tw-duration-300"
                >
                    <template
                        v-for="category in currentCategories"
                        :key="category.id"
                    >
                        <div
                            class="hover:main-secondary-hover tw-inline-flex tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-full tw-px-2 tw-py-2 tw-transition tw-duration-300"
                            :class="
                                filters.categories.value.includes(category.id)
                                    ? 'tw-bg-primary/80 hover:!tw-bg-primary'
                                    : ''
                            "
                            @click="chooseCategory(category)"
                        >
                            <CategoryBadge :category="category" />
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
