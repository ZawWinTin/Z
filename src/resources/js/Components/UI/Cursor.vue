<script setup>
import { onMounted } from 'vue';
const { gsap, CircleType } = window;

let cursor = null;
let mouseX = 0;
let mouseY = 0;
let interactable = null;
let isInteracting = false;
let keyframes = {};
let cursorText = '';

let cursorLight = null;
let lightX = 0;
let lightY = 0;

onMounted(() => {
    window.onmousemove = event => {
        updateCursor(event);
        updateCursorLight(event);
    };
});

let updateCursor = event => {
    interactable = event.target.closest('.interactable-js');
    isInteracting = interactable !== null;

    cursor = document.getElementById('cursor');
    mouseX = event.clientX - cursor.offsetWidth / 2;
    mouseY = event.clientY - cursor.offsetHeight / 2;

    keyframes = {
        transform: `translate(${mouseX}px, ${mouseY}px) scale(${
            isInteracting ? 8 : 1
        })`,
        opacity: isInteracting ? '1' : '0',
    };
    cursor.animate(keyframes, {
        duration: 800,
        fill: 'forwards',
    });

    cursorText = cursor.querySelector('span');
    cursorText.textContent = isInteracting
        ? getCursorText(interactable.dataset.cursorType)
        : '';
};

let getCursorText = type => {
    let updatedCursorText = '';
    switch (type) {
        case 'project':
            updatedCursorText = 'View Project';
            break;
        case 'link':
            updatedCursorText = 'Open Link';
            break;
    }

    return updatedCursorText;
};

let updateCursorLight = event => {
    cursorLight = document.getElementById('cursor-light');
    lightX = event.clientX - cursorLight.offsetWidth / 2;
    lightY = event.clientY - cursorLight.offsetHeight / 2;

    cursorLight.animate(
        {
            left: `${lightX}px`,
            top: `${lightY}px`,
        },
        {
            duration: 10000,
            fill: 'forwards',
        },
    );
};
</script>
<style lang="scss" scoped>
#cursor-light {
    animation: rotate 20s infinite;
}

body:hover #cursor-light {
    opacity: 0.6;
}

@keyframes rotate {
    from {
        rotate: 0deg;
    }
    50% {
        scale: 1 1.35;
    }
    to {
        rotate: 360deg;
    }
}
</style>
<template>
    <div class="tw-absolute">
        <div
            id="cursor-light"
            class="tw-pointer-events-none tw-fixed tw-left-1/2 tw-top-1/2 tw-aspect-square tw-w-2/5 tw-select-none tw-rounded-full tw-bg-white tw-bg-gradient-to-r tw-from-indigo-500 tw-to-primary tw-opacity-0 tw-blur-3xl tw-transition-opacity tw-duration-500"
        ></div>
        <div class="tw-fixed tw-h-full tw-w-full tw-backdrop-blur-3xl"></div>
        <div
            id="cursor"
            class="tw-pointer-events-none tw-fixed tw-z-10 tw-flex tw-h-3 tw-w-3 tw-select-none tw-items-center tw-justify-center tw-rounded-full tw-bg-gray-800/90 tw-p-1 tw-text-white tw-opacity-0 tw-shadow-lg tw-transition-opacity tw-duration-500 dark:tw-bg-white/90 dark:tw-text-black"
        >
            <span class="tw-text-center tw-text-[2px] tw-font-extrabold"></span>
        </div>
    </div>
</template>
