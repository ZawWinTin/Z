export function createButton(text: string, onClick: () => void) {
    const element = document.createElement('button');
    element.innerHTML = text;
    element.classList.add(
        'tw-inline-flex',
        'tw-flex-row',
        'tw-justify-center',
        'tw-items-center',
        'tw-p-2',
        'hover:tw-bg-slate-50/30',
        'tw-rounded-md',
        'tw-cursor-pointer',
        'tw-transition',
        'tw-duration-300',
    );
    element.addEventListener('click', (event: MouseEvent) => {
        onClick();
        event.preventDefault();
    });

    return element;
};

export function getDialogPos(dialog?: HTMLElement | null) {
    let dialogTop = 0;
    let dialogLeft = 0;
    if (dialog) {
        let dialogRect = dialog.getBoundingClientRect();
        dialogTop = dialogRect.top;
        dialogLeft = dialogRect.left;
    }

    return { top: dialogTop, left: dialogLeft };
};

export function adjustAdditionalHeight(elementHeight: number, container: HTMLElement): number {
    let additionalHeight = 0;
    if (
        window.innerHeight - container.getBoundingClientRect().bottom <
        container.scrollHeight
    ) {
        additionalHeight = -(elementHeight + 6); // Show Top
    } else {
        additionalHeight = 24; // Show Bottom
    }

    return additionalHeight;
};
