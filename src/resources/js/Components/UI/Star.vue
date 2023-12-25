<script setup lang="ts">
import Tooltip from '@/Composables/UI/Elements/Tooltip';
import {
    StarIcon as StarSolidIcon,
} from '@heroicons/vue/24/solid';
import {
    StarIcon as StarOutlineIcon,
} from '@heroicons/vue/24/outline';

defineProps<{
    checked: boolean,
}>();
</script>
<template>
    <div class="tw-group tw-cursor-pointer tw-inline-flex tw-rounded-sm" tabindex="0"
        v-tooltip.bottom="{ value: checked ? 'Unset favorite' : 'Set favorite', showDelay: 1000, pt: Tooltip }"
        @click="$emit('clicked')">
        <StarOutlineIcon class="tw-w-5 tw-h-5 group-hover:!tw-hidden"
            :class="checked ? '!tw-hidden' : '!tw-inline-block'" />
        <StarSolidIcon class="tw-w-5 tw-h-5 group-hover:!tw-inline-block"
            :class="checked ? '!tw-inline-block tw-text-primary' : '!tw-hidden'" />
    </div>
</template>
