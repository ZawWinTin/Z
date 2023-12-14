<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    isAdminLayout: {
        default: false,
    },
})

let process = 1;
let numHeight = 0;
let totalDistance = 0;

let preloader = ref(null);
let loadingBar = ref(null);
let loadingBarContainer = ref(null);
let counterContainer = {
    ones : ref(null),
    tens : ref(null),
    hundreds : ref(null),
};

let end = async () => {
    document.querySelector('body').classList.add('tw-overflow-hidden');
    await setLoading(100, 250);
    setTimeout(() => {
        let duration = 1000;

        let counterDuration = duration * 0.9;
        for (let key in counterContainer) {
            let counter = counterContainer[key].value;
            counter.querySelector('.next-js').textContent = null;
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
        };

        let barDuration = duration * 0.5;
        loadingBarContainer.value.animate(
            {
                width: '14rem',
                transform: 'rotate(125deg)'
            },
            {
                duration: barDuration,
                fill: 'forwards'
            },
        );
        let zBars = preloader.value.querySelectorAll('.z-bar-js');
        for (let i = 0; i < zBars.length; i++) {
            let bar = zBars[i];
            bar.animate(
                {
                    opacity: 1,
                    transform: 'translateX(0)'
                },
                {
                    duration: barDuration,
                    fill: 'forwards'
                },
            );
        }
        setTimeout(() => {
            let preloaderEndAnimation = preloader.value.animate(
                {
                    opacity: 0,
                    scale: 100,
                    transform: 'rotate(270deg)'
                },
                {
                    duration: 1000,
                    fill: 'forwards',
                },
            );
            preloaderEndAnimation.finished.then(() => {
                preloader.value.remove();
                document.querySelector('body').classList.remove('tw-overflow-hidden');
            });
        }, duration)
    }, 250);
};

let setLoading = async (steps = 40, duration = 250) => {
    duration = (duration < 250) ? 250 : duration;
    steps = Math.min(Math.max(steps, 0), 100);

    if (steps > 0) {
        let rate = duration / steps;

        for (process; process <= steps; process++) {
            await animateLoading(rate);
        }
    } else {
        resetLoading();
    }
};

let resetLoading = () => {
    for (let key in counterContainer) {
        let counter = counterContainer[key].value;
        counter.querySelector('.current-js').textContent = 0;
        counter.querySelector('.next-js').textContent = 1;
    }
    loadingBar.value.animate(
        {
            width: `0%`,
        },
        {
            duration: 250,
            fill: 'forwards',
        },
    );
};

let animateLoading = async (rate, decimal = 0) => {
    return new Promise(resolve => {
        let counter = Object.values(counterContainer)[decimal].value;
        if (!counter) {
            resolve();
            return;
        }

        if (numHeight == 0) {
            numHeight = counter.querySelector('div').clientHeight;
        }
        if (totalDistance == 0) {
            totalDistance =
                (counter.querySelectorAll('div').length - 1) * numHeight;
        }

        let nextNum = parseInt(counter.querySelector('.next-js').textContent);

        if (nextNum == 0) {
            animateLoading(rate, decimal + 1);
        }

        let counterAnimation = counter.animate(
            {
                transform: `translateY(-${totalDistance}px)`,
            },
            {
                duration: rate,
            },
        );

        if (decimal == 0) {
            loadingBar.value.animate(
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
            counter.querySelector('.current-js').textContent = nextNum;
            counter.querySelector('.next-js').textContent = (nextNum + 1) % 10;

            if (decimal == 0) {
                resolve();
            }
        });
    });
};

onMounted(() => end())
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
    <div ref="preloader" class="main-bg-1-dark-only tw-w-full tw-h-full tw-fixed tw-z-[99] tw-transition tw-ease-in-out tw-duration-300 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
        <!-- Loading Bar -->
        <div ref="loadingBarContainer"
            class="main-bg-3-dark-only tw-w-80 tw-h-12"
        >
            <div
                ref="loadingBar"
                class="main-bg-3-light-only tw-w-0 tw-h-full"
            ></div>
        </div>
        <div class="z-bar-js tw-absolute tw-translate-x-[60vw] tw-mt-[12.75rem] main-bg-3-light-only tw-w-[10.5rem] tw-h-12 tw-opacity-0">
            <template v-if="props.isAdminLayout">
                <span class="tw-italic tw-text-slate-950 tw-font-semibold tw-absolute tw-right-5 tw-bottom-0 tw-mb-[-0.6rem] tw-text-lg tw-uppercase">
                    Admin
                </span>
            </template>
        </div>
        <div class="z-bar-js tw-absolute tw-translate-x-[-60vw] tw-mt-[-12.75rem] main-bg-3-light-only tw-w-[10.5rem] tw-h-12 tw-opacity-0"></div>

        <!-- Counter -->
        <div
            class="counter tw-flex tw-flex-row-reverse tw-text-7xl tw-select-none tw-fixed tw-left-4 tw-bottom-4 tw-font-bold tw-text-slate-50 tw-font-mono"
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
