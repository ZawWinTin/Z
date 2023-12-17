<script setup lang="ts">
defineProps<{
    value?: string,
}>();
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
