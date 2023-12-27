<script setup lang="ts">
import { watch } from 'vue';
import InputText from 'primevue/inputtext';

const props = withDefaults(
    defineProps<{
        show: boolean;
    }>(),
    {
        show: false,
    },
);

watch(
    () => props.show,
    () => {
        if (props.show) {
            document.body.classList.add('tw-overflow-hidden');
        } else {
            document.body.classList.remove('tw-overflow-hidden');
        }
    },
);
</script>
<template>
    <div
        class="main-bg-1-dark-only tw-fixed tw-inset-0 tw-flex tw-h-screen tw-w-screen tw-flex-col tw-justify-center !tw-bg-opacity-40"
        v-show="props.show"
    >
        <span class="p-input-icon-left">
            <i class="pi pi-search main-text tw-left-3" />
            <InputText class="tw-pl-10" placeholder="Search" />
            //TODO:
        </span>
    </div>
</template>
