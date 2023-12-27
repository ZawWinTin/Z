<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    window.addEventListener('mousemove', (event: MouseEvent) => {
        updateCursor(event);
        updateCursorLight(event);
    });
});

onUnmounted(() => {
    window.removeEventListener('mousemove', (event: MouseEvent) => {
        updateCursor(event);
        updateCursorLight(event);
    });
});

const updateCursor = (event: MouseEvent) => {
    const cursor = document.getElementById('cursor');

    if (!cursor) {
        return;
    }

    const interactable = (event.target as HTMLElement).closest(
        '.interactable-js',
    ) as HTMLElement;
    const isInteracting = interactable !== null;

    const mouseX = event.clientX - cursor.offsetWidth / 2;
    const mouseY = event.clientY - cursor.offsetHeight / 2;

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

    const cursorText = cursor.querySelector('span');
    if (cursorText) {
        cursorText.textContent = isInteracting
            ? getCursorText(interactable.dataset.cursorType)
            : '';
    }
};

const getCursorText = (type?: string) => {
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

const updateCursorLight = (event: MouseEvent) => {
    const cursorLight = document.getElementById('cursor-light');

    if (!cursorLight) {
        return;
    }

    const lightX = event.clientX - cursorLight.offsetWidth / 2;
    const lightY = event.clientY - cursorLight.offsetHeight / 2;

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
            class="main-bg-gradient tw-pointer-events-none tw-fixed tw-left-1/2 tw-top-1/2 tw-aspect-square tw-w-2/5 tw-select-none tw-rounded-full tw-bg-slate-50 tw-opacity-0 tw-blur-3xl tw-transition-opacity tw-duration-500"
        ></div>
        <div
            class="tw-fixed tw-inset-0 tw-h-full tw-w-full tw-backdrop-blur-3xl"
        ></div>
        <div
            id="cursor"
            class="tw-pointer-events-none tw-fixed tw-left-0 tw-top-0 tw-z-10 tw-flex tw-h-3 tw-w-3 tw-select-none tw-items-center tw-justify-center tw-rounded-full tw-bg-slate-800/90 tw-p-1 tw-text-slate-50 tw-opacity-0 tw-shadow-lg tw-transition-opacity tw-duration-500 dark:tw-bg-slate-50/90 dark:tw-text-slate-950"
        >
            <span class="tw-text-center tw-text-[2px] tw-font-extrabold"></span>
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
