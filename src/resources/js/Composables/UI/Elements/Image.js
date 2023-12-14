import Transitions from '@/Composables/UI/Transitions';

export default {
    root: 'tw-relative tw-inline-block',
    image: 'tw-w-full tw-h-full tw-rounded tw-object-cover',
    preview: 'tw-rounded',
    button: {
        class: [
            'tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-opacity-0 tw-transition-opacity tw-duration-300',
            'tw-bg-transparent tw-text-slate-100',
            'hover:tw-opacity-100 hover:tw-cursor-pointer hover:main-bg-3-dark-only hover:tw-bg-opacity-50', //Hover
        ],
    },
    mask: {
        class: [
            'tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full',
            'tw-flex tw-items-center tw-justify-center',
            'main-bg-3-dark-only tw-bg-opacity-90',
        ],
    },
    toolbar: {
        class: ['tw-absolute tw-top-0 tw-right-0 tw-z-10 tw-flex', 'tw-p-4'],
    },
    rotaterightbutton: {
        class: [
            'tw-flex tw-justify-center tw-items-center',
            'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
            'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
            'focus:main-primary-focus',
        ],
    },
    rotaterighticon: 'tw-w-6 tw-h-6',
    rotateleftbutton: {
        class: [
            'tw-flex tw-justify-center tw-items-center',
            'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
            'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
            'focus:main-primary-focus',
        ],
    },
    rotatelefticon: 'tw-w-6 tw-h-6',
    zoomoutbutton: {
        class: [
            'tw-flex tw-justify-center tw-items-center',
            'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
            'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
            'focus:main-primary-focus',
        ],
    },
    zoomouticon: 'tw-w-6 tw-h-6',
    zoominbutton: {
        class: [
            'tw-flex tw-justify-center tw-items-center',
            'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
            'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
            'focus:main-primary-focus',
        ],
    },
    zoominicon: 'tw-w-6 tw-h-6',
    closebutton: {
        class: [
            'tw-flex tw-justify-center tw-items-center',
            'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
            'hover:tw-text-slate-50 hover:bg-slate-50/10',
            'focus:main-primary-focus',
        ],
    },
    closeicon: 'tw-w-6 tw-h-6',
    transition: Transitions.overlay,
};
