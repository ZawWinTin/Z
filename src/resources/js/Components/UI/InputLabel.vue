<script setup lang="ts">
defineProps<{
    value?: string;
}>();
</script>

<template>
    <label class="main-text tw-block tw-duration-300 tw-ease-in-out">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
