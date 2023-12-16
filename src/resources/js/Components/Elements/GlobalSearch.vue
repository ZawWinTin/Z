<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { watch } from 'vue';

const props = defineProps<{
    show: {
        type: Boolean,
        default: false,
    },
}>();

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
        class="tw-fixed tw-inset-0 tw-w-screen tw-h-screen main-bg-1-dark-only !tw-bg-opacity-40 tw-flex tw-flex-col tw-justify-center"
        v-show="props.show"
    >
        <span class="p-input-icon-left">
            <i
                class="pi pi-search tw-left-3 main-text"
            />
            <InputText
                class="tw-pl-10"
                placeholder="Search"
            />
        </span>
    </div>
</template>
