<script setup>
import { onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import Badge from '@/Components/UI/Badge.vue';

const props = defineProps({
    article: {
        default: null,
    },
    link: {
        default: location.href,
    }
});

let displayTime = moment().diff(props.article.created_at, 'days') <= 2 ? moment(props.article.created_at, "YYYYMMDD").fromNow()
    : moment(props.article.created_at).format('MMM Do, YYYY');
let imageContainer = ref(null);

onMounted(() => {
    loadImage();
});

let loadImage = () => {
    let uploadImage = new Image();
    uploadImage.src = 'https://picsum.photos/500/300';
    uploadImage.classList.add(
        'tw-absolute',
        'tw-h-full',
        'tw-w-full',
        'tw-rounded-t-lg',
        'tw-object-cover',
    );
    imageContainer.value.appendChild(uploadImage);
};
</script>
<template>
    <Link
        :href="props.link"
        class="
            card
            interactable-js
            tw-duration-300
            tw-ease-in-out
            tw-group
            tw-transition-all
            "
    >
        <div
            class="
                tw-h-[17.5rem]
                tw-overflow-hidden
                tw-relative
                tw-rounded-lg
                tw-shadow
                tw-w-80
                "
        >
            <div
                ref="imageContainer"
                class="tw-h-52 tw-relative tw-w-full"
            ></div>
            <div
                class="
                    group-hover:tw-translate-y-[-5.5rem]
                    tw-duration-500
                    tw-mt-[-3.3rem]
                    tw-relative
                    tw-transition
                    "
            >
                <div
                    class="
                        card-background
                        tw-absolute
                        dark:tw-bg-slate-900
                        tw-bg-slate-50
                        tw-duration-300
                        tw-ease-in-out
                        tw-rounded-2xl
                        w-full
                        "
                ></div>
                <div class="
                    tw-flex
                    tw-flex-col
                    tw-gap-2
                    tw-p-5
                    tw-relative
                    ">
                    <p
                        class="
                            tw-text-right
                            dark:tw-text-slate-500
                            tw-text-slate-400
                            tw-text-sm
                            "
                    >
                        {{ displayTime }}
                    </p>
                    <h5
                        class="
                            card-title
                            tw-bg-clip-text
                            tw-bg-gradient-to-r
                            tw-font-bold
                            tw-from-indigo-500
                            tw-line-clamp-2
                            tw-text-2xl
                            tw-text-transparent
                            tw-to-primary
                            tw-tracking-tight
                            "
                    >
                        {{ props.article.title }}
                    </h5>
                    <div class="tw-flex tw-flex-row tw-flex-wrap tw-max-h-[68px] tw-gap-1">
                        <div class="tw-w-full tw-line-clamp-2">
                            <template v-for="category in props.article.categories" :key="category.id">
                                <Badge :content="category.name"
                                    :textColor="category.text_color"
                                    :backgroundColor="category.background_color" />
                            </template>
                        </div>
                    </div>
                    <p
                        class="
                            tw-line-clamp-3
                            dark:tw-text-slate-400
                            tw-text-justify
                            tw-text-slate-700
                            tw-tracking-tight
                            "
                    >
                        {{ props.article.description }}
                    </p>
                </div>
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
