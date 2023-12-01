<script setup>
import { convertHexToRgba, isLightColor } from '@/Composables/Common';

const props = defineProps({
    content: null,
    textColor: null,
    backgroundColor: null,
    value: null,
});
</script>
<template>
    <div
        class="tw-inline-flex tw-items-center tw-px-2 tw-py-2 tw-rounded-full tw-space-x-1"
        :style="`background-color: ${convertHexToRgba(
            props.backgroundColor,
        )};`"
    >
        <span :style="`color: ${props.textColor};`" class="tw-text-xs tw-font-semibold tw-whitespace-nowrap">{{ props.content }}</span>
        <template v-if="!(!props.value && props.value !== 0)">
            <div class="tw-inline-flex tw-justify-center tw-items-center tw-font-extrabold tw-rounded-full tw-aspect-square tw-w-4 tw-h-4 tw-text-[0.5rem]"
            :class="isLightColor(props.backgroundColor) ? 'tw-bg-slate-900' : 'tw-bg-slate-50'"
            :style="`color: ${props.backgroundColor};`">
                <span>{{ props.value }}</span>
            </div>
        </template>
    </div>
</template>
