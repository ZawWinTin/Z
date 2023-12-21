import { ref } from 'vue';

type OffsetType = {top: number, height: number};
const sections = ref<HTMLCollection | null>(null);
const offsets = ref<Array<OffsetType>>([]);

const getSection = (scrollBottom: number) => {
    for(let i = 0; i < offsets.value.length; i++) {
        if (scrollBottom >= offsets.value[i].top && scrollBottom <= (offsets.value[i].top + offsets.value[i].height)) {
            return i;
        }
    }
    return -1;
};

const scrollOverlayEffect = () => {
    let scrollTop = window.scrollY;
    let scrollBottom = scrollTop + window.innerHeight;
    let activeSection = getSection(scrollBottom);

    if (activeSection >= 0) {
        let oldActiveSection = (sections.value) ? sections.value[activeSection - 1] as HTMLElement : null;
        let newActiveSection = (sections.value) ? sections.value[activeSection] as HTMLElement : null;

        if (newActiveSection) {
            newActiveSection.style.position = 'relative';
            newActiveSection.style.zIndex = '0';
            newActiveSection.style.marginTop = '0';
            if (activeSection + 1 < offsets.value.length) {
                sections.value[activeSection + 1].style.marginTop = '0';
            }
            if (activeSection > 0 && oldActiveSection && (scrollTop < offsets.value[activeSection].top)) {
                newActiveSection.style.marginTop = offsets.value[activeSection - 1].top + offsets.value[activeSection - 1].height + 'px';
                oldActiveSection.style.position = 'fixed';
                oldActiveSection.style.bottom = '0';
                oldActiveSection.style.zIndex = '-1';
            }
        }
    }
};

export const loadOverlayScroll =  (parentSection: HTMLElement | null) => {
    sections.value = null;
    offsets.value = [];

    if (!parentSection) {
        return;
    }
    parentSection.style.position = 'relative';
    sections.value = parentSection.children;

    for (let i = 0; i < sections.value.length; i++) {
        let section = sections.value[i] as HTMLElement;
        let currentTop = (i == 0) ? 0 : offsets.value[i-1].top + offsets.value[i-1].height;
        offsets.value[i] = {top: currentTop, height: section.offsetHeight};

        section.style.width = '100%';
        section.style.position = 'relative';
        section.style.zIndex = '0';
        section.style.marginTop = '0';
    }
};

export const intializeOverlayScroll = (parentSection: HTMLElement | null) => {
    loadOverlayScroll(parentSection);

    window.addEventListener('scroll', scrollOverlayEffect);
}
