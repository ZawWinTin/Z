<script setup>
import { Link } from '@inertiajs/vue3';
import Header from '@/Components/Layout/Header.vue';
import Footer from '@/Components/Layout/Footer.vue';
import Cursor from '@/Components/UI/Cursor.vue';
</script>
<template>
    <main
        class="tw-flex tw-min-h-screen tw-flex-col tw-scroll-smooth tw-duration-300 tw-ease-in-out selection:tw-bg-primary/80 selection:tw-text-white dark:tw-bg-black"
    >
        <Cursor />
        <Header class="tw-z-[1]"></Header>
        <article class="tw-z-[1]">
            <slot />
        </article>
        <Footer class="tw-z-[1]"></Footer>
    </main>
</template>
