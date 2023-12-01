<script setup>
import { Head } from '@inertiajs/vue3';
import { FilterMatchMode } from 'primevue/api';
import { computed, onMounted, reactive, ref } from 'vue';
import { TRANSITIONS, tooltipTheme } from '@/Composables/Theme';
import TextInput from '@/Components/UI/TextInput.vue';
import Button from '@/Components/UI/Button.vue';
import ToggleButton from '@/Components/UI/ToggleButton.vue';
import Splitter from '@/Components/UI/Splitter.vue';
import SplitterPanel from 'primevue/splitterpanel';
import InputError from '@/Components/UI/InputError.vue';
import Badge from '@/Components/UI/Badge.vue';
import ArticleCard from '@/Components/Elements/ArticleCard.vue';
import CardContainer from '@/Components/Elements/CardContainer.vue';

const props = defineProps({
    activeArticles: {
        default: [],
    },
    deletedArticles: {
        default: [],
    },
    categories: {
        default: [],
    },
    errors: Object,
});

const activeArticles = ref([]);
const deletedArticles = ref([]);
const categories = ref([]);


const isActiveMode = ref(true);

const articleFilters = reactive({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },

    categories: { value: [], matchMode: FilterMatchMode.CONTAINS },
});
const categoryFilters = ref(null);

onMounted(() => {
    activeArticles.value = props.activeArticles;
    deletedArticles.value = props.deletedArticles;
    categories.value = props.categories;
});

const openSaveDialog = () => {

};

const filteredArticles = computed(() => {
    return isActiveMode.value ? activeArticles.value : deletedArticles.value;
});

const filteredCategories = computed(() => {
    return (categoryFilters.value) ? categories.value.filter(category => category.name.toLowerCase().includes(categoryFilters.value.toLowerCase()))
        : categories.value;
});

const chooseCategory = (category) => {
    let index = articleFilters.categories.value.indexOf(category);
    if (index === -1) {
        articleFilters.categories.value.push(category); // Add the item if it doesn't exist
    } else {
        articleFilters.categories.value.splice(index, 1); // Remove the item if it exists
    };
}

const clearChoosedCategories = () => {
    articleFilters.categories.value = [];
}

const disableClearChoosedCategories = computed(() => {
    return !articleFilters.categories.value.length;
})
</script>
<template>
    <section>
        <Head title="Article - Admin" />
        <h1
            class="tw-font-bold tw-text-2xl tw-text-primary tw-uppercase tw-mb-4">
            Articles
        </h1>
        <div
            class="tw-bg-slate-50 dark:tw-bg-slate-800 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-duration-300 tw-transition tw-flex tw-flex-col tw-space-y-2">
            <Splitter class="mb-5">
                <SplitterPanel class="flex tw-space-y-4 tw-pr-4 tw-overflow-visible" :size="75" :minSize="50">
                    <div class="tw-flex tw-justify-between tw-space-x-4">
                        <div class="tw-flex tw-justify-start tw-space-x-4 tw-w-full">
                            <ToggleButton v-model="isActiveMode"
                                onLabel="Active" offLabel="Trash"
                                onIcon="pi pi-check" offIcon="pi pi-trash" />
                            <div class="tw-w-full">
                                <span class="p-input-icon-left tw-w-64">
                                    <i class="pi pi-search tw-left-3 tw-text-slate-700 dark:tw-text-slate-400" />
                                    <TextInput class="tw-pl-10 tw-w-full"
                                        v-model="articleFilters['global'].value"
                                        placeholder="Article Search" />
                                </span>
                            </div>
                        </div>
                        <transition
                            :enter-from-class="TRANSITIONS.overlay.enterFromClass"
                            :enter-active-class="TRANSITIONS.overlay.enterActiveClass"
                            :leave-active-class="TRANSITIONS.overlay.leaveActiveClass"
                            :leave-to-class="TRANSITIONS.overlay.leaveToClass"
                        >
                            <template v-if="isActiveMode">
                                <Button icon="pi pi-plus" class="tw-w-10 tw-h-10" rounded @click="openSaveDialog()" />
                            </template>
                        </transition>
                    </div>
                    <div class="tw-flex tw-flex-wrap tw-gap-2 tw-justify-center tw-overflow-y-auto tw-h-[70vh] tw-transition tw-duration-300">
                        <template v-for="article in filteredArticles" :key="article.id">
                            <ArticleCard :article="article" />
                        </template>
                    </div>
                </SplitterPanel>
                <SplitterPanel class="flex tw-overflow-visible tw-flex-col tw-space-y-4" :size="25" :minSize="15">
                    <div class="tw-ml-4 tw-flex tw-flex-row tw-space-x-2">
                        <span class="p-input-icon-left tw-w-full">
                            <i class="pi pi-tags tw-left-3 tw-text-slate-700 dark:tw-text-slate-400" />
                            <TextInput class="tw-pl-10 tw-w-full"
                                v-model="categoryFilters"
                                placeholder="Category Search" />
                        </span>
                        <Button icon="pi pi-times" class="tw-w-10 tw-h-10" outlined rounded @click="clearChoosedCategories()"
                            :disabled="disableClearChoosedCategories"  :severity="disableClearChoosedCategories ? 'secondary' : null" />
                    </div>
                    <div class="tw-flex tw-flex-col tw-space-y-0.5 tw-ml-2 tw-overflow-y-auto tw-h-[70vh]">
                        <template v-for="category in filteredCategories" :key="category.id">
                                <div class="tw-py-2 tw-pl-2 tw-cursor-pointer tw-rounded-full tw-transition tw-duration-300 hover:tw-bg-slate-400/20 dark:hover:tw-bg-slate-700/80"
                                    :class="articleFilters.categories.value.includes(category) ? 'tw-bg-primary/80 hover:!tw-bg-primary' : ''"
                                    @click="chooseCategory(category)"
                                >
                                    <Badge
                                    :content="category.name"
                                    :textColor="category.text_color"
                                    :backgroundColor="category.background_color"
                                    :value="category.articles_count"
                                        />
                                </div>
                        </template>
                    </div>
                </SplitterPanel>
            </Splitter>
        </div>
    </section>
</template>
