<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

defineProps<{
    href: {
        type: String,
        required: true,
    },
}>();
</script>

<template>
    <Link
        :href="href"
        class="
            tw-block
            dark:focus:tw-bg-slate-800
            dark:hover:tw-bg-slate-800
            main-text-for-input
            focus:tw-bg-slate-100
            focus:tw-outline-none
            hover:tw-bg-slate-100
            tw-duration-150
            tw-ease-in-out
            tw-leading-5
            tw-px-4
            tw-py-2
            tw-text-left
            tw-text-sm
            tw-transition
            tw-w-full
            "
    >
        <slot />
    </Link>
</template>
