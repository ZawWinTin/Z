<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import CategoryBadge from '@/Components/Elements/CategoryBadge.vue';
import Article from '@/Interfaces/Article';

const props = withDefaults(
    defineProps<{
        article: Article;
        link?: string;
    }>(),
    {
        link: location.href,
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
        'tw-absolute',
        'tw-h-full',
        'tw-w-full',
        'tw-rounded-t-2xl',
        'tw-rounded-b-sm',
        'tw-object-cover',
    );
    imageContainer.value?.appendChild(uploadImage);
};
</script>
<template>
    <Link
        ref="card"
        :href="props.link"
        class="card interactable-js tw-group tw-relative tw-flex tw-h-[22rem] tw-items-center tw-justify-center tw-transition-all tw-duration-300 tw-ease-in-out"
    >
        <div
            class="main-bg-3 tw-relative tw-mt-[20%] tw-flex tw-h-[65%] tw-w-80 tw-flex-col tw-items-center tw-rounded-2xl tw-p-5 tw-shadow tw-transition-all tw-duration-300 tw-ease-in-out group-hover:tw-mt-[40%] group-hover:tw-h-[78%]"
        >
            <!-- Image -->
            <div
                ref="imageContainer"
                class="tw-absolute tw-top-[-20%] tw-z-[1] tw-h-36 tw-w-[88%] tw-rounded-b-sm tw-rounded-t-2xl tw-border-slate-50 tw-shadow-lg tw-transition-all tw-duration-300 group-hover:tw-top-[-32%] dark:tw-border-slate-900"
            ></div>

            <!-- Text -->
            <div
                class="tw-relative tw-mt-[32%] tw-flex tw-flex-col tw-space-y-2 tw-transition-all tw-duration-300 tw-ease-in-out group-hover:tw-mt-[16%]"
            >
                <h5
                    class="card-title main-text-gradient tw-line-clamp-2 tw-h-16 tw-text-2xl tw-tracking-tight"
                >
                    {{ props.article.title }}
                </h5>
                <div
                    class="tw-flex tw-max-h-[32px] tw-flex-row tw-items-center tw-justify-between tw-overflow-hidden"
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
                    class="main-text tw-invisible tw-top-[-8rem] tw-mt-0 tw-line-clamp-3 tw-text-justify tw-tracking-tight tw-opacity-0 tw-transition-all tw-duration-150 tw-ease-in group-hover:tw-visible group-hover:tw-mt-4 group-hover:tw-opacity-100"
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
