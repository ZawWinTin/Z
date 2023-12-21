<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import CardContainer from '@/Components/Elements/CardContainer.vue';
import ArticleCard from '@/Components/Elements/ArticleCard.vue';
import Article from '@/Interfaces/Article';

const props = defineProps<{
    articles: Array<Article>,
}>();
</script>
<template>
    <section class="tw-pt-4 tw-flex tw-flex-col">
        <Head title="Home" />
        <div class="tw-text-center">
            <h1 class="tw-font-bold tw-text-2xl tw-text-primary">
                Hello from Vue!
            </h1>
            <p class="tw-text-slate-500 dark:tw-text-slate-400">
                This is a Vue component in a Laravel app using Inertia.js.
            </p>
        </div>
        <div class="tw-container tw-h-screen">
            <CardContainer>
                <template
                    v-for="article in props.articles"
                    :key="article.id"
                >
                    <ArticleCard :article="article" data-cursor-type="explore" />
                </template>
            </CardContainer>
        </div>
        <div class="tw-bg-[url('https://images.unsplash.com/photo-1559963110-71b394e7494d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            tw-w-full
            tw-h-[50vh]
            tw-relative
            tw-bg-fixed
            tw-bg-center
            before:tw-absolute
            before:tw-inset-0
            before:tw-block
            before:tw-bg-gradient-to-l
            before:tw-from-indigo-500/40
            before:tw-via-purple-500
            before:tw-to-primary/95
            hover:tw-bg-blend-darken
            tw-flex
            tw-flex-col
            tw-justify-center
            tw-items-center">
                <div class="tw-container
                tw-z-10
                tw-flex
                tw-flex-col
                tw-items-start">
                    <div class="tw-max-w-md">
                        <h2 class="tw-text-4xl tw-font-bold tw-text-slate-50">Hello World</h2>
                        <p class="tw-mt-2
                        tw-text-slate-300
                        tw-text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cum cumque alias modi excepturi laudantium perferendis natus autem architecto facilis provident animi blanditiis reiciendis labore non placeat quam tempora saepe dolorem pariatur, doloremque deleniti maiores enim! Ducimus, sunt impedit. Repellendus.
                        </p>
                    </div>
                </div>
        </div>
        <div class="tw-h-[50vh]"></div>
    </section>
</template>
