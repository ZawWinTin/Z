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

onMounted(() => {
    window.onmousemove = event => {
        updateCursor(event);
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
</script>
<template>
    <div
        id="cursor"
        class="tw-opacity-1 tw-pointer-events-none tw-fixed tw-flex tw-h-3 tw-w-3 tw-select-none tw-items-center tw-justify-center tw-rounded-full tw-bg-white tw-p-1 tw-shadow-lg tw-transition-opacity tw-duration-500"
    >
        <span class="tw-text-center tw-text-[2px] tw-font-extrabold"></span>
    </div>
</template>
