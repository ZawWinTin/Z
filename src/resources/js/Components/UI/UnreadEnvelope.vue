<script setup lang="ts">
import Tooltip from '@/Composables/UI/Elements/Tooltip';
import {
    EnvelopeIcon as EnvelopeSolidIcon,
} from '@heroicons/vue/24/solid';
import {
    EnvelopeIcon as EnvelopeOutlineIcon,
} from '@heroicons/vue/24/outline';
</script>
<template>
    <div class="tw-group tw-cursor-pointer tw-inline-flex tw-rounded-sm tw-relative tw-pt-0.5" tabindex="0"
        v-tooltip.bottom="{ value: 'Mark as unread', showDelay: 1000, pt: Tooltip }"
        @click="$emit('clicked')">
        <EnvelopeOutlineIcon class="tw-w-5 tw-h-5 group-hover:!tw-hidden !ttw-inline-block" />
        <EnvelopeSolidIcon class="tw-w-5 tw-h-5 group-hover:!tw-inline-block !tw-hidden" />
        <i class="pi pi-circle-fill
            tw-absolute
            tw-border-2
            tw-rounded-full
            tw-top-0
            tw-right-0
            tw-translate-x-[40%]
            tw-border-slate-100
            dark:tw-border-slate-800
            tw-text-[0.5rem]"></i>
    </div>
</template>
