<script setup lang="ts">
withDefaults(
    defineProps<{
        show: boolean;
        message?: string;
    }>(),
    {
        show: false,
        message: '',
    },
);
</script>

<template>
    <div v-show="show">
        <p
            class="tw-text-sm tw-font-medium tw-text-green-600 dark:tw-text-green-400"
        >
            {{ message }}
        </p>
    </div>
</template>
