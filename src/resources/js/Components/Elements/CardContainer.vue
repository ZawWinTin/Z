<script setup></script>
<template>
    <div
        class="
            card-container
            tw-flex
            tw-flex-row-reverse
            tw-gap-2
            tw-justify-center
            tw-px-24
            tw-py-4
            "
    >
        <slot />
    </div>
</template>
<style lang="scss">
.card-container {
    .card {
        position: relative;
        right: 0;
        margin-top: 0;

        &:not(:first-child) {
            margin-right: -5rem;
        }

        &:hover {
            margin-top: -1rem;
            transition: 0.4s ease-out;
        }

        &:hover ~ .card {
            right: 5rem;
        }
    }
}
</style>
