<script setup>
import { onMounted } from 'vue';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const THEME_KEY = 'theme';
onMounted(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
        localStorage.theme === DARK_MODE ||
        (!(THEME_KEY in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        toggleThemeMode(DARK_MODE);
    } else {
        toggleThemeMode(LIGHT_MODE);
    }
});

const toggleThemeMode = (mode = '') => {
    let setMode = localStorage.theme === DARK_MODE ? LIGHT_MODE : DARK_MODE;
    if (mode) {
        setMode = mode;
    }

    localStorage.theme = setMode;
    if (setMode === DARK_MODE) {
        document.documentElement.classList.add(DARK_MODE);
        $('#dark-mode-toggle-btn').removeClass('day-mode');
        $('#dark-mode-toggle-btn').addClass('night-mode');
    } else {
        document.documentElement.classList.remove(DARK_MODE);
        $('#dark-mode-toggle-btn').removeClass('night-mode');
        $('#dark-mode-toggle-btn').addClass('day-mode');
    }
};
</script>
<style scoped>
.day-mode {
    background-image: linear-gradient(90deg, #ffa670, #ffe370);
}
.night-mode {
    background: linear-gradient(90deg, #393f66, #5f3966);
}
.day-mode span {
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
.night-mode span {
    top: 3em;
    left: 3em;
    transform: rotate(-75deg);
    width: 10em;
    height: 10em;
    background: #423966;
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
</style>
<template>
    <div
        id="dark-mode-toggle-btn"
        @click="toggleThemeMode()"
        class="relative h-[16em] w-[30em] rounded-full text-[12%] transition-all duration-500 ease-in-out"
    >
        <span class="absolute rounded-full transition-all duration-500 ease-in-out"></span>
    </div>
</template>
