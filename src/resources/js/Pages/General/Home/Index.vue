<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Flicking from '@egjs/vue3-flicking';
import { Head } from '@inertiajs/vue3';

import { default as ArticleType } from '@/Interfaces/Article';

import About from './Partials/About.vue';
import Article from './Partials/Article.vue';
import Home from './Partials/Home.vue';

const props = defineProps<{
    name: string;
    articles: Array<ArticleType>;
}>();

const container = ref<HTMLElement | null>(null);

const flicking = ref<Flicking | null>(null);

const mainWheelEvent = (event: WheelEvent) => {
    event.preventDefault();
    if (flicking.value?.animating) {
        return;
    }
    const deltaY = event.deltaY;

    if (Math.abs(deltaY) > 40) {
        if (deltaY > 0) {
            if (flicking.value?.index! < flicking.value?.panelCount! - 1) {
                flicking.value?.next();
            }
        } else if (deltaY < 0) {
            if (flicking.value?.index! > 0) {
                flicking.value?.prev();
            }
        }
    }
};

onMounted(() => {
    container.value?.addEventListener('wheel', mainWheelEvent, {
        passive: false,
    });
});

onUnmounted(() => {
    container.value?.removeEventListener('wheel', mainWheelEvent);
});
</script>
<template>
    <section ref="container" class="tw-flex tw-w-full tw-flex-col">
        <Head title="Home" />
        <Flicking
            ref="flicking"
            :options="{
                align: 'prev',
                circular: false,
                horizontal: false,
                bounce: '20%',
            }"
            class="tw-group/flick tw-w-full tw-pb-6"
        >
            <Home :key="0" :name="props.name" />

            <Article :key="1" :articles="props.articles" />

            <About :key="2" />
        </Flicking>
    </section>
</template>
