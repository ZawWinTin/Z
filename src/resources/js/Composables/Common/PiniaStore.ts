import { ref } from 'vue';
import { defineStore } from 'pinia';

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
    const isExist = ref<boolean>(false);

    const setReach = (newValue: boolean) => {
        isReached.value = newValue && isExist.value;
    };

    const setShow = (newValue: boolean) => {
        isShow.value = newValue && isExist.value;
    };

    const setExist = (newValue: boolean) => {
        isExist.value = newValue;
    };

    return { isReached, setReach, isShow, setShow, isExist, setExist };
});
