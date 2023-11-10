<script setup></script>
<style>
.card-container .card {
    position: relative;
    right: 0;
    margin-top: 0;
}

.card-container .card:not(:first-child) {
    margin-right: -5rem;
}

.card-container .card:hover {
    margin-top: -1rem;
    transition: 0.4s ease-out;
}

.card-container .card:hover ~ .card {
    right: 5rem;
}
</style>
<template>
    <div
        class="card-container container tw-flex tw-flex-row-reverse tw-justify-center tw-gap-2 tw-px-24 tw-py-4"
    >
        <slot />
    </div>
</template>
