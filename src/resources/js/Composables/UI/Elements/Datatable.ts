import Transitions from '@/Composables/UI/Transitions';
import Paginator from '@/Composables/UI/Elements/Paginator';

export default {
    root: ({ props }) => ({
        class: [
            'tw-relative',
            {
                'tw-flex tw-flex-col tw-h-full':
                    props.scrollable && props.scrollHeight === 'tw-flex',
            },
        ],
    }),
    loadingoverlay: {
        class: [
            'tw-fixed tw-w-full tw-h-full tw-t-0 tw-l-0',
            'tw-transition tw-duration-300',
            'tw-absolute tw-flex tw-items-center tw-justify-center tw-z-2',
            'main-bg-2 !tw-bg-opacity-40', // Dark Mode
        ],
    },
    loadingicon: 'tw-w-8 tw-h-8',
    wrapper: ({ props }) => ({
        class: [
            {
                'tw-relative primary-scrollbar': props.scrollable,
                'tw-flex tw-flex-col tw-grow tw-h-full':
                    props.scrollable && props.scrollHeight === 'tw-flex',
            },
        ],
    }),
    header: ({ props }) => ({
        class: [
            'tw-duration-300 tw-transition',
            'main-bg-2 tw-text-slate-700 tw-border-slate-300 tw-pb-4',
            'dark:tw-border-primary/40 dark:text-slate-50/80', // Dark Mode
            props.showGridlines
                ? 'tw-border-x tw-border-t tw-border-b-0'
                : 'tw-border-b tw-border-x-0',
        ],
    }),
    table: 'tw-w-full tw-border-spacing-0',
    thead: ({ context }) => ({
        class: [
            {
                'tw-top-0 tw-z-[1]': context.scrollable,
            },
        ],
    }),
    tbody: ({ instance, context }) => ({
        class: [
            {
                'tw-sticky tw-z-[1]': instance.frozenRow && context.scrollable,
            },
        ],
    }),
    tfoot: ({ context }) => ({
        class: [
            {
                'tw-bottom-0 tw-z-[1]': context.scrollable,
            },
        ],
    }),
    footer: {
        class: [
            'tw-duration-300 tw-transition',
            'main-bg-2 tw-text-slate-700 tw-border-t-0 tw-border-b tw-border-x-0 tw-border-slate-300 tw-p-4',
            'dark:tw-border-primary/40 dark:tw-text-slate-50/80', // Dark Mode
        ],
    },
    column: {
        headercell: ({ context, props }) => ({
            class: [
                'tw-text-left tw-border-0 tw-border-b tw-border-solid tw-border-slate-300 dark:tw-border-primary/40 tw-font-bold',
                'tw-transition tw-duration-300',
                context?.size === 'small'
                    ? 'tw-p-2'
                    : context?.size === 'large'
                      ? 'tw-p-5'
                      : 'tw-p-4', // Size
                context.sorted
                    ? 'tw-bg-primary/20 tw-text-slate-700'
                    : 'main-bg-2 tw-text-slate-700', // Sort
                context.sorted
                    ? 'dark:tw-text-slate-50/80 dark:tw-bg-primary/10'
                    : 'dark:tw-text-slate-50/80', // Dark Mode
                {
                    'tw-sticky tw-z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                    'tw-border-x tw-border-y': context?.showGridlines,
                    'tw-overflow-hidden tw-space-nowrap tw-border-y tw-relative tw-tw-bg-clip-padding':
                        context.resizable, // Resizable
                },
            ],
        }),
        headercontent: 'tw-flex tw-items-center',
        bodycell: ({ props, context }) => ({
            class: [
                'tw-transition tw-duration-300',
                'tw-text-left tw-border-0 tw-border-b tw-border-solid tw-border-slate-300',
                context?.size === 'small'
                    ? 'tw-p-2'
                    : context?.size === 'large'
                      ? 'tw-p-5'
                      : 'tw-p-4', // Size
                'main-text dark:tw-border-primary/40', // Dark Mode
                {
                    'tw-sticky bg-inherit': props.frozen || props.frozen === '', // Frozen Columns
                    'border-x border-y': context?.showGridlines,
                },
            ],
        }),
        footercell: ({ context }) => ({
            class: [
                'tw-text-left tw-border-0 tw-border-b tw-border-solid tw-border-slate-300 tw-font-bold',
                'tw-text-slate-700',
                'tw-transition tw-duration-300',
                context?.size === 'small'
                    ? 'tw-p-2'
                    : context?.size === 'large'
                      ? 'tw-p-5'
                      : 'tw-p-4', // Size
                'main-text dark:tw-border-primary/40', // Dark Mode
                {
                    'tw-border-x tw-border-y': context?.showGridlines,
                },
            ],
        }),
        sorticon: ({ context }) => ({
            class: [
                'tw-ml-2',
                context.sorted
                    ? 'tw-text-primary dark:tw-text-primary'
                    : 'tw-text-slate-700 dark:tw-text-slate-50/70',
            ],
        }),
        sortbadge: {
            class: [
                'tw-flex tw-items-center tw-justify-center tw-align-middle',
                'tw-rounded-[50%] tw-w-[1.143rem] tw-leading-[1.143rem] tw-ml-2',
                'tw-text-primary tw-bg-primary/40',
                'main-text dark:tw-bg-primary', // Dark Mode
            ],
        },
        columnfilter: 'tw-inline-flex tw-items-center tw-ml-auto',
        filteroverlay: {
            class: [
                'main-bg-3 tw-text-slate-600 tw-border-0 tw-rounded-md tw-min-w-[12.5rem]',
                'dark:tw-border-blue-900/40 main-text', //Dark Mode
            ],
        },
        filtermatchmodedropdown: {
            root: 'min-[0px]:tw-flex tw-mb-2',
        },
        filterrowitems: 'tw-m-0 tw-p-0 tw-py-3 tw-list-none ',
        filterrowitem: ({ context }) => ({
            class: [
                'tw-m-0 tw-py-3 tw-px-5 tw-bg-transparent',
                'tw-transition tw-duration-300',
                context?.highlighted
                    ? 'tw-text-blue-700 tw-bg-blue-100 dark:text-slate-50/80 dark:tw-bg-blue-300'
                    : 'main-text tw-bg-transparent dark:tw-bg-transparent',
            ],
        }),
        filteroperator: {
            class: [
                'tw-px-5 tw-py-3 tw-border-b tw-border-solid tw-border-slate-300 text-slate-700 main-bg-3 tw-rounded-t-md',
                'dark:tw-border-blue-900/40 dark:text-slate-50/80', // Dark Mode
            ],
        },
        filteroperatordropdown: {
            root: 'min-[0px]:tw-flex',
        },
        filterconstraint:
            'tw-p-5 tw-border-b tw-border-solid tw-border-slate-300 dark:tw-border-blue-900/40',
        filteraddrule: 'tw-py-3 tw-px-5',
        filteraddrulebutton: {
            root: 'tw-justify-center tw-w-full min-[0px]:tw-text-sm',
            label: 'tw-flex-auto tw-grow-0',
            icon: 'tw-mr-2',
        },
        filterremovebutton: {
            root: 'tw-ml-2',
            label: 'tw-grow-0',
        },
        filterbuttonbar: 'tw-flex tw-items-center tw-justify-between tw-p-5',
        filterclearbutton: {
            root: 'tw-w-auto min-[0px]:tw-text-sm tw-border-blue-500 tw-text-blue-500 tw-px-4 tw-py-3',
        },
        filterapplybutton: {
            root: 'tw-w-auto min-[0px]:tw-text-sm tw-px-4 tw-py-3',
        },
        filtermenubutton: ({ context }) => ({
            class: [
                'tw-inline-flex tw-justify-center tw-items-center tw-cursor-pointer tw-no-underline tw-overflow-hidden tw-relative tw-ml-2',
                'tw-w-8 tw-h-8 tw-rounded-[50%]',
                'tw-transition tw-duration-300',
                'hover:tw-text-slate-700 hover:tw-bg-slate-300/20', // Hover
                'focus:main-primary-focus', // Focus
                'dark:tw-text-slate-50/70 dark:hover:tw-text-slate-50/80 dark:tw-bg-slate-900', // Dark Mode
                {
                    'tw-bg-blue-50 tw-text-blue-700': context.active,
                },
            ],
        }),
        headerfilterclearbutton: ({ context }) => ({
            class: [
                'tw-inline-flex tw-justify-center tw-items-center tw-cursor-pointer tw-no-underline tw-overflow-hidden tw-relative',
                'tw-text-left tw-bg-transparent tw-m-0 tw-p-0 tw-border-none tw-select-none tw-ml-2',
                {
                    'tw-invisible': !context.hidden,
                },
            ],
        }),
        columnresizer:
            'tw-block tw-absolute tw-top-0 tw-right-0 tw-m-0 tw-w-2 tw-h-full tw-p-0 tw-cursor-col-resize tw-border tw-border-transparent',
        rowreordericon: 'tw-cursor-move',
        roweditorinitbutton: {
            class: [
                'tw-inline-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative',
                'tw-text-left tw-cursor-pointer tw-select-none',
                'tw-w-8 tw-h-8 tw-border-0 tw-rounded-[50%]',
                'tw-transition tw-duration-300',
                'tw-text-slate-700 tw-border-transparent',
                'focus:main-primary-focus', //Focus
                'hover:tw-text-slate-700 hover:tw-bg-slate-300/20', //Hover
                'dark:tw-text-slate-50/70', // Dark Mode
            ],
        },
        roweditorsavebutton: {
            class: [
                'tw-inline-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative',
                'tw-text-left tw-cursor-pointer tw-select-none',
                'tw-w-8 tw-h-8 tw-border-0 tw-rounded-[50%]',
                'tw-transition tw-duration-300',
                'tw-text-slate-700 tw-border-transparent',
                'focus:main-primary-focus', //Focus
                'hover:tw-text-slate-700 hover:tw-bg-slate-300/20', //Hover
                'dark:tw-text-slate-50/70', // Dark Mode
            ],
        },
        roweditorcancelbutton: {
            class: [
                'tw-inline-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative',
                'tw-text-left tw-cursor-pointer tw-select-none',
                'tw-w-8 tw-h-8 tw-border-0 tw-rounded-[50%]',
                'tw-transition tw-duration-300',
                'tw-text-slate-700 tw-border-transparent',
                'focus:main-primary-focus', //Focus
                'hover:tw-text-slate-700 hover:tw-bg-slate-300/20', //Hover
                'dark:tw-text-slate-50/70', // Dark Mode
            ],
        },
        radiobuttonwrapper: {
            class: [
                'tw-relative tw-inline-flex tw-cursor-pointer tw-select-none tw-align-bottom',
                'tw-w-6 tw-h-6',
            ],
        },
        radiobutton: ({ context }) => ({
            class: [
                'tw-flex tw-justify-center tw-items-center',
                'tw-border-2 tw-w-6 tw-h-6 tw-text-slate-700 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out',
                context.checked
                    ? 'tw-border-blue-500 tw-bg-blue-500 dark:tw-border-blue-400 dark:tw-bg-blue-400'
                    : 'tw-border-slate-300 tw-bg-slate-100 dark:tw-border-blue-900/40 dark:tw-bg-slate-900',
                {
                    'hover:tw-border-blue-500 dark:hover:tw-border-blue-400 focus:main-primary-focus':
                        !context.disabled,
                    'tw-cursor-default tw-opacity-60': context.disabled,
                },
            ],
        }),
        radiobuttonicon: ({ context }) => ({
            class: [
                'tw-transform tw-rounded-full',
                'tw-block tw-w-3 tw-h-3 tw-transition tw-duration-300 tw-bg-slate-100 dark:tw-bg-slate-900',
                {
                    'backface-hidden scale-10 tw-invisible':
                        context.checked === false,
                    'tw-transform tw-scale-100 tw-visible':
                        context.checked === true,
                },
            ],
        }),
        headercheckboxwrapper: {
            class: [
                'tw-cursor-pointer tw-inline-flex tw-relative tw-select-none tw-align-bottom',
                'tw-w-6 tw-h-6',
            ],
        },
        headercheckbox: ({ context }) => ({
            class: [
                'tw-flex tw-items-center tw-justify-center',
                'tw-border-2 tw-w-6 tw-h-6 tw-text-slate-600 tw-rounded-lg tw-transition-colors tw-duration-300',
                context.checked
                    ? 'tw-border-primary-dark tw-bg-primary'
                    : 'tw-border-slate-300 main-bg-3 dark:tw-border-blue-900/40',
                {
                    'hover:tw-border-primary-dark dark:hover:tw-border-primary-dark focus:main-primary-focus':
                        !context.disabled,
                    'tw-cursor-default tw-opacity-60': context.disabled,
                },
            ],
        }),
        headercheckboxicon:
            'tw-w-4 tw-h-4 tw-transition-all tw-duration-300 tw-text-slate-50 tw-text-base dark:tw-text-slate-900',
        checkboxwrapper: {
            class: [
                'tw-cursor-pointer tw-inline-flex tw-relative tw-select-none tw-align-bottom',
                'tw-w-6 tw-h-6',
            ],
        },
        checkbox: ({ context }) => ({
            class: [
                'tw-flex tw-items-center tw-justify-center',
                'tw-border-2 tw-w-6 tw-h-6 tw-text-slate-600 tw-rounded-lg tw-transition-colors tw-duration-300',
                context.checked
                    ? 'tw-border-blue-500 tw-bg-blue-500 dark:tw-border-blue-400 dark:tw-bg-blue-400'
                    : 'tw-border-slate-300 main-bg-3 dark:tw-border-blue-900/40',
                {
                    'hover:tw-border-blue-500 dark:hover:tw-border-blue-400 focus:main-primary-focus':
                        !context.disabled,
                    'tw-cursor-default tw-opacity-60': context.disabled,
                },
            ],
        }),
        checkboxicon:
            'tw-w-4 tw-h-4 tw-transition-all tw-duration-300 tw-text-slate-50 tw-text-base dark:tw-text-slate-900',
        transition: Transitions.overlay,
    },
    bodyrow: ({ context }) => ({
        class: [
            context.selected
                ? 'tw-bg-blue-50 tw-text-primary dark:tw-bg-primary/40'
                : 'main-bg-2 main-text',
            context.stripedRows
                ? context.index % 2 === 0
                    ? 'main-bg-2 main-text'
                    : 'main-bg-2 main-text !tw-bg-opacity-50'
                : '',
            'tw-transition tw-duration-300',
            'focus:tw-outline focus:tw-outline-[0.15rem] focus:tw-outline-primary/80 focus:tw-outline-offset-[-0.15rem]', // Focus
            'main-text dark:focus:tw-outline dark:focus:tw-outline-[0.15rem] dark:focus:tw-outline-primary dark:focus:tw-outline-offset-[-0.15rem]', // Dark Mode
            {
                'tw-cursor-pointer': context.selectable,
                'hover:bg-slate-300/20 hover:tw-text-slate-600':
                    context.selectable && !context.selected, // Hover
            },
        ],
    }),
    rowexpansion: 'main-bg-3 tw-text-slate-600 dark:text-slate-50/80',
    rowgroupheader: {
        class: [
            'tw-sticky z-[1]',
            'tw-bg-slate-100 tw-text-slate-600',
            'tw-transition tw-duration-300',
        ],
    },
    rowgroupfooter: {
        class: [
            'tw-sticky tw-z-[1]',
            'tw-bg-slate-100 tw-text-slate-600',
            'tw-transition tw-duration-300',
        ],
    },
    rowgrouptoggler: {
        class: [
            'tw-text-left tw-m-0 tw-p-0 tw-cursor-pointer tw-select-none',
            'tw-inline-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative',
            'tw-w-8 tw-h-8 tw-text-slate-500 tw-border-0 tw-bg-transparent tw-rounded-[50%]',
            'tw-transition tw-duration-300',
            'dark:text-slate-50/70', // Dark Mode
        ],
    },
    rowgrouptogglericon: 'tw-inline-block tw-w-4 tw-h-4',
    resizehelper:
        'tw-absolute tw-hidden tw-w-px tw-z-10 tw-bg-primary dark:tw-bg-primary',
    paginator: Paginator,
};
