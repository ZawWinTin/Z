import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAdminMenuStore = defineStore('adminMenu', () => {
    const isAdminMenuCollapse = ref(true);

    const toggleAdminMenu = () => {
        isAdminMenuCollapse.value = !isAdminMenuCollapse.value;
    };

    return { isAdminMenuCollapse, toggleAdminMenu };
});
