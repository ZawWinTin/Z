<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';

import { useDarkModeStore } from '@/Composables/Common/PiniaStore';
import { Theme } from '@/Constants/Theme';

const darkModeStore = useDarkModeStore();

const faviconPathPattern = /light|dark/g;

onMounted(() => {
    initializeThemeMode();
});

onUpdated(() => {
    initializeThemeMode();
});

const initializeThemeMode = () => {
    if (
        localStorage.theme === Theme.DARK_MODE ||
        (!(Theme.THEME_KEY in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        toggleThemeMode(Theme.DARK_MODE);
    } else {
        toggleThemeMode(Theme.LIGHT_MODE);
    }
};

const toggleThemeMode = (
    mode: string = '',
    event: MouseEvent | null = null,
) => {
    if (event) {
        event.stopPropagation();
    }
    let setMode =
        localStorage.theme === Theme.DARK_MODE
            ? Theme.LIGHT_MODE
            : Theme.DARK_MODE;
    if (mode) {
        setMode = mode;
    }

    const favicon = document.getElementById('favicon') as HTMLAnchorElement;
    const faviconPath = favicon.href;

    localStorage.theme = setMode;
    if (setMode === Theme.DARK_MODE) {
        document.documentElement.classList.add(Theme.DARK_MODE);
        darkModeStore.setDarkMode(true);
        favicon.href = faviconPath.replace(faviconPathPattern, 'dark');
    } else {
        document.documentElement.classList.remove(Theme.DARK_MODE);
        darkModeStore.setDarkMode(false);
        favicon.href = faviconPath.replace(faviconPathPattern, 'light');
    }
};
</script>
<template>
    <div
        class="focus:main-primary-focus tw-relative tw-h-[16em] tw-w-[30em] tw-cursor-pointer tw-rounded-full tw-text-[12%] tw-transition-all tw-duration-500 tw-ease-in-out"
        tabindex="0"
        :class="darkModeStore.isDarkMode ? 'night-mode' : 'day-mode'"
        @click="toggleThemeMode('', $event)"
    >
        <span
            class="tw-absolute tw-rounded-full tw-transition-all tw-duration-500 tw-ease-in-out"
        ></span>
    </div>
</template>
<style lang="scss" scoped>
.day-mode {
    background-image: linear-gradient(90deg, #ffa670, #ffe370);

    span {
        top: 4.5em;
        left: 18em;
        transform: rotate(0deg);
        width: 7em;
        height: 7em;
        background: #fff;
        box-shadow:
            3em 3em 0 5em #fff inset,
            0 -5em 0 -2.7em #fff,
            3.5em -3.5em 0 -3em #fff,
            5em 0 0 -2.7em #fff,
            3.5em 3.5em 0 -3em #fff,
            0 5em 0 -2.7em #fff,
            -3.5em 3.5em 0 -3em #fff,
            -5em 0 0 -2.7em #fff,
            -3.5em -3.5em 0 -3em #fff;
    }
}
.night-mode {
    background: linear-gradient(90deg, #5f3966, #393f66);

    span {
        top: 3em;
        left: 3em;
        transform: rotate(-75deg);
        width: 10em;
        height: 10em;
        background: transparent;
        box-shadow:
            3em 2.5em 0 0em #d9fbff inset,
            rgba(255, 255, 255, 0.1) 0em -7em 0 -4.5em,
            rgba(255, 255, 255, 0.1) 3em 7em 0 -4.5em,
            rgba(255, 255, 255, 0.1) 2em 13em 0 -4em,
            rgba(255, 255, 255, 0.1) 6em 2em 0 -4.1em,
            rgba(255, 255, 255, 0.1) 8em 8em 0 -4.5em,
            rgba(255, 255, 255, 0.1) 6em 13em 0 -4.5em,
            rgba(255, 255, 255, 0.1) -4em 7em 0 -4.5em,
            rgba(255, 255, 255, 0.1) -1em 10em 0 -4.5em;
    }
}
</style>
