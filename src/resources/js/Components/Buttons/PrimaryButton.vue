<script setup>
</script>
<template>
    <button
        class="
            tw-bg-primary
            focus:tw-ring-2
            focus:tw-ring-primary/80
            focus:tw-ring-offset-2
            hover:tw-bg-primary-dark
            tw-shadow
            tw-duration-300
            tw-ease-in-out
            tw-font-semibold
            tw-inline-flex
            tw-items-center
            tw-px-4
            tw-py-2
            tw-rounded-md
            tw-text-slate-50
            tw-transition
            p-ripple
            "
            :class="{ 'tw-aspect-square !tw-rounded-full': rounded, }"
            v-ripple
    >
        <span><slot /></span>
    </button>
</template>
