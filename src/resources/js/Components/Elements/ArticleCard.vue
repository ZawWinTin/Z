<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import CategoryBadge from '@/Components/Elements/CategoryBadge.vue';

const props = defineProps<{
    article: {
        default: null,
    },
    link: {
        default: location.href,
    }
}>();

const displayTime = () => {
    return moment().diff(props.article.created_at, 'days') <= 2 ?
        moment(props.article.created_at).fromNow() :
        moment(props.article.created_at).format('MMM Do, YYYY');
};

const imageContainer = ref(null);
const card = ref(null);

onMounted(() => {
    loadImage();
});

const loadImage = () => {
    let uploadImage = new Image();
    uploadImage.src = props.article.cover_image.url;
    uploadImage.classList.add(
        'tw-absolute',
        'tw-h-full',
        'tw-w-full',
        'tw-rounded-t-2xl',
        'tw-rounded-b-sm',
        'tw-object-cover',
    );
    imageContainer.value.appendChild(uploadImage);
};
</script>
<template>
    <Link
        ref="card"
        :href="props.link"
        class="
            card
            interactable-js
            tw-duration-300
            tw-ease-in-out
            tw-group
            tw-transition-all
            tw-h-[22rem]
            tw-flex
            tw-justify-center
            tw-items-center
            "
    >
        <div
            class="
                tw-mt-[20%]
                group-hover:tw-mt-[40%]
                tw-h-[65%]
                group-hover:tw-h-[78%]
                tw-relative
                tw-flex
                tw-flex-col
                tw-items-center
                tw-rounded-2xl
                tw-shadow
                tw-w-80
                tw-transition-all
                tw-duration-300
                tw-ease-in-out
                main-bg-3
                tw-p-5
                "
        >
            <!-- Image -->
            <div
                ref="imageContainer"
                class="
                    tw-top-[-20%]
                    group-hover:tw-top-[-32%]
                    tw-absolute
                    tw-h-36
                    tw-border-slate-50
                    dark:tw-border-slate-900
                    tw-rounded-t-2xl
                    tw-rounded-b-sm
                    tw-w-[88%]
                    tw-shadow-lg
                    tw-z-[1]
                    tw-transition-all
                    tw-duration-300"
            ></div>

            <!-- Text -->
            <div
                class="
                    tw-mt-[32%]
                    group-hover:tw-mt-[16%]
                    tw-duration-300
                    tw-relative
                    tw-transition-all
                    tw-ease-in-out
                    tw-flex
                    tw-flex-col
                    tw-space-y-2
                    "
            >
                <h5
                    class="
                        tw-h-16
                        card-title
                        main-text-gradient
                        tw-line-clamp-2
                        tw-text-2xl
                        tw-tracking-tight
                        "
                >
                    {{ props.article.title }}
                </h5>
                <div class="tw-flex tw-flex-row tw-max-h-[32px] tw-items-center tw-justify-between tw-overflow-hidden">
                    <template v-for="(category, index) in props.article.categories" :key="category.id">
                        <!-- Show Highest Priority Only -->
                        <template v-if="!index">
                            <CategoryBadge :category="category" />
                        </template>
                    </template>
                    <span
                        class="
                            tw-text-right
                            main-text
                            tw-opacity-75
                            tw-text-sm
                            "
                    >
                        {{ displayTime }}
                    </span>
                </div>
                <p
                    class="
                        tw-top-[-8rem]
                        tw-invisible
                        tw-opacity-0
                        tw-mt-0
                        group-hover:tw-mt-4
                        group-hover:tw-visible
                        group-hover:tw-opacity-100
                        tw-transition-all
                        tw-ease-in
                        tw-duration-150
                        tw-line-clamp-3
                        tw-text-justify
                        main-text
                        tw-tracking-tight
                        "
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
