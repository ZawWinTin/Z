<script setup lang="ts">
import { convertHexToRgba, isLightColor } from '@/Composables/Common/Helper';
import Category from '@/Interfaces/Category';

const props = withDefaults(
    defineProps<{
        category: Category;
        showCount?: boolean;
    }>(),
    {
        showCount: false,
    },
);
</script>
<template>
    <div
        class="tw-inline-flex tw-items-center tw-space-x-1 tw-rounded-full tw-px-2 tw-py-2"
        :style="`background-color: ${convertHexToRgba(
            props.category.background_color,
        )};`"
    >
        <span
            :style="`color: ${props.category.text_color};`"
            class="tw-whitespace-nowrap tw-text-xs tw-font-semibold"
        >
            {{ props.category.name }}
        </span>
        <template v-if="props.showCount">
            <div
                class="tw-inline-flex tw-aspect-square tw-h-4 tw-w-4 tw-items-center tw-justify-center tw-rounded-full tw-text-[0.5rem] tw-font-extrabold"
                :class="
                    isLightColor(props.category.background_color)
                        ? 'main-bg-3-dark-only'
                        : 'main-bg-3-light-only'
                "
                :style="`color: ${props.category.background_color};`"
            >
                <span>{{ props.category.articles_count || 0 }}</span>
            </div>
        </template>
    </div>
</template>
