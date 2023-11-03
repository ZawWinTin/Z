<script setup>
import { Link } from '@inertiajs/vue3';
import Header from '@components/Common/Header.vue';
import Footer from '@components/Common/Footer.vue';
</script>
<template>
    <main class="scroll-smooth duration-300 ease-in-out selection:bg-primary selection:text-white dark:bg-black">
        <Header></Header>
        <article class="min-h-[89.3vh]">
            <slot />
        </article>
        <Footer></Footer>
    </main>
</template>
