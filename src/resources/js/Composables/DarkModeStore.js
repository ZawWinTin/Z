import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDarkModeStore = defineStore('darkMode', () => {
    const isDarkMode = ref(true);

    const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
    };

    const setDarkMode = newValue => {
        isDarkMode.value = newValue;
    };

    return { isDarkMode, toggleDarkMode, setDarkMode };
});
