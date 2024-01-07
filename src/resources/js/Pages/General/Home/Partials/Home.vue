<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Scene } from 'vue-scenejs';

const props = defineProps<{
    name: string;
}>();

const content = [' love to', ' am passionate to'];
const contentIndex = ref<number>(0);

const currentText = ref<string>('');
const currentTextIndex = ref<number>(0);

const typingSpeed = 150;
const erasingSpeed = 100;
const waitingSpeed = 1200;

const isWaiting = ref<boolean>(true);

const typingEffect = () => {
    setTimeout(() => {
        if (currentTextIndex.value < content[contentIndex.value].length) {
            isWaiting.value = false;
            currentTextIndex.value = currentTextIndex.value + 1;
            currentText.value = content[contentIndex.value].substring(
                0,
                currentTextIndex.value,
            );
            typingEffect();
        } else {
            isWaiting.value = true;
            currentTextIndex.value = 0;
            setTimeout(() => {
                erasingEffect();
            }, waitingSpeed);
        }
    }, typingSpeed);
};

const erasingEffect = () => {
    setTimeout(() => {
        if (currentText.value.length > 0) {
            isWaiting.value = false;
            currentText.value = currentText.value.slice(0, -1);
            erasingEffect();
        } else {
            isWaiting.value = true;
            updateContentIndex();
            typingEffect();
        }
    }, erasingSpeed);
};

const setTypeWriterEffect = () => {
    if (currentText.value) {
        erasingEffect();
    } else {
        typingEffect();
    }
};

const updateContentIndex = () => {
    contentIndex.value = (contentIndex.value + 1) % content.length;
};

const animateScroll = () => {
    new Scene(
        {
            '.scroll': {
                0: {
                    transform: 'translate(-50%, -90px)',
                    height: '0px',
                },
                0.5: {
                    height: '30px',
                },
                1: {
                    height: '0px',
                    transform: 'translate(-50%, 0px)',
                },
            },
        },
        {
            selector: true,
            easing: 'ease-in-out',
            iterationCount: 'infinite',
        },
    ).playCSS();
};

onMounted(() => {
    setTypeWriterEffect();
    animateScroll();
});
</script>
<template>
    <div class="tw-container tw-relative tw-flex tw-h-screen tw-items-center">
        <div class="tw-text-start">
            <h1
                class="main-text-for-input tw-select-none tw-text-6xl tw-font-bold tw-transition tw-duration-300"
            >
                Hi, I'm
                <span class="tw-select-all tw-text-primary tw-text-nowrap">{{
                    props.name
                }}</span
                >.
            </h1>
            <span
                class="main-text-for-input tw-select-none tw-text-4xl tw-opacity-90 tw-transition tw-duration-300"
            >
                <span>I</span>
                <span>{{ currentText }}</span>
                <span
                    class="cursor"
                    :class="{ 'cursor-blink': isWaiting }"
                ></span>
                <span>&nbsp;develop web applications.</span>
            </span>
        </div>
        <div
            class="scroll tw-absolute tw-bottom-[5%] tw-left-1/2 tw-h-2.5 tw-w-0.5 tw-translate-x-[-50%] tw-bg-primary/80"
        ></div>
    </div>
</template>
<style lang="scss">
.cursor {
    display: inline-block;
    vertical-align: middle;
    width: 3px;
    height: 1.25em;
    background-color: theme('colors.primary.DEFAULT');
    transform: rotate(2.5deg);
}
.cursor-blink {
    animation: blink 800ms ease-out infinite;
}
@keyframes blink {
    from,
    to {
        background-color: transparent;
    }
    50% {
        background-color: theme('colors.primary.DEFAULT');
    }
}
</style>
