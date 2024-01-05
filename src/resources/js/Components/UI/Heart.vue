<script setup lang="ts">
import { HeartIcon as HeartOutlineIcon } from '@heroicons/vue/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/vue/24/solid';

import Tooltip from '@/Composables/UI/Elements/Tooltip';

defineProps<{
    checked: boolean;
}>();
</script>
<template>
    <div
        class="tw-group tw-inline-flex tw-cursor-pointer tw-rounded-sm"
        tabindex="0"
        v-tooltip.bottom="{
            value: checked ? 'Unset favorite' : 'Set favorite',
            showDelay: 1000,
            pt: Tooltip,
        }"
        @click="$emit('clicked')"
    >
        <HeartOutlineIcon
            class="tw-h-5 tw-w-5 group-hover:!tw-hidden"
            :class="checked ? '!tw-hidden' : '!tw-inline-block'"
        />
        <HeartSolidIcon
            class="tw-h-5 tw-w-5 group-hover:!tw-inline-block"
            :class="
                checked ? '!tw-inline-block !tw-text-[#D4004A]' : '!tw-hidden'
            "
        />
    </div>
</template>
