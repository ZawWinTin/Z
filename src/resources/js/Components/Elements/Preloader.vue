<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { usePreloaderStore } from '@/Composables/Common/PiniaStore';

const props = withDefaults(
    defineProps<{
        isAdminLayout?: boolean;
    }>(),
    {
        isAdminLayout: false,
    },
);

const preloaderStore = usePreloaderStore();

let process = 1;
let numHeight = 0;
let totalDistance = 0;

const preloader = ref<HTMLElement | null>(null);
const loadingBar = ref<HTMLElement | null>(null);
const loadingBarContainer = ref<HTMLElement | null>(null);
const counterContainer: Record<string, Ref<HTMLElement | null>> = {
    ones: ref<HTMLElement | null>(null),
    tens: ref<HTMLElement | null>(null),
    hundreds: ref<HTMLElement | null>(null),
};

const end = async () => {
    preloaderStore.setLoading(true);
    document.body.classList.add('tw-overflow-hidden');
    await setLoading(100, 250);
    setTimeout(() => {
        const duration = 1000;

        let counterDuration = duration * 0.9;
        for (const key in counterContainer) {
            const counter = counterContainer[key].value as HTMLElement;
            if (counter) {
                (counter.querySelector('.next-js') as Element).textContent =
                    null;
                counter.animate(
                    {
                        transform: `translateY(-${totalDistance}px)`,
                    },
                    {
                        duration: counterDuration,
                        fill: 'forwards',
                    },
                );
                counterDuration *= 0.6;
            }
        }

        const barDuration = duration * 0.5;
        loadingBarContainer.value?.animate(
            {
                width: '14rem',
                transform: 'rotate(125deg)',
            },
            {
                duration: barDuration,
                fill: 'forwards',
            },
        );
        const zBars = preloader.value?.querySelectorAll('.z-bar-js') || [];
        for (let i = 0; i < zBars.length; i++) {
            const bar = zBars[i];
            bar.animate(
                {
                    opacity: 1,
                    transform: 'translateX(0)',
                },
                {
                    duration: barDuration,
                    fill: 'forwards',
                },
            );
        }
        setTimeout(() => {
            const preloaderEndAnimation = preloader.value?.animate(
                {
                    opacity: 0,
                    scale: 100,
                    transform: 'rotate(270deg)',
                },
                {
                    duration: 1000,
                    fill: 'forwards',
                },
            );
            if (preloaderEndAnimation) {
                preloaderStore.setLoading(false);
                preloaderEndAnimation.finished.then(() => {
                    preloader.value?.remove();
                    document.body.classList.remove('tw-overflow-hidden');
                });
            }
        }, duration);
    }, 250);
};

const setLoading = async (steps: number = 40, duration: number = 250) => {
    duration = duration < 250 ? 250 : duration;
    steps = Math.min(Math.max(steps, 0), 100);

    if (steps > 0) {
        const rate = duration / steps;

        for (process; process <= steps; process++) {
            await animateLoading(rate);
        }
    } else {
        resetLoading();
    }
};

const resetLoading = () => {
    for (const key in counterContainer) {
        const counter = counterContainer[key].value as HTMLElement;
        (counter.querySelector('.current-js') as Element).textContent = '0';
        (counter.querySelector('.next-js') as Element).textContent = '1';
    }
    loadingBar.value?.animate(
        {
            width: `0%`,
        },
        {
            duration: 250,
            fill: 'forwards',
        },
    );
};

const animateLoading = async (rate: number, decimal: number = 0) => {
    return new Promise<void>(resolve => {
        const counter = Object.values(counterContainer)[decimal]
            .value as HTMLElement;
        if (!counter) {
            resolve();
            return;
        }

        if (numHeight == 0) {
            numHeight = (counter.querySelector('div') as Element).clientHeight;
        }
        if (totalDistance == 0) {
            totalDistance =
                (counter.querySelectorAll('div').length - 1) * numHeight;
        }

        const nextNum = parseInt(
            (counter.querySelector('.next-js') as Element).textContent || '',
        );

        if (nextNum == 0) {
            animateLoading(rate, decimal + 1);
        }

        const counterAnimation = counter.animate(
            {
                transform: `translateY(-${totalDistance}px)`,
            },
            {
                duration: rate,
            },
        );

        if (decimal == 0) {
            loadingBar.value?.animate(
                {
                    width: `${process}%`,
                },
                {
                    duration: rate,
                    fill: 'forwards',
                },
            );
        } else {
            resolve();
        }
        counterAnimation.finished.then(() => {
            (counter.querySelector('.current-js') as Element).textContent =
                nextNum.toString();
            (counter.querySelector('.next-js') as Element).textContent = (
                (nextNum + 1) %
                10
            ).toString();

            if (decimal == 0) {
                resolve();
            }
        });
    });
};

onMounted(() => end());
// router.on('start', () => {
//     start();
// });
// router.on('progress', (event) => {
//     console.log(event.detail.progress.percentage);
//     progress((event.detail.progress.percentage / 100) * 0.9);
// });
// router.on('finish', (event) => {
//     if (!isPreloaderStarted.value) {
//         return;
//     } else if (event.detail.visit.completed) {
//         finish();
//   } else if (event.detail.visit.interrupted) {
//         setLoading(0);
//   } else if (event.detail.visit.cancelled) {
//         finish();
//         end();
//   }
// });
</script>
<template>
    <div
        ref="preloader"
        class="main-bg-1-dark-only tw-fixed tw-z-[99] tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center tw-overflow-hidden tw-transition tw-duration-300 tw-ease-in-out"
    >
        <!-- Loading Bar -->
        <div
            ref="loadingBarContainer"
            class="main-bg-3-dark-only tw-h-12 tw-w-80"
        >
            <div
                ref="loadingBar"
                class="main-bg-3-light-only tw-h-full tw-w-0"
            ></div>
        </div>
        <div
            class="z-bar-js main-bg-3-light-only tw-absolute tw-mt-[12.75rem] tw-h-12 tw-w-[10.5rem] tw-translate-x-[60vw] tw-opacity-0"
        >
            <template v-if="props.isAdminLayout">
                <span
                    class="tw-absolute tw-bottom-0 tw-right-5 tw-mb-[-0.6rem] tw-text-lg tw-font-semibold tw-uppercase tw-italic tw-text-slate-950"
                >
                    Admin
                </span>
            </template>
        </div>
        <div
            class="z-bar-js main-bg-3-light-only tw-absolute tw-mt-[-12.75rem] tw-h-12 tw-w-[10.5rem] tw-translate-x-[-60vw] tw-opacity-0"
        ></div>

        <!-- Counter -->
        <div
            class="counter tw-fixed tw-bottom-4 tw-left-4 tw-flex tw-select-none tw-flex-row-reverse tw-font-mono tw-text-7xl tw-font-bold tw-text-slate-50"
        >
            <div :ref="counterContainer.ones">
                <div class="current-js">0</div>
                <div class="next-js">1</div>
            </div>
            <div :ref="counterContainer.tens">
                <div class="current-js">0</div>
                <div class="next-js">1</div>
            </div>
            <div :ref="counterContainer.hundreds">
                <div class="current-js">0</div>
                <div class="next-js">1</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.counter {
    height: 1em;
    clip-path: polygon(0 0, 100% 0, 100% 1em, 0 1em);
}
</style>
