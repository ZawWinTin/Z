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
            tw-duration-300
            tw-ease-in-out
            tw-border-slate-300
            dark:focus:tw-border-primary
            dark:focus:tw-ring-primary
            dark:tw-bg-slate-900
            dark:tw-border-slate-700
            dark:tw-text-slate-300
            focus:tw-border-primary
            focus:tw-ring-primary
            tw-rounded-md
            tw-shadow-sm
            "
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>
