<script setup>
import { convertHexToRgba } from '@/Composables/Common';

const props = defineProps({
    content: null,
    textColor: null,
    backgroundColor: null,
});
</script>
<template>
    <span
        class="tw-px-4 tw-py-2 tw-rounded-full tw-text-xs tw-font-semibold"
        :style="`background-color: ${convertHexToRgba(
            props.backgroundColor,
        )}; color: ${props.textColor};`"
    >
        {{ props.content }}
    </span>
</template>
