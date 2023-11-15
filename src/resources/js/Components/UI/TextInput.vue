<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: {
        type: String,
        required: true,
    },
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        ref="input"
        class="
            tw-border-slate-300
            dark:focus:tw-border-indigo-600
            dark:focus:tw-ring-indigo-600
            dark:tw-bg-slate-900
            dark:tw-border-slate-700
            dark:tw-text-slate-300
            focus:tw-border-indigo-500
            focus:tw-ring-indigo-500
            tw-rounded-md
            tw-shadow-sm
            "
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>
