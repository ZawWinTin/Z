import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDarkModeStore = defineStore('darkMode', () => {
    const isDarkMode = ref<boolean>(true);

    const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
    };

    const setDarkMode = (newValue: boolean) => {
        isDarkMode.value = newValue;
    };

    return { isDarkMode, toggleDarkMode, setDarkMode };
});

export const useContactViewStore = defineStore('contactView', () => {
    const isReached = ref<boolean>(false);
    const isShow = ref<boolean>(false);

    const setReach = (newValue: boolean) => {
        isReached.value = newValue;
    };

    const setShow = (newValue: boolean) => {
        isShow.value = newValue;
    };

    return { isReached, setReach, isShow, setShow };
});
