export const createButton = (text, onClick) => {
    const element = document.createElement('a');
    element.text = text;
    element.classList.add(
        'tw-inline-flex',
        'tw-justify-center',
        'tw-items-center',
        'tw-p-2',
        'hover:tw-bg-slate-50/30',
        'tw-rounded-md',
        'tw-cursor-pointer',
        'tw-transition',
        'tw-duration-300',
    );
    element.addEventListener('click', event => {
        onClick();
        event.preventDefault();
    });

    return element;
};

export const getDialogPos = dialog => {
    let dialogTop = 0;
    let dialogLeft = 0;
    if (dialog) {
        let dialogRect = dialog.getBoundingClientRect();
        dialogTop = parseFloat(dialogRect.top);
        dialogLeft = parseFloat(dialogRect.left);
    }

    return { top: dialogTop, left: dialogLeft };
};

export const adjustAdditionalHeight = (elementHeight, container) => {
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
