export const createButton = (text, onClick) => {
    const element = document.createElement('a');
    element.href = '#';
    element.text = text;
    element.classList.add(
        'tw-w-6',
        'tw-h-6',
        'tw-inline-flex',
        'tw-justify-center',
        'tw-items-center',
        'hover:tw-bg-slate-50/30',
    );
    element.addEventListener('click', event => {
        onClick();
        event.preventDefault();
    });

    return element;
};
