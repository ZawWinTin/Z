<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import Button from 'primevue/button';

import ArticleCard from '@/Components/Elements/ArticleCard.vue';
import CardCarousel from '@/Components/Elements/CardCarousel.vue';
import route from '@/Composables/Common/Route';
import Article from '@/Interfaces/Article';

const props = defineProps<{
    articles: Array<Article>;
}>();
</script>
<template>
    <section class="tw-flex tw-flex-col tw-pt-4">
        <Head title="Home" />
        <div class="tw-text-center">
            <h1 class="tw-text-2xl tw-font-bold tw-text-primary">
                Hello from Vue!
            </h1>
            <p class="tw-text-slate-500 dark:tw-text-slate-400">
                This is a Vue component in a Laravel app using Inertia.js.
            </p>
        </div>
        <div class="tw-mt-2 tw-flex tw-h-screen tw-flex-col tw-items-center">
            <CardCarousel>
                <template #content>
                    <template
                        v-for="article in props.articles"
                        :key="article.id"
                    >
                        <div class="panel tw-mx-0 tw-overflow-y-visible">
                            <ArticleCard
                                :article="article"
                                data-cursor-type="explore"
                            />
                        </div>
                    </template>
                </template>
            </CardCarousel>
            <div class="tw-container tw-flex tw-justify-end">
                <Link :href="route('article.index')">
                    <Button
                        rounded
                        outlined
                        label="Dive More"
                        icon="pi pi-angle-double-right"
                        iconPos="right"
                    />
                </Link>
            </div>
        </div>
        <div
            class="tw-relative tw-flex tw-h-[50vh] tw-w-full tw-flex-col tw-items-center tw-justify-center tw-bg-[url('https://images.unsplash.com/photo-1559963110-71b394e7494d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] tw-bg-fixed tw-bg-center before:tw-absolute before:tw-inset-0 before:tw-block before:tw-bg-gradient-to-l before:tw-from-indigo-500/40 before:tw-via-purple-500 before:tw-to-primary/95 hover:tw-bg-blend-darken"
        >
            <div
                class="tw-container tw-z-10 tw-flex tw-flex-col tw-items-start"
            >
                <div class="tw-max-w-md">
                    <h2 class="tw-text-4xl tw-font-bold tw-text-slate-50">
                        Hello World
                    </h2>
                    <p class="tw-mt-2 tw-text-justify tw-text-slate-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quaerat cum cumque alias modi excepturi laudantium
                        perferendis natus autem architecto facilis provident
                        animi blanditiis reiciendis labore non placeat quam
                        tempora saepe dolorem pariatur, doloremque deleniti
                        maiores enim! Ducimus, sunt impedit. Repellendus.
                    </p>
                </div>
            </div>
        </div>
        <div class="tw-h-[50vh]"></div>
    </section>
</template>
