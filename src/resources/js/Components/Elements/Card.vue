<script setup>
let createdDate = moment().format('MMM Do, YYYY');
</script>
<style scoped>
.card-background {
    top: 8%;
    left: -43%;
    height: 120%;
    width: 150%;
    transform: skew(19deg, -9deg);
}
</style>
<template>
    <a
        href="#"
        class="card interactable-js tw-transition-all tw-duration-300 tw-ease-in-out tw-group"
    >
        <div
            class="tw-relative tw-w-80 tw-h-[17.5rem] tw-overflow-hidden tw-rounded-lg tw-shadow-[1rem_0_2rem_0_rgba(0,0,0,0.5)]"
        >
            <div class="tw-h-52 tw-w-full">
                <img
                    class="tw-h-full tw-w-full tw-rounded-t-lg tw-object-cover"
                    src="https://picsum.photos/500/300"
                    alt=""
                />
            </div>
            <div class="tw-relative -tw-mt-12 tw-transition tw-duration-500 group-hover:tw-translate-y-[-5.5rem]">
                <div
                    class="card-background w-full tw-absolute tw-rounded-2xl tw-bg-white dark:tw-bg-gray-800"
                ></div>
                <div class="tw-relative tw-flex tw-flex-col tw-gap-2 tw-p-5">
                    <p
                        class="tw-text-right tw-text-sm tw-text-slate-400 dark:tw-text-slate-500"
                    >
                        {{ createdDate }}
                    </p>
                    <h5
                        class="card-title tw-line-clamp-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-indigo-500 tw-to-primary"
                    >
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p
                        class="tw-line-clamp-3 tw-font-normal tw-text-gray-700 dark:tw-text-gray-400"
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
