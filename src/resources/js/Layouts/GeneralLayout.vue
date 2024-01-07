<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';

import Preloader from '@/Components/Elements/Preloader.vue';
import Footer from '@/Components/Layout/Footer.vue';
import Header from '@/Components/Layout/Header.vue';
import Cursor from '@/Components/UI/Cursor.vue';
import {
    initializeOverlayScroll,
    scrollOverlayEffect,
} from '@/Composables/Common/OverlayScrollEffect';
import { useContactViewStore, usePreloaderStore } from '@/Composables/Common/PiniaStore';

const props = withDefaults(
    defineProps<{
        showFooter?: boolean;
    }>(),
    {
        showFooter: true,
    },
);

const contactViewStore = useContactViewStore();
const preloaderStore = usePreloaderStore();

const articleSection = ref<HTMLElement | null>(null);

onMounted(() => {
    if (props.showFooter) {
        initializeOverlayScroll(articleSection.value, true);
        window.addEventListener('scroll', scrollOverlayEffect);
    }
    contactViewStore.setExist(props.showFooter);
});

onUnmounted(() => {
    window.removeEventListener('scroll', scrollOverlayEffect);
});

onUpdated(() => {
    if (props.showFooter) {
        initializeOverlayScroll(articleSection.value, true);
        window.addEventListener('scroll', scrollOverlayEffect);
    }
    contactViewStore.setExist(props.showFooter);
});
</script>
<template>
    <main class="main-bg-1 tw-flex tw-flex-col tw-duration-300 tw-ease-in-out">
        <template v-if="!preloaderStore.isLoading">
            <Cursor />
            <Header></Header>
            <article ref="articleSection" class="tw-z-[1]">
                <div class="tw-min-h-screen">
                    <slot />
                </div>
                <Footer v-show="props.showFooter" />
            </article>
        </template>
        <Preloader />
    </main>
</template>
