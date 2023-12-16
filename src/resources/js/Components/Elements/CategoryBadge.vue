<script setup lang="ts">
import { convertHexToRgba, isLightColor } from '@/Composables/Common/Helper';

const props = defineProps<{
    category: null,
    showCount: {
        type: Boolean,
        default: false,
    }
}>();
</script>
<template>
    <div
        class="tw-inline-flex tw-items-center tw-px-2 tw-py-2 tw-rounded-full tw-space-x-1"
        :style="`background-color: ${convertHexToRgba(
            props.category.background_color,
        )};`"
    >
        <span :style="`color: ${props.category.text_color};`" class="tw-text-xs tw-font-semibold tw-whitespace-nowrap">
            {{ props.category.name }}
        </span>
        <template v-if="props.showCount">
            <div class="tw-inline-flex tw-justify-center tw-items-center tw-font-extrabold tw-rounded-full tw-aspect-square tw-w-4 tw-h-4 tw-text-[0.5rem]"
                :class="isLightColor(props.category.background_color) ? 'main-bg-3-dark-only' : 'main-bg-3-light-only'"
                :style="`color: ${props.category.background_color};`">
                <span>{{ props.category.articles_count || 0 }}</span>
            </div>
        </template>
    </div>
</template>
