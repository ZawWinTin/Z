<script setup>
import { Link } from '@inertiajs/vue3';
import Header from '@/Components/Common/Header.vue';
import Footer from '@/Components/Common/Footer.vue';
import Cursor from '@/Components/Common/Cursor.vue';
</script>
<template>
    <main
        class="flex min-h-screen flex-col scroll-smooth duration-300 ease-in-out selection:bg-primary/80 selection:text-white dark:bg-black"
    >
        <Header></Header>
        <article>
            <slot />
        </article>
        <!-- <Cursor /> -->
        <Footer></Footer>
    </main>
</template>
