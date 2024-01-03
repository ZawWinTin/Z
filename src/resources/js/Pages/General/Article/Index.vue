<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

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
const loadMoreFragment = ref<HTMLElement | null>(null);

const articleFilters = reactive<{
    global: {
        value: string | null;
    };
    categories: {
        value: number[];
    };
}>({
    global: { value: null },

    categories: { value: [] },
});

const categoryFilters = ref<string>('');

const callToLoadArticles = () => {
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

    articleContainer.value?.addEventListener('scroll', callToLoadArticles);
});

onUnmounted(() => {
    articleContainer.value?.remvoEventListener('scroll', callToLoadArticles);
});

const getFilteredArticles = computed(() => {
    let filteredArticles = currentArticles.value;

    // Search by Category
    if (articleFilters.categories.value.length > 0) {
        filteredArticles = filteredArticles?.filter(article => {
            return article.categories.some(category => {
                return articleFilters.categories.value.includes(category.id);
            });
        });
    }

    // Search by Title
    if (articleFilters.global.value) {
        filteredArticles = filteredArticles?.filter(article => {
            return article.title
                .toLowerCase()
                .includes(
                    (articleFilters.global.value as string).toLowerCase(),
                );
        });
    }

    return filteredArticles;
});

const loadMoreArticles = () => {
    if (props.articles.next_page_url === null) {
        return;
    }

    router.visit(props.articles.next_page_url, {
        preserveState: true,
        preserveScroll: true,
        only: ['articles'],
        onSuccess: data => {
            currentArticles.value = [
                ...currentArticles.value,
                ...(data.props.articles as Paginator<Article>).data,
            ];
            window.history.replaceState(
                {},
                '',
                route('article.index', {}, true),
            );
        },
    });
};

const filteredCategories = computed(() => {
    return categoryFilters.value
        ? currentCategories.value.filter(category =>
              category.name
                  .toLowerCase()
                  .includes(categoryFilters.value.toLowerCase()),
          )
        : currentCategories.value;
});

const chooseCategory = (category: Category) => {
    const index = articleFilters.categories.value.indexOf(category.id);
    if (index === -1) {
        articleFilters.categories.value.push(category.id); // Add the item if it doesn't exist
    } else {
        articleFilters.categories.value.splice(index, 1); // Remove the item if it exists
    }
};

const clearChoseCategories = () => {
    articleFilters.categories.value = [];
};

const disableClearChoseCategories = computed(() => {
    return !articleFilters.categories.value.length;
});
</script>
<template>
    <section class="tw-h-screen tw-pb-8 tw-pt-16">
        <Head title="Article" />
        <div class="tw-container tw-flex tw-h-full tw-flex-row tw-space-x-4">
            <!-- Article Section -->
            <div
                class="tw-flex tw-w-full tw-flex-col tw-rounded-lg !tw-bg-opacity-60 tw-text-slate-900 tw-transition tw-duration-300 dark:tw-text-slate-100"
            >
                <!-- Search -->
                <div
                    class="tw-flex tw-items-center tw-justify-between tw-space-x-4 tw-pb-2"
                >
                    <span class="p-input-icon-left">
                        <i class="pi pi-search main-text tw-left-3" />
                        <InputText
                            class="tw-w-full tw-pl-10"
                            v-model="articleFilters['global'].value"
                            placeholder="Search"
                        />
                    </span>
                </div>
                <!-- Articles -->
                <div
                    ref="articleContainer"
                    class="primary-scrollbar tw-flex tw-h-full tw-flex-wrap tw-justify-around tw-gap-4 tw-transition tw-duration-300"
                >
                    <template
                        v-for="article in getFilteredArticles"
                        :key="article.id"
                    >
                        <ArticleCard :article="article" />
                    </template>

                    <div
                        ref="loadMoreFragment"
                        v-if="!!props.articles.next_page_url"
                        class="main-text tw-mt-7 tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center tw-space-x-2 tw-opacity-80"
                    >
                        <i class="pi pi-spin pi-spinner"></i>
                        <span>Loading</span>
                    </div>
                </div>
            </div>

            <!-- Category Section -->
            <div
                class="main-bg-2 tw-flex tw-w-1/4 tw-flex-col tw-space-y-4 tw-rounded-lg !tw-bg-opacity-60 tw-py-4 tw-text-slate-900 tw-shadow-lg tw-transition tw-duration-300 dark:tw-text-slate-100"
            >
                <div class="tw-mx-4 tw-flex tw-flex-row tw-space-x-2">
                    <span class="p-input-icon-left tw-w-full">
                        <i class="pi pi-tags main-text tw-left-3" />
                        <InputText
                            class="tw-w-full tw-pl-10"
                            v-model="categoryFilters"
                            placeholder="Search"
                        />
                    </span>
                    <Button
                        icon="pi pi-times"
                        class="tw-h-10 tw-w-10"
                        outlined
                        rounded
                        @click="clearChoseCategories()"
                        :disabled="disableClearChoseCategories"
                        :severity="
                            disableClearChoseCategories
                                ? 'secondary'
                                : undefined
                        "
                    />
                </div>
                <div
                    class="primary-scrollbar tw-mx-2 tw-flex tw-flex-row tw-flex-wrap tw-gap-1 tw-transition tw-duration-300"
                >
                    <template
                        v-for="category in filteredCategories"
                        :key="category.id"
                    >
                        <div
                            class="hover:main-secondary-hover tw-inline-flex tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-full tw-px-2 tw-py-2 tw-transition tw-duration-300"
                            :class="
                                articleFilters.categories.value.includes(
                                    category.id,
                                )
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
