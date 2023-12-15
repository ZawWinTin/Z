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
            main-text
            tw-ease-in-out
            tw-duration-300
            "
    >
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
