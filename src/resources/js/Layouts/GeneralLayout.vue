<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';

import Preloader from '@/Components/Elements/Preloader.vue';
import Footer from '@/Components/Layout/Footer.vue';
import Header from '@/Components/Layout/Header.vue';
import Cursor from '@/Components/UI/Cursor.vue';
import {
    initializeOverlayScroll,
    loadOverlayScroll,
    scrollOverlayEffect,
} from '@/Composables/Common/OverlayScrollEffect';
import { useContactViewStore } from '@/Composables/Common/PiniaStore';

const props = withDefaults(
    defineProps<{
        showFooter?: boolean;
    }>(),
    {
        showFooter: true,
    },
);

const contactViewStore = useContactViewStore();

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
        <Cursor />
        <Header></Header>
        <article ref="articleSection" class="tw-z-[1]">
            <div class="tw-min-h-screen">
                <slot />
            </div>
            <Footer v-show="props.showFooter" />
        </article>
        <Preloader />
    </main>
</template>
