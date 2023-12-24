<script setup lang="ts">
import Header from '@/Components/Layout/Header.vue';
import Footer from '@/Components/Layout/Footer.vue';
import Cursor from '@/Components/UI/Cursor.vue';
import Preloader from '@/Components/Elements/Preloader.vue';
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';
import { initializeOverlayScroll, loadOverlayScroll, scrollOverlayEffect } from '@/Composables/Common/OverlayScrollEffect';
import { useContactViewStore } from '@/Composables/Common/PiniaStore';

const props = withDefaults(
    defineProps<{
        showFooter?: boolean,
    }>(),
    {
        showFooter: true,
    }
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
        loadOverlayScroll(articleSection.value);
    }
    contactViewStore.setExist(props.showFooter);
});
</script>
<template>
    <main
        class="
            main-bg-1
            tw-duration-300
            tw-ease-in-out
            tw-flex
            tw-flex-col
            "
    >
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
