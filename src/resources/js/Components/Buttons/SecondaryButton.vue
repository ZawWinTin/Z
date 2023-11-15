<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button
        :type="type"
        class="
            tw-bg-white
            dark:focus:tw-ring-offset-slate-800
            dark:hover:tw-bg-slate-700
            dark:tw-bg-slate-800
            dark:tw-border-slate-500
            dark:tw-text-slate-300
            disabled:tw-opacity-25
            focus:tw-outline-none
            focus:tw-ring-2
            focus:tw-ring-indigo-500
            focus:tw-ring-offset-2
            hover:tw-bg-slate-50
            tw-border
            tw-border-slate-300
            tw-duration-150
            tw-ease-in-out
            tw-font-semibold
            tw-inline-flex
            tw-items-center
            tw-px-4
            tw-py-2
            tw-rounded-md
            tw-shadow-sm
            tw-text-slate-700
            tw-text-xs
            tw-tracking-widest
            tw-transition
            tw-uppercase
            "
    >
        <slot />
    </button>
</template>
