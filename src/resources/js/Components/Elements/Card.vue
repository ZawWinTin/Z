<style scoped>
.card-background {
    top: 35%;
    left: -35%;
    height: 100%;
    width: 150%;
    transform: skew(19deg, -9deg);
}

.card-title {
    width: 65%;
    left: 30%;
    bottom: 45%;
}
/* background-image: linear-gradient(0deg , #3f5efb, #fc466b); */
</style>
<template>
    <a href="#" class="card interactable-js tw-transition-all tw-duration-300 tw-ease-in-out">
        <div
            class="tw-relative tw-w-80 tw-overflow-hidden tw-rounded-lg tw-bg-white tw-shadow-[1rem_0_2rem_0_rgba(0,0,0,0.5)]"
        >
            <div class="tw-h-1/2 tw-w-full">
                <img
                    class="tw-h-full tw-w-full tw-rounded-t-lg tw-object-cover"
                    src="https://picsum.photos/500/300"
                    alt=""
                />
            </div>
            <div
                class="card-background w-full tw-absolute tw-rounded-3xl tw-bg-gradient-to-r tw-from-indigo-500 tw-to-primary"
            ></div>
            <h5
                class="card-title tw-absolute tw-mb-2 tw-line-clamp-2 tw-text-xl tw-font-bold tw-tracking-tight tw-text-white"
            >
                Noteworthy technology acquisitions 2021
            </h5>
            <div class="tw-relative tw-p-5">
                <p
                    class="tw-mb-3 tw-line-clamp-3 tw-font-normal tw-text-slate-300"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, doloribus, nemo odit quod tempore cum, tempora non
                    ipsum rerum dolore temporibus veritatis enim adipisci est.
                    Nihil molestias voluptas reiciendis voluptate expedita,
                    distinctio aspernatur aut veritatis ad debitis quo ipsa,
                    tenetur delectus quibusdam optio quidem corporis qui, atque
                    doloremque! Molestiae tempore ratione est nulla quae
                    perspiciatis vero, quasi animi, doloribus esse soluta. Quis
                    ducimus quasi deserunt, officia cupiditate explicabo libero
                    magni in harum ab dolorum unde quam corrupti consequatur
                    repudiandae. Numquam officiis recusandae ad impedit.
                    Explicabo repudiandae excepturi voluptas ex id illum nulla,
                    soluta autem, sed temporibus atque numquam iste
                    exercitationem nisi aut amet quis quo deleniti facilis
                    reiciendis quae dolorum aliquam consectetur! Nihil,
                    temporibus doloremque voluptas omnis blanditiis impedit!
                    Facere, natus est labore, cum qui quas perferendis, quia
                    explicabo quibusdam quis hic laudantium. Perferendis error
                    laudantium at non quis suscipit expedita vero voluptate
                    saepe incidunt praesentium provident culpa quasi modi natus
                    tempora ea ipsum facere iste molestiae, aliquid deserunt
                    repudiandae. Illo corrupti in culpa hic quam nostrum aliquam
                    inventore ullam dolores, totam eligendi nemo ipsam
                    voluptatum eos sapiente minima voluptatem, quis alias
                    repellendus omnis commodi! Iusto, amet. Distinctio quam nam,
                    sint odio neque cumque quisquam voluptatem doloribus
                    similique dolorem? Eius?
                </p>
            </div>
        </div>
    </a>
</template>
