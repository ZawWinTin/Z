<script setup>
import { Head } from '@inertiajs/vue3';
import { computed, onMounted, reactive, ref } from 'vue';
import TextInput from '@/Components/UI/TextInput.vue';
import Button from '@/Components/UI/Button.vue';
import Badge from '@/Components/UI/Badge.vue';
import ArticleCard from '@/Components/Elements/ArticleCard.vue';

const props = defineProps({
    articles: {
        default: [],
    },
    categories: {
        default: [],
    },
    errors: Object,
});

const articles = ref([]);
const categories = ref([]);

const articleFilters = reactive({
    global: { value: null },

    categories: { value: [] },
});
const categoryFilters = ref(null);

onMounted(() => {
    articles.value = props.articles;
    categories.value = props.categories;
});

const filteredArticles = computed(() => {
    let filteredArticles = articles.value;

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
        ? categories.value.filter(category =>
              category.name
                  .toLowerCase()
                  .includes(categoryFilters.value.toLowerCase()),
          )
        : categories.value;
});

const chooseCategory = category => {
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
                class="tw-w-full tw-bg-slate-50/60 dark:tw-bg-slate-800/60 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-duration-300 tw-transition tw-flex tw-flex-col"
            >
                <div class="tw-flex tw-justify-between tw-space-x-4 tw-pb-2">
                    <div
                        class="tw-flex tw-justify-start tw-space-x-4 tw-w-full"
                    >
                        <div class="tw-w-full">
                            <span class="p-input-icon-left tw-w-64">
                                <i
                                    class="pi pi-search tw-left-3 tw-text-slate-700 dark:tw-text-slate-400"
                                />
                                <TextInput
                                    class="tw-pl-10 tw-w-full"
                                    v-model="articleFilters['global'].value"
                                    placeholder="Search"
                                />
                            </span>
                            <span class="tw-ml-1">
                                In total, there are <b>{{ filteredArticles ? filteredArticles.length : 0 }}</b> articles.
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    class="tw-flex tw-flex-wrap tw-gap-4 tw-justify-center tw-h-[70vh] tw-transition tw-duration-300 tw-pt-2 tw-overflow-y-auto primary-scrollbar"
                >
                    <template
                        v-for="(article, index) in filteredArticles"
                        :key="article.id"
                    >
                        <ArticleCard :article="article" data-cursor-type="explore" />
                    </template>
                </div>
            </div>

            <!-- Category Section -->
            <div
                class="tw-w-1/4 tw-bg-slate-50/60 dark:tw-bg-slate-800/60 tw-shadow-lg tw-rounded-lg tw-py-4 tw-text-slate-900 dark:tw-text-slate-100 tw-duration-300 tw-transition tw-flex tw-flex-col tw-space-y-4"
            >
                <div class="tw-mx-4 tw-flex tw-flex-row tw-space-x-2">
                    <span class="p-input-icon-left tw-w-full">
                        <i
                            class="pi pi-tags tw-left-3 tw-text-slate-700 dark:tw-text-slate-400"
                        />
                        <TextInput
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
                    class="tw-flex tw-flex-col tw-space-y-1 tw-mx-2 tw-overflow-y-auto primary-scrollbar tw-h-[70vh] tw-transition tw-duration-300"
                >
                    <template
                        v-for="category in filteredCategories"
                        :key="category.id"
                    >
                        <div
                            class="tw-py-2 tw-px-2 tw-cursor-pointer tw-rounded-full tw-transition tw-duration-300 hover:tw-bg-slate-400/20 dark:hover:tw-bg-slate-700/80"
                            :class="
                                articleFilters.categories.value.includes(
                                    category.id,
                                )
                                    ? 'tw-bg-primary/80 hover:!tw-bg-primary'
                                    : ''
                            "
                            @click="chooseCategory(category)"
                        >
                            <Badge
                                :content="category.name"
                                :textColor="category.text_color"
                                :backgroundColor="category.background_color"
                                :value="null"
                            />
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
