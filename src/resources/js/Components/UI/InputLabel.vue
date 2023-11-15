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
            dark:tw-text-slate-300
            tw-font-medium
            tw-text-slate-700
            tw-text-sm
            "
    >
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
