<script setup lang="ts">
defineProps<{
    message?: string,
}>();
</script>

<template>
    <div v-show="!!message">
        <p class="tw-text-red-600 dark:tw-text-red-400 tw-text-sm">
            {{ message }}
        </p>
    </div>
</template>
