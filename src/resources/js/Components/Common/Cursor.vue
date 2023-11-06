<script setup>
import { onMounted } from 'vue';
const { gsap, CircleType } = window;

let posX = 0;
let posY = 0;
let mouseX = 0;
let mouseY = 0;
onMounted(() => {
    $(document).on('mousemove', updateCursorPosition);
});

let updateCursorPosition = event => {
    let cursor = $('#cursor');
    let cursorFollower = document.getElementById('cursor-follower');

    mouseX = event.pageX;
    mouseY = event.pageY;

    cursor.css('left', mouseX + 'px');
    cursor.css('top', mouseY + 'px');

    // gsap.to(cursorFollower, {
    //     duration: 0.15,
    //     x: mouseX,
    //     y: mouseY
    // });
};
</script>
<style scoped>
#cursor {
    position: absolute;
    border-radius: 100%;
    z-index: 1;
    transition:
        0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
    user-select: none;
    pointer-events: none;
    transform: scale(0.8);
}

#cursor::before {
    /* content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-image: url("http://mirkozeppieri.emanuelepapale.com/wp-content/uploads/2018/07/project-hover-cursor.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    opacity: 0; */
}

#cursor.active {
    opacity: 1;
    transform: scale(12);
}

#cursor.active::before {
    opacity: 1;
}

#cursor-follower {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    z-index: 1;
    transition:
        0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.4s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
    user-select: none;
    pointer-events: none;
    transform: translate(4px, 4px);
}

#cursor-follower.active {
    opacity: 0.3;
    transform: scale(0);
}
</style>
<template>
    <div>
        <div id="cursor" class="absolute h-3 w-3 border-2 border-black/70 bg-white"></div>
        <div id="cursor-follower" class="bg-primary/60"></div>
    </div>
</template>
