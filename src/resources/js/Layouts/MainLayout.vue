<script setup>
import { Link } from '@inertiajs/vue3';
import Header from '@components/Common/Header.vue';
import Footer from '@components/Common/Footer.vue';
</script>
<template>
    <main class="dark:bg-black ease-in-out duration-300 selection:bg-primary selection:text-white scroll-smooth">
        <Header></Header>
        <article class="min-h-[89.3vh]">
            <slot />
        </article>
        <Footer></Footer>
    </main>
</template>
