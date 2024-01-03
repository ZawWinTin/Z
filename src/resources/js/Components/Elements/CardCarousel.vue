<script setup lang="ts">
import '@egjs/vue3-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/arrow.css';
import '@egjs/flicking-plugins/dist/pagination.css';

import { onMounted, onUnmounted, ref } from 'vue';
import { Arrow, Pagination, Perspective } from '@egjs/flicking-plugins';
import Flicking from '@egjs/vue3-flicking';

const container = ref<HTMLElement | null>(null);
const flicking = ref<Flicking | null>(null);
const flickBullet = () => {
    return `<span class='!tw-bg-slate-300/80 dark:!tw-bg-slate-600/80 flicking-pagination-bullet'></span>`;
};
const flickActiveBullet = () => {
    return `<span class='!tw-bg-primary/80 flicking-pagination-bullet'></span>`;
};

const flickingPlugins = [
    new Perspective({ rotate: -0.5, scale: 0.5, perspective: 600 }),
    new Pagination({
        type: 'scroll',
        renderActiveBullet: flickActiveBullet,
        renderBullet: flickBullet,
    }),
    new Arrow(),
];

const flickingWheelEvent = (event: WheelEvent) => {
    event.preventDefault();
    if (flicking.value?.animating) {
        return;
    }
    const delta = event.deltaY;

    if (Math.abs(delta) > 40) {
        if (delta > 0) {
            flicking.value?.next();
        } else if (delta < 0) {
            flicking.value?.prev();
        }
    }
};

onMounted(() => {
    container.value?.addEventListener('wheel', flickingWheelEvent, {
        passive: false,
    });
});

onUnmounted(() => {
    container.value?.removeEventListener('wheel', flickingWheelEvent);
});
</script>
<template>
    <div ref="container" class="tw-w-full">
        <Flicking
            ref="flicking"
            :options="{ align: 'center', circular: true }"
            class="tw-group/flick tw-w-full tw-pb-6"
            :plugins="flickingPlugins"
        >
            <slot name="content"></slot>
            <template #viewport>
                <div
                    class="flicking-pagination tw-opacity-0 tw-transition tw-duration-300 group-hover/flick:tw-opacity-80"
                ></div>
                <span
                    class="flicking-arrow-prev tw-opacity-0 tw-transition tw-duration-300 before:!tw-bg-primary after:!tw-bg-primary group-hover/flick:tw-opacity-80"
                ></span>
                <span
                    class="flicking-arrow-next tw-opacity-0 tw-transition tw-duration-300 before:!tw-bg-primary after:!tw-bg-primary group-hover/flick:tw-opacity-80"
                ></span>
            </template>
        </Flicking>
    </div>
</template>
