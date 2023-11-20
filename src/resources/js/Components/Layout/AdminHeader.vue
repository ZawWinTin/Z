<script setup>
import AdminMenuButton from '@/Components/Buttons/AdminMenuButton.vue';
import { ref } from 'vue';

const emit = defineEmits(['isMenuCollapse']);
let isMenuCollapse = ref(false);

let toggleAdminMenu = () => {
    isMenuCollapse.value = !isMenuCollapse.value;
    emit('isMenuCollapse', isMenuCollapse.value);
};

</script>
<template>
    <div class="
        tw-absolute
        tw-flex
        tw-flex-col
        tw-left-0
        tw-top-0
        tw-pt-4
        sm:tw-px-4 tw-px-0
        tw-w-full
        tw-duration-300
        tw-pointer-events-none
        tw-z-[90]
    ">
        <!-- Navigation Bar -->
        <div class="tw-container tw-flex tw-items-center tw-justify-between">
            <AdminMenuButton  @click="toggleAdminMenu" :isMenuCollapse="isMenuCollapse" class="tw-pointer-events-auto" />
        </div>
    </div>
</template>