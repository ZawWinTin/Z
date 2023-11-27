<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>
    <label
        class="
            tw-block
            dark:tw-text-slate-400
            tw-text-slate-700
            tw-ease-in-out
            tw-duration-300
            "
    >
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
