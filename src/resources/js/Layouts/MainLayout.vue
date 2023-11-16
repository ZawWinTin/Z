<script setup>
import Header from '@/Components/Layout/Header.vue';
import Footer from '@/Components/Layout/Footer.vue';
import Cursor from '@/Components/UI/Cursor.vue';
</script>
<template>
    <main
        class="
            tw-bg-slate-50
            dark:tw-bg-slate-950
            selection:tw-bg-primary/80
            selection:tw-text-slate-50
            tw-duration-300
            tw-ease-in-out
            tw-flex
            tw-flex-col
            tw-min-h-screen
            tw-scroll-smooth
            "
    >
        <Cursor />
        <Header class="tw-z-[1]"></Header>
        <article class="tw-z-[1] tw-pt-4">
            <slot />
        </article>
        <Footer class="tw-z-[1]"></Footer>
    </main>
</template>
