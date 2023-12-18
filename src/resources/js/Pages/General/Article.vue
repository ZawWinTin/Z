<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { computed, onMounted, reactive, ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import ArticleCard from '@/Components/Elements/ArticleCard.vue';
import CategoryBadge from '@/Components/Elements/CategoryBadge.vue';
import Category from '@/Interfaces/Category';
import Article from '@/Interfaces/Article';
import Paginator from '@/Interfaces/Paginator';

const props = defineProps<{
    articles: Paginator<Article>,
    categories: Array<Category>,
    errors: any,
}>();

const currentArticles = ref<Paginator<Article> | null>(null);
const currentCategories = ref<Array<Category>>([]);

const articleFilters = reactive({
    global: { value: null },

    categories: { value: [] },
});
const categoryFilters = ref(null);

onMounted(() => {
    currentArticles.value = props.articles;
    currentCategories.value = props.categories;
});

const getFilteredArticles = computed(() => {
    let filteredArticles = currentArticles.value;

    // Search by Category
    if (articleFilters.categories.value.length > 0) {
        filteredArticles = filteredArticles.filter(article => {
            return article.categories.some((category) => {
                return articleFilters.categories.value.includes(category.id);
            });
        });
    }

    // Search by Title
    if (articleFilters.global.value) {
        filteredArticles = filteredArticles.filter(article => {
            return article.title.toLowerCase()
                  .includes(articleFilters.global.value.toLowerCase());
        });
    }

    return filteredArticles;
});

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
    let index = articleFilters.categories.value.indexOf(category.id);
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
    <section>
        <Head title="Article" />
        <div class="tw-container tw-flex tw-flex-row tw-space-x-4 tw-mt-8">
            <!-- Article Section -->
            <div
                class="tw-w-full !tw-bg-opacity-60 tw-rounded-lg tw-py-4 tw-text-slate-900 dark:tw-text-slate-100 tw-duration-300 tw-transition tw-flex tw-flex-col"
            >
                <div class="tw-flex tw-justify-between tw-items-center tw-space-x-4 tw-pb-2">
                    <div
                        class="tw-flex tw-justify-start tw-items-center tw-space-x-4 tw-w-full"
                    >
                        <div class="tw-w-full">
                            <span class="p-input-icon-left tw-w-64">
                                <i
                                    class="pi pi-search tw-left-3 main-text"
                                />
                                <InputText
                                    class="tw-pl-10 tw-w-full"
                                    v-model="articleFilters['global'].value"
                                    placeholder="Search"
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    class="tw-flex tw-flex-wrap tw-gap-4 tw-justify-around tw-h-[70vh] tw-transition tw-duration-300 tw-pt-2 primary-scrollbar"
                >
                    <template
                        v-for="article in getFilteredArticles"
                        :key="article.id"
                    >
                        <ArticleCard :article="article" data-cursor-type="explore" />
                    </template>
                </div>
            </div>

            <!-- Category Section -->
            <div
                class="tw-w-1/4 main-bg-2 !tw-bg-opacity-60 tw-shadow-lg tw-rounded-lg tw-py-4 tw-text-slate-900 dark:tw-text-slate-100 tw-duration-300 tw-transition tw-flex tw-flex-col tw-space-y-4"
            >
                <div class="tw-mx-4 tw-flex tw-flex-row tw-space-x-2">
                    <span class="p-input-icon-left tw-w-full">
                        <i
                            class="pi pi-tags tw-left-3 main-text"
                        />
                        <InputText
                            class="tw-pl-10 tw-w-full"
                            v-model="categoryFilters"
                            placeholder="Search"
                        />
                    </span>
                    <Button
                        icon="pi pi-times"
                        class="tw-w-10 tw-h-10"
                        outlined
                        rounded
                        @click="clearChoseCategories()"
                        :disabled="disableClearChoseCategories"
                        :severity="
                            disableClearChoseCategories ? 'secondary' : null
                        "
                    />
                </div>
                <div
                    class="tw-flex tw-flex-row tw-flex-wrap tw-gap-1 tw-mx-2 primary-scrollbar tw-max-h-[70vh] tw-transition tw-duration-300"
                >
                    <template
                        v-for="category in filteredCategories"
                        :key="category.id"
                    >
                        <div
                            class="tw-inline-flex tw-justify-center tw-items-center tw-py-2 tw-px-2 tw-cursor-pointer tw-rounded-full tw-transition tw-duration-300 hover:main-secondary-hover"
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
