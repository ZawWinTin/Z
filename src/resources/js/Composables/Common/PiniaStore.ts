import { ref } from 'vue';
import Flicking from '@egjs/vue3-flicking';
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

export const usePreloaderStore = defineStore('preloader', () => {
    const isLoading = ref<boolean>(true);

    const setLoading = (newValue: boolean) => {
        isLoading.value = newValue;
    };

    return { isLoading, setLoading };
});

export const useScrollToTopStore = defineStore('scrollToTop', () => {
    const flicking = ref<Flicking | null>(null);

    const setFlicking = (newFlicking: Flicking | null) => {
        flicking.value = newFlicking;
    };

    return { flicking, setFlicking };
});
// View
export const useAboutViewStore = defineStore('aboutView', () => {
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
