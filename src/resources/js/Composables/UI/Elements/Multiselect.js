import Transitions from '@/Composables/UI/Transitions';

export default {
    root: ({ props, state }) => ({
        class: [
            'tw-w-full tw-inline-flex tw-cursor-pointer tw-select-none tw-rounded-md',
            'tw-bg-slate-50 dark:tw-bg-slate-900 tw-border tw-border-slate-300 dark:tw-border-slate-700',
            'tw-transition-colors tw-duration-300 tw-ease-in-out tw-shadow-sm',
            'hover:tw-border-primary dark:hover:tw-border-primary',
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    props?.disabled,
                'main-primary-focus': state.focused,
            },
        ],
    }),
    labelContainer: {
        class: 'tw-overflow-hidden tw-flex-auto tw-cursor-pointer tw-min-h-[3rem]',
    },
    label: ({ props }) => ({
        class: [
            'tw-overflow-hidden tw-whitespace-nowrap tw-cursor-pointer text-ellipsis tw-h-full',
            'tw-text-slate-800 dark:text-slate-50/80',
            'tw-p-3 tw-transition tw-duration-300',
            {
                'tw-block !tw-p-3':
                    props.display !== 'chip' &&
                    (props?.modelValue == null ||
                        props?.modelValue == undefined),
                'tw-flex tw-flex-row tw-flex-wrap tw-gap-2 tw-items-center !tw-py-2 tw-px-3':
                    props.display == 'chip' && props?.modelValue !== null,
                '!tw-p-3': props.display == 'chip' && props?.modelValue == null,
            },
        ],
    }),
    token: {
        class: [
            'tw-py-1 tw-px-2 tw-bg-slate-300 dark:tw-bg-slate-700 tw-text-slate-700 dark:tw-text-slate-50/80',
            'tw-cursor-default tw-inline-flex tw-items-center tw-rounded-full',
        ],
    },
    removeTokenIcon: {
        class: 'tw-ml-2',
    },
    trigger: {
        class: [
            'tw-flex tw-items-center tw-justify-center shrink-0',
            'tw-bg-transparent tw-text-slate-600 dark:tw-text-slate-50/70 tw-w-12 tw-rounded-tr-lg tw-rounded-br-lg',
        ],
    },
    panel: {
        class: [
            'tw-bg-slate-50 dark:tw-bg-slate-900 tw-text-slate-700 dark:tw-text-slate-50/80 tw-border-0 tw-rounded-md tw-shadow-lg',
        ],
    },
    header: {
        class: [
            'tw-p-3 tw-border-b tw-border-slate-300 dark:tw-border-primary/40 tw-text-slate-700 dark:tw-text-slate-50/80 tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-t-lg',
            'tw-flex tw-items-center tw-justify-between tw-space-x-2',
        ],
    },
    headerCheckboxContainer: {
        class: [
            'tw-inline-flex tw-cursor-pointer tw-select-none tw-align-bottom tw-relative',
            'tw-mr-2',
            'tw-w-6 tw-h-6',
        ],
    },
    headerCheckbox: ({ context }) => ({
        class: [
            'tw-flex tw-items-center tw-justify-center',
            'tw-border-2 tw-w-6 tw-h-6 tw-text-slate-600 dark:tw-text-slate-50/80 tw-rounded-lg tw-transition-colors tw-duration-300',
            'hover:tw-border-primary focus:main-primary-focus',
            {
                'tw-border-slate-300 dark:tw-border-primary-dark tw-bg-slate-50 dark:tw-bg-slate-900':
                    !context?.selected,
                'tw-border-primary-dark tw-bg-primary tw-shadow':
                    context?.selected,
            },
        ],
    }),
    headercheckboxicon: {
        class: 'tw-w-4 tw-h-4 tw-transition-all tw-duration-300 tw-text-slate-50',
    },
    closeButton: {
        class: [
            'tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative',
            'tw-w-8 tw-h-8 tw-text-slate-500 dark:tw-text-slate-50/70 tw-border-0 tw-bg-transparent tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2 last:tw-mr-0',
            'hover:tw-text-slate-700 dark:hover:tw-text-slate-50/80 hover:tw-border-transparent hover:tw-bg-slate-200 dark:hover:tw-bg-slate-700/80 ',
            'focus:main-primary-focus',
        ],
    },
    closeButtonIcon: {
        class: 'tw-w-4 tw-h-4 tw-inline-block',
    },
    wrapper: {
        class: [
            'tw-max-h-[200px] primary-scrollbar',
            'tw-bg-slate-50 tw-text-slate-700 tw-border-0 tw-rounded-md tw-shadow-lg',
            'dark:tw-bg-slate-900 dark:tw-text-slate-50/80',
        ],
    },
    list: {
        class: 'tw-py-3 tw-list-none tw-m-0',
    },
    item: ({ context }) => ({
        class: [
            'tw-cursor-pointer tw-font-normal tw-overflow-hidden tw-relative tw-whitespace-nowrap',
            'tw-m-0 tw-p-3 tw-border-0 tw-transition-shadow tw-duration-300 tw-rounded-none',
            {
                'tw-text-slate-700 hover:tw-text-slate-700 hover:tw-bg-slate-200 dark:tw-text-slate-50/80 dark:hover:tw-bg-slate-800':
                    !context.focused && !context.selected,
                'tw-bg-slate-300 tw-text-slate-700 dark:tw-text-slate-50/80 dark:tw-bg-slate-800/90 hover:tw-text-slate-700 hover:tw-bg-slate-200 dark:tw-text-slate-50/80 dark:hover:tw-bg-slate-800':
                    context.focused && !context.selected,
                'tw-bg-primary-dark/60 tw-text-slate-50 dark:tw-bg-primary-dark/60 dark:tw-text-slate-50':
                    context.focused && context.selected,
                'tw-bg-primary/60 tw-text-slate-50 dark:tw-bg-primary/60 dark:tw-text-slate-50':
                    !context.focused && context.selected,
            },
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    context.disabled,
            },
        ],
    }),
    checkboxContainer: {
        class: [
            'tw-inline-flex tw-cursor-pointer tw-select-none tw-align-bottom tw-relative',
            'tw-mr-2',
            'tw-w-6 tw-h-6',
        ],
    },
    checkbox: ({ context }) => ({
        class: [
            'tw-flex tw-items-center tw-justify-center',
            'tw-border-2 tw-w-6 tw-h-6 tw-text-slate-600 dark:tw-text-slate-50/80 tw-rounded-lg tw-transition-colors tw-duration-300',
            'hover:tw-border-primary focus:main-primary-focus',
            {
                'tw-border-slate-300 dark:tw-border-primary-dark tw-bg-slate-50 dark:tw-bg-slate-900':
                    !context?.selected,
                'tw-border-primary-dark tw-bg-primary tw-shadow':
                    context?.selected,
            },
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default tw-border-slate-300':
                    context.disabled,
            },
        ],
    }),
    checkboxicon: {
        class: 'tw-w-4 tw-h-4 tw-transition-all tw-duration-300 tw-text-slate-50 tw-text-base',
    },
    itemgroup: {
        class: [
            'tw-m-0 tw-p-3 tw-text-slate-800 tw-bg-slate-50 tw-font-bold',
            'dark:tw-bg-slate-900 dark:tw-text-slate-50/80',
            'tw-cursor-auto',
        ],
    },
    filtercontainer: {
        class: 'tw-relative',
    },
    filterinput: {
        class: [
            'tw-pr-7 -tw-mr-7',
            'tw-w-full',
            'tw-text-slate-700 tw-bg-slate-50 tw-py-3 tw-px-3 tw-border tw-border-slate-300 tw-transition tw-duration-300 tw-rounded-lg tw-appearance-none',
            'dark:tw-bg-slate-900 dark:tw-border-primary/40 dark:hover:tw-border-primary dark:tw-text-slate-50/80',
            'hover:tw-border-primary focus:main-primary-focus',
        ],
    },
    filtericon: {
        class: '-tw-mt-2 tw-absolute tw-top-1/2',
    },
    clearicon: {
        class: 'tw-text-slate-500 tw-right-12 -tw-mt-2 tw-absolute tw-top-1/2',
    },
    transition: Transitions.overlay,
};
