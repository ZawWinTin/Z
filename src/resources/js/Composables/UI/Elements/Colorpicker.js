import Transitions from '@/Composables/UI/Transitions';

export default {
    root: ({ props }) => ({
        class: [
            'tw-inline-block',
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    props.disabled,
            },
        ],
    }),
    input: {
        class: [
            'tw-m-0',
            'tw-text-base tw-text-slate-600 main-bg-3 tw-p-3 tw-border main-input-border tw-transition-colors tw-duration-300 tw-rounded-lg tw-cursor-pointer',
            'hover:tw-border-primary/80 focus:main-primary-focus',
            'tw-w-8 tw-h-8',
        ],
    },
    panel: ({ props }) => ({
        class: [
            'tw-shadow-md tw-rounded-md',
            'main-bg-3 tw-border tw-border-primary',
            {
                'tw-relative tw-h-48 tw-w-52': props.inline,
                'tw-absolute tw-h-48 tw-w-52': !props.inline,
            },
        ],
    }),
    selector: 'tw-absolute tw-h-44 tw-w-40 tw-top-2 tw-left-2',
    color: {
        class: 'tw-h-44 tw-w-40',
        style: 'background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)',
    },
    colorhandle: {
        class: [
            'tw-rounded-full tw-border tw-border-solid tw-cursor-pointer tw-h-3 tw-w-3 tw-absolute tw-opacity-80',
            'tw-border-slate-50',
        ],
    },
    hue: {
        class: ['tw-h-44 tw-w-6 tw-absolute tw-top-2 tw-left-44 tw-opacity-80'],
        style: 'background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)',
    },
    huehandle:
        'tw-border-solid tw-border-2 tw-cursor-pointer tw-h-2 tw-w-8 tw-left-0 -tw-ml-1 -tw-mt-1 opacity-85 tw-absolute',
    transition: Transitions.overlay,
};
