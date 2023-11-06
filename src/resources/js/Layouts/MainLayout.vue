<script setup>
import { Link } from '@inertiajs/vue3';
import Header from '@components/Common/Header.vue';
import Footer from '@components/Common/Footer.vue';
import Cursor from '@components/Common/Cursor.vue';
</script>
<template>
    <main class="scroll-smooth duration-300 ease-in-out selection:bg-primary/80 selection:text-white dark:bg-black min-h-screen flex flex-col">
        <Header></Header>
        <article>
            <slot />
        </article>
        <!-- <Cursor /> -->
        <Footer></Footer>
    </main>
</template>
