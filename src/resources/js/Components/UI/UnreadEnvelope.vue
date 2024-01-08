<script setup lang="ts">
import { EnvelopeIcon as EnvelopeOutlineIcon } from '@heroicons/vue/24/outline';
import { EnvelopeIcon as EnvelopeSolidIcon } from '@heroicons/vue/24/solid';

import Tooltip from '@/Composables/UI/Elements/Tooltip';
</script>
<template>
    <div
        class="tw-group tw-relative tw-inline-flex tw-cursor-pointer tw-rounded-sm tw-pt-0.5"
        tabindex="0"
        v-tooltip.bottom="{
            value: 'Mark as unread',
            showDelay: 1000,
            pt: Tooltip,
        }"
        @click="$emit('clicked')"
    >
        <EnvelopeOutlineIcon
            class="!ttw-inline-block tw-h-5 tw-w-5 group-hover:!tw-hidden"
        />
        <EnvelopeSolidIcon
            class="!tw-hidden tw-h-5 tw-w-5 group-hover:!tw-inline-block"
        />
        <i
            class="pi pi-circle-fill tw-absolute tw-right-0 tw-top-0 tw-translate-x-[40%] tw-rounded-full tw-border-2 tw-border-slate-100 tw-text-[0.5rem] dark:tw-border-slate-800"
        ></i>
    </div>
</template>
