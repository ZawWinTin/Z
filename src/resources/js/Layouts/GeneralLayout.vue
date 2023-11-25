<script setup>
import Header from '@/Components/Layout/Header.vue';
import Footer from '@/Components/Layout/Footer.vue';
import Cursor from '@/Components/UI/Cursor.vue';
import Preloader from '@/Components/Elements/Preloader.vue';

const props = defineProps({
    showFooter: {
        default: true,
    },
});
</script>
<template>
    <main
        class="
            tw-bg-slate-50
            dark:tw-bg-slate-950
            tw-duration-300
            tw-ease-in-out
            tw-flex
            tw-flex-col
            tw-h-screen
            "
    >
        <Cursor />
        <Header></Header>
        <article class="tw-pt-4 tw-z-[1]">
            <slot />
            <template v-if="props.showFooter">
                <Footer />
            </template>
        </article>
        <Preloader />
    </main>
</template>
