<script setup>
import { onMounted, ref } from 'vue';

let createdDate = moment().format('MMM Do, YYYY');
let imageContainer = ref(null);

onMounted(() => {
    loadImage();
});

let loadImage = () => {
    let uploadImage = new Image();
    uploadImage.src = 'https://picsum.photos/500/300';
    uploadImage.classList.add(
        'tw-absolute',
        'tw-h-full',
        'tw-w-full',
        'tw-rounded-t-lg',
        'tw-object-cover',
    );
    imageContainer.value.appendChild(uploadImage);
};
</script>
<template>
    <a
        href="#"
        class="
            card
            interactable-js
            tw-duration-300
            tw-ease-in-out
            tw-group
            tw-transition-all
            "
    >
        <div
            class="
                tw-h-[17.5rem]
                tw-overflow-hidden
                tw-relative
                tw-rounded-lg
                tw-shadow-[1rem_0_2rem_0_rgba(0,0,0,0.5)]
                tw-w-80
                "
        >
            <div
                ref="imageContainer"
                class="tw-relative tw-h-52 tw-w-full"
            ></div>
            <div
                class="
                    group-hover:tw-translate-y-[-5.5rem]
                    tw-duration-500
                    tw-mt-[-3.3rem]
                    tw-relative
                    tw-transition
                    "
            >
                <div
                    class="
                        card-background
                        tw-absolute
                        dark:tw-bg-slate-900
                        tw-bg-slate-50
                        tw-duration-300
                        tw-ease-in-out
                        tw-rounded-2xl
                        w-full
                        "
                ></div>
                <div class="
                    tw-flex
                    tw-flex-col
                    tw-gap-2
                    tw-p-5
                    tw-relative
                    ">
                    <p
                        class="
                            tw-text-right
                            dark:tw-text-slate-500
                            tw-text-slate-400
                            tw-text-sm
                            "
                    >
                        {{ createdDate }}
                    </p>
                    <h5
                        class="
                            card-title
                            tw-bg-clip-text
                            tw-bg-gradient-to-r
                            tw-font-bold
                            tw-from-indigo-500
                            tw-line-clamp-2
                            tw-text-2xl
                            tw-text-transparent
                            tw-to-primary
                            tw-tracking-tight
                            "
                    >
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p
                        class="
                            tw-line-clamp-3
                            dark:tw-text-slate-400
                            tw-text-justify
                            tw-text-slate-700
                            tw-tracking-tight
                            "
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quae, doloribus, nemo odit quod tempore cum,
                        tempora non ipsum rerum dolore temporibus veritatis enim
                        adipisci est. Nihil molestias voluptas reiciendis
                        voluptate expedita, distinctio aspernatur aut veritatis
                        ad debitis quo ipsa, tenetur delectus quibusdam optio
                        quidem corporis qui, atque doloremque! Molestiae tempore
                        ratione est nulla quae perspiciatis vero, quasi animi,
                        doloribus esse soluta. Quis ducimus quasi deserunt,
                        officia cupiditate explicabo libero magni in harum ab
                        dolorum unde quam corrupti consequatur repudiandae.
                        Numquam officiis recusandae ad impedit. Explicabo
                        repudiandae excepturi voluptas ex id illum nulla, soluta
                        autem, sed temporibus atque numquam iste exercitationem
                        nisi aut amet quis quo deleniti facilis reiciendis quae
                        dolorum aliquam consectetur! Nihil, temporibus
                        doloremque voluptas omnis blanditiis impedit! Facere,
                        natus est labore, cum qui quas perferendis, quia
                        explicabo quibusdam quis hic laudantium. Perferendis
                        error laudantium at non quis suscipit expedita vero
                        voluptate saepe incidunt praesentium provident culpa
                        quasi modi natus tempora ea ipsum facere iste molestiae,
                        aliquid deserunt repudiandae. Illo corrupti in culpa hic
                        quam nostrum aliquam inventore ullam dolores, totam
                        eligendi nemo ipsam voluptatum eos sapiente minima
                        voluptatem, quis alias repellendus omnis commodi! Iusto,
                        amet. Distinctio quam nam, sint odio neque cumque
                        quisquam voluptatem doloribus similique dolorem? Eius?
                    </p>
                </div>
            </div>
        </div>
    </a>
</template>
<style lang="scss" scoped>
.card-background {
    top: 8%;
    left: -43%;
    height: 120%;
    width: 150%;
    transform: skew(19deg, -9deg);
}
</style>
