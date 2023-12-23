<script setup lang="ts">
import Header from '@/Components/Layout/Header.vue';
import Footer from '@/Components/Layout/Footer.vue';
import Cursor from '@/Components/UI/Cursor.vue';
import Preloader from '@/Components/Elements/Preloader.vue';
import { ref, onMounted, onUpdated } from 'vue';
import { initializeOverlayScroll, loadOverlayScroll } from '@/Composables/Common/OverlayScrollEffect';

const props = withDefaults(
    defineProps<{
        showFooter?: boolean,
    }>(),
    {
        showFooter: true,
    }
);

const articleSection = ref<HTMLElement | null>(null);

onMounted(() => {
    initializeOverlayScroll(articleSection.value, true);
});

onUpdated(() => {
    loadOverlayScroll(articleSection.value);
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
