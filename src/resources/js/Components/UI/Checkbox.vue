<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:checked']);

const props = defineProps({
    checked: {
        type: [Array, Boolean],
        required: true,
    },
    value: {
        default: null,
    },
});

const proxyChecked = computed({
    get() {
        return props.checked;
    },

    set(val) {
        emit('update:checked', val);
    },
});
</script>

<template>
    <input
        v-model="proxyChecked"
        type="checkbox"
        :value="value"
        class="
            tw-border-slate-300
            dark:focus:tw-ring-indigo-600
            dark:focus:tw-ring-offset-slate-800
            dark:tw-bg-slate-900
            dark:tw-border-slate-700
            focus:tw-ring-indigo-500
            tw-rounded
            tw-shadow-sm
            tw-text-indigo-600
            "
    />
</template>
