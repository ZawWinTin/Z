import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAdminMenuStore = defineStore('adminMenu', () => {
    const isAdminMenuCollapse = ref(true);

    const toggleAdminMenu = () => {
        isAdminMenuCollapse.value = !isAdminMenuCollapse.value;
    };

    return { isAdminMenuCollapse, toggleAdminMenu };
});
