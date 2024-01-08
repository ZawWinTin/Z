import { ref } from 'vue';

type OffsetType = { top: number; height: number };
const sections = ref<HTMLCollection | null>(null);
const offsets = ref<Array<OffsetType>>([]);

const addShadow = ref<boolean>(false);

const getSection = (scrollBottom: number) => {
    for (let i = 0; i < offsets.value.length; i++) {
        if (
            scrollBottom >= offsets.value[i].top &&
            scrollBottom <= offsets.value[i].top + offsets.value[i].height
        ) {
            return i;
        }
    }
    return -1;
};

export const scrollOverlayEffect = () => {
    const scrollTop = window.scrollY;
    const scrollBottom = scrollTop + window.innerHeight;
    const activeSection = getSection(scrollBottom);

    if (activeSection >= 0) {
        const oldActiveSection = sections.value
            ? (sections.value[activeSection - 1] as HTMLElement)
            : null;
        const newActiveSection = sections.value
            ? (sections.value[activeSection] as HTMLElement)
            : null;

        if (newActiveSection) {
            newActiveSection.style.position = 'relative';
            newActiveSection.style.zIndex = '0';
            if (activeSection + 1 < offsets.value.length && sections.value) {
                (
                    sections.value[activeSection + 1] as HTMLElement
                ).style.marginTop = '0';
            }
            if (
                activeSection > 0 &&
                oldActiveSection &&
                scrollTop < offsets.value[activeSection].top
            ) {
                newActiveSection.style.marginTop =
                    offsets.value[activeSection - 1].top +
                    offsets.value[activeSection - 1].height +
                    'px';
                oldActiveSection.style.position = 'fixed';
                oldActiveSection.style.bottom = '0';
                oldActiveSection.style.zIndex = '-1';

                if (addShadow.value) {
                    let shadowElement = document.querySelector(
                        '.shadow-scroll-js',
                    ) as HTMLElement;
                    if (!shadowElement) {
                        shadowElement = document.createElement(
                            'div',
                        ) as HTMLElement;
                        shadowElement.classList.add(
                            'shadow-scroll-js',
                            'tw-absolute',
                            'tw-inset-0',
                            'tw-block',
                            'tw-z-10',
                            'tw-bg-slate-950',
                            'tw-pointer-events-none',
                        );
                    }
                    const opacity =
                        ((scrollBottom - offsets.value[activeSection].top) /
                            window.innerHeight) *
                        0.5;

                    shadowElement.style.opacity = opacity.toString();
                    oldActiveSection.appendChild(shadowElement);
                }
            } else if (addShadow.value) {
                const shadowElements =
                    document.querySelectorAll('.shadow-scroll-js');
                shadowElements.forEach(element => {
                    element.remove();
                });
            }
        }
    }
};

export const loadOverlayScroll = (parentSection: HTMLElement | null) => {
    sections.value = null;
    offsets.value = [];

    if (!parentSection) {
        return;
    }
    parentSection.style.position = 'relative';
    sections.value = parentSection.children;

    for (let i = 0; i < sections.value.length; i++) {
        const section = sections.value[i] as HTMLElement;
        const currentTop =
            i == 0 ? 0 : offsets.value[i - 1].top + offsets.value[i - 1].height;
        offsets.value[i] = { top: currentTop, height: section.offsetHeight };

        section.style.width = '100%';
        section.style.position = 'relative';
        section.style.zIndex = '0';
        section.style.marginTop = '0';
    }

    const shadowElements = document.querySelectorAll('.shadow-scroll-js');
    shadowElements.forEach(element => {
        element.remove();
    });
};

export const initializeOverlayScroll = (
    parentSection: HTMLElement | null,
    addShadowOnScroll: boolean = false,
) => {
    loadOverlayScroll(parentSection);
    addShadow.value = addShadowOnScroll;
};
