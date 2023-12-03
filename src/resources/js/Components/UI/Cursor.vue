<script setup>
import { onMounted } from 'vue';

let cursor = null;
let mouseX = 0;
let mouseY = 0;
let interactable = null;
let isInteracting = false;
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
    cursor = document.getElementById('cursor');

    if (!cursor) {
        return;
    }

    interactable = event.target.closest('.interactable-js');
    isInteracting = interactable !== null;

    mouseX = event.clientX - cursor.offsetWidth / 2;
    mouseY = event.clientY - cursor.offsetHeight / 2;

    cursor.animate(
        {
            left: `${mouseX}px`,
            top: `${mouseY}px`,
            scale: isInteracting ? 8 : 1,
            opacity: isInteracting ? '1' : '0',
        },
        {
            duration: 800,
            fill: 'forwards',
        },
    );

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
        case 'explore':
            updatedCursorText = 'Explore';
            break;
        case 'link':
            updatedCursorText = 'Open Link';
            break;
    }

    return updatedCursorText;
};

let updateCursorLight = event => {
    cursorLight = document.getElementById('cursor-light');

    if (!cursorLight) {
        return;
    }

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
<template>
    <div class="tw-absolute">
        <div
            id="cursor-light"
            class="
                tw-aspect-square
                tw-bg-gradient-to-r
                tw-bg-slate-50
                tw-blur-3xl
                tw-duration-500
                tw-fixed
                tw-from-indigo-500
                tw-left-1/2
                tw-opacity-0
                tw-pointer-events-none
                tw-rounded-full
                tw-select-none
                tw-to-primary
                tw-top-1/2
                tw-transition-opacity
                tw-w-2/5
                "
        ></div>
        <div class="tw-backdrop-blur-3xl tw-fixed tw-h-full tw-w-full tw-inset-0"></div>
        <div
            id="cursor"
            class="
                tw-bg-slate-800/90
                dark:tw-bg-slate-50/90
                dark:tw-text-slate-950
                tw-duration-500
                tw-fixed
                tw-flex
                tw-h-3
                tw-items-center
                tw-justify-center
                tw-left-0
                tw-opacity-0
                tw-p-1
                tw-pointer-events-none
                tw-rounded-full
                tw-select-none
                tw-shadow-lg
                tw-text-slate-50
                tw-top-0
                tw-transition-opacity
                tw-w-3
                tw-z-10
                "
        >
            <span class="
                tw-font-extrabold
                tw-text-[2px]
                tw-text-center
                "></span>
        </div>
    </div>
</template>
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
