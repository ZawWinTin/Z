<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import moment from 'moment';

import CategoryBadge from '@/Components/Elements/CategoryBadge.vue';
import route from '@/Composables/Common/Route';
import Article from '@/Interfaces/Article';

const props = withDefaults(
    defineProps<{
        article: Article;
        link?: string;
    }>(),
    {
        link: '',
    },
);

const displayTime = computed(() => {
    return moment().diff(props.article.created_at, 'days') <= 2
        ? moment(props.article.created_at).fromNow()
        : moment(props.article.created_at).format('MMM Do, YYYY');
});

const imageContainer = ref<HTMLElement | null>(null);
const card = ref<HTMLElement | null>(null);

onMounted(() => {
    loadImage();
});

const loadImage = () => {
    const uploadImage = new Image();
    uploadImage.src = props.article.cover_image.url;
    uploadImage.classList.add(
        'tw-h-full',
        'tw-w-full',
        'tw-rounded-t-2xl',
        'tw-rounded-b-sm',
        'tw-object-cover',
    );
    imageContainer.value?.appendChild(uploadImage);
};

const getLink = computed(() => {
    return props.link || route('article.show', { id: props.article.id });
});
</script>
<template>
    <Link
        ref="card"
        :href="getLink"
        class="card interactable-js tw-group tw-relative tw-flex tw-h-[23rem] tw-flex-col tw-items-center tw-overflow-hidden tw-transition-all tw-duration-300 tw-ease-in-out"
    >
        <!-- Image -->
        <div
            ref="imageContainer"
            class="tw-relative tw-z-[1] tw-mt-[8%] tw-h-36 tw-w-[88%] tw-rounded-b-sm tw-rounded-t-2xl tw-border-slate-50 tw-shadow-lg tw-transition-all tw-duration-300 group-hover:tw-mt-0 dark:tw-border-slate-900"
        ></div>
        <!-- Background -->
        <div
            class="main-bg-3 tw-relative tw-mt-[-30%] tw-flex tw-h-[61.5%] tw-w-80 tw-flex-col tw-items-center tw-rounded-2xl tw-p-5 tw-pt-[32%] tw-shadow tw-transition-all tw-duration-300 tw-ease-in-out group-hover:tw-mt-[-17%] group-hover:tw-h-[73%] group-hover:tw-pt-[18%]"
        >
            <!-- Text -->
            <div
                class="tw-relative tw-flex tw-flex-col tw-space-y-2 tw-transition-all tw-duration-300 tw-ease-in-out"
            >
                <h5
                    class="card-title main-text-gradient tw-line-clamp-2 tw-h-16 tw-text-2xl tw-tracking-tight"
                >
                    {{ props.article.title }}
                </h5>
                <div
                    class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-overflow-hidden"
                >
                    <template
                        v-for="(category, index) in props.article.categories"
                    >
                        <!-- Show Highest Priority Only -->
                        <template v-if="!index">
                            <CategoryBadge
                                :category="category"
                                :key="category.id"
                            />
                        </template>
                    </template>
                    <span
                        class="main-text tw-text-right tw-text-sm tw-opacity-75"
                    >
                        {{ displayTime }}
                    </span>
                </div>
                <p
                    class="main-text tw-invisible tw-top-[-8rem] !tw-mt-0 tw-line-clamp-3 tw-h-0 tw-text-justify tw-tracking-tight tw-opacity-0 tw-transition-all tw-duration-150 tw-ease-in group-hover:tw-visible group-hover:!tw-mt-4 group-hover:tw-h-auto group-hover:tw-opacity-100"
                >
                    {{ props.article.description }}
                </p>
            </div>
        </div>
    </Link>
</template>
<style lang="scss" scoped>
.card-background {
    top: 8%;
    left: -43%;
    height: 120%;
    width: 150%;
    transform: skew(19deg, -9deg);
}
</style>
