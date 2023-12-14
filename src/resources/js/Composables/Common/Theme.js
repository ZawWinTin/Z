export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'tw-opacity-0 tw-scale-75',
        enterActiveClass: 'tw-transition tw-duration-200 tw-ease-in-out',
        leaveActiveClass: 'tw-transition tw-duration-200 tw-ease-in-out',
        leaveToClass: 'tw-opacity-0 tw-scale-75',
    },
    floatIn: {
        enterFromClass:
            'tw-opacity-0 tw-translate-x-0 tw-translate-y-2/4 tw-translate-z-0',
        enterActiveClass:
            'tw-transition-transform tw-transition-opacity tw-duration-300',
        leaveFromClass: 'tw-max-h-40',
        leaveActiveClass: 'tw-transition-all tw-duration-500 tw-ease-in',
        leaveToClass: 'tw-max-h-0 tw-opacity-0 tw-mb-0 tw-overflow-hidden',
    },
};

export const tooltipTheme = {
    root: ({ context }) => ({
        class: [
            'tw-absolute',
            {
                'tw-py-0 tw-px-1':
                    context?.right ||
                    context?.left ||
                    (!context?.right &&
                        !context?.left &&
                        !context?.top &&
                        !context?.bottom),
                'tw-py-1 tw-px-0': context?.top || context?.bottom,
            },
        ],
    }),
    arrow: ({ context }) => ({
        class: [
            'tw-absolute tw-w-0 tw-h-0 tw-border-transparent tw-border-solid tw-bg-slate-200 dark:tw-bg-slate-900',
            {
                '-tw-mt-1 tw-border-y-[0.25rem] tw-border-r-[0.25rem] tw-border-l-0 tw-border-r-slate-200 dark:tw-border-r-slate-900':
                    context?.right ||
                    (!context?.right &&
                        !context?.left &&
                        !context?.top &&
                        !context?.bottom),
                '-tw-mt-1 tw-border-y-[0.25rem] tw-border-l-[0.25rem] tw-border-r-0 tw-border-l-slate-200 dark:tw-border-l-slate-900':
                    context?.left,
                '-tw-ml-1 tw-border-x-[0.25rem] tw-border-t-[0.25rem] tw-border-b-0 tw-border-t-slate-200 dark:tw-border-t-slate-900':
                    context?.top,
                '-tw-ml-1 tw-border-x-[0.25rem] tw-border-b-[0.25rem] tw-border-t-0 tw-border-b-slate-200 dark:tw-border-b-slate-900':
                    context?.bottom,
            },
        ],
    }),
    text: {
        class: 'tw-p-3 tw-bg-slate-200 tw-text-slate-950 dark:tw-bg-slate-900 dark:tw-text-slate-50 tw-rounded-md tw-whitespace-pre-line tw-break-words',
    },
};

const buttonTheme = {
    root: ({ props, context }) => ({
        class: [
            'tw-items-center tw-cursor-pointer tw-flex tw-overflow-hidden tw-relative tw-select-none tw-justify-center tw-align-bottom',
            'tw-transition tw-duration-300 tw-ease-in-out',
            'focus:tw-outline-none focus:tw-outline-offset-0',
            {
                'tw-text-slate-50 dark:tw-text-slate-50 tw-bg-primary dark:tw-bg-primary tw-border tw-border-primary dark:tw-border-primary hover:tw-bg-primary-dark dark:hover:tw-bg-primary-dark hover:tw-border-primary dark:hover:tw-border-primary focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1':
                    !props.link &&
                    props.severity === null &&
                    !props.text &&
                    !props.outlined &&
                    !props.plain,
                'tw-text-primary tw-bg-transparent tw-border-transparent focus:tw-shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:tw-shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                    props.link,
            },
            {
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1':
                    props.severity === null,
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-slate-500/80 focus:tw-ring-offset-1':
                    props.severity === 'secondary',
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-500/80 focus:tw-ring-offset-1':
                    props.severity === 'success',
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500/80 focus:tw-ring-offset-1':
                    props.severity === 'info',
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-orange-500/80 focus:tw-ring-offset-1':
                    props.severity === 'warning',
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-purple-500/80 focus:tw-ring-offset-1':
                    props.severity === 'help',
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500/80 focus:tw-ring-offset-1':
                    props.severity === 'danger',
            },
            {
                'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-slate-500 dark:tw-bg-slate-400 tw-border tw-border-slate-500 dark:tw-border-slate-400 hover:tw-bg-slate-600 dark:hover:tw-bg-slate-500 hover:tw-border-slate-600 dark:hover:tw-border-slate-500':
                    props.severity === 'secondary' &&
                    !props.text &&
                    !props.outlined &&
                    !props.plain,
                'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-green-500 dark:tw-bg-green-400 tw-border tw-border-green-500 dark:tw-border-green-400 hover:tw-bg-green-600 dark:hover:tw-bg-green-500 hover:tw-border-green-600 dark:hover:tw-border-green-500':
                    props.severity === 'success' &&
                    !props.text &&
                    !props.outlined &&
                    !props.plain,
                'tw-text-slate-50 dark:tw-text-slate-900 dark:tw-bg-blue-400 tw-bg-blue-500 dark:tw-bg-blue-400 tw-border tw-border-blue-500 dark:tw-border-blue-400 hover:tw-bg-blue-600 hover:tw-border-blue-600 dark:hover:tw-bg-blue-500 dark:hover:tw-border-blue-500':
                    props.severity === 'info' &&
                    !props.text &&
                    !props.outlined &&
                    !props.plain,
                'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-orange-500 dark:tw-bg-orange-400 tw-border tw-border-orange-500 dark:tw-border-orange-400 hover:tw-bg-orange-600 dark:hover:tw-bg-orange-500 hover:tw-border-orange-600 dark:hover:tw-border-orange-500':
                    props.severity === 'warning' &&
                    !props.text &&
                    !props.outlined &&
                    !props.plain,
                'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-purple-500 dark:tw-bg-purple-400 tw-border tw-border-purple-500 dark:tw-border-purple-400 hover:tw-bg-purple-600 dark:hover:tw-bg-purple-500 hover:tw-border-purple-600 dark:hover:tw-border-purple-500':
                    props.severity === 'help' &&
                    !props.text &&
                    !props.outlined &&
                    !props.plain,
                'tw-text-slate-50 dark:tw-text-slate-900 tw-bg-red-500 dark:tw-bg-red-400 tw-border tw-border-red-500 dark:tw-border-red-400 hover:tw-bg-red-600 dark:hover:tw-bg-red-500 hover:tw-border-red-600 dark:hover:tw-border-red-500':
                    props.severity === 'danger' &&
                    !props.text &&
                    !props.outlined &&
                    !props.plain,
            },
            { 'tw-shadow-lg': props.raised },
            {
                'tw-rounded-md': !props.rounded,
                'tw-rounded-full': props.rounded,
                'tw-aspect-square': props.label == null && props.rounded,
            },
            {
                'tw-bg-transparent tw-border-transparent':
                    props.text && !props.plain,
                'tw-text-blue-500 dark:tw-text-blue-400 hover:bg-blue-300/20':
                    props.text &&
                    (props.severity === null || props.severity === 'info') &&
                    !props.plain,
                'tw-text-slate-500 dark:tw-text-slate-400 hover:bg-slate-300/20':
                    props.text &&
                    props.severity === 'secondary' &&
                    !props.plain,
                'tw-text-green-500 dark:tw-text-green-400 hover:bg-green-300/20':
                    props.text && props.severity === 'success' && !props.plain,
                'tw-text-orange-500 dark:tw-text-orange-400 hover:bg-orange-300/20':
                    props.text && props.severity === 'warning' && !props.plain,
                'tw-text-purple-500 dark:tw-text-purple-400 hover:bg-purple-300/20':
                    props.text && props.severity === 'help' && !props.plain,
                'tw-text-red-500 dark:tw-text-red-400 hover:bg-red-300/20':
                    props.text && props.severity === 'danger' && !props.plain,
            },
            { 'tw-shadow-lg': props.raised && props.text },
            {
                'tw-text-slate-500 hover:bg-slate-300/20':
                    props.plain && props.text,
                'tw-text-slate-500 tw-border tw-border-slate-500 hover:bg-slate-300/20':
                    props.plain && props.outlined,
                'tw-text-slate-50 tw-bg-slate-500 tw-border tw-border-slate-500 hover:tw-bg-slate-600 hover:tw-border-slate-600':
                    props.plain && !props.outlined && !props.text,
            },
            {
                'tw-bg-transparent tw-border': props.outlined && !props.plain,
                'tw-text-primary dark:tw-text-primary tw-border tw-border-primary dark:tw-border-primary hover:tw-bg-primary/20':
                    props.outlined && props.severity === null && !props.plain,
                'tw-text-blue-500 dark:tw-text-blue-400 tw-border tw-border-blue-500 dark:tw-border-blue-400 hover:tw-bg-blue-300/20':
                    props.outlined && props.severity === 'info' && !props.plain,
                'tw-text-slate-500 dark:tw-text-slate-400 tw-border tw-border-slate-500 dark:tw-border-slate-400 hover:tw-bg-slate-300/20':
                    props.outlined &&
                    props.severity === 'secondary' &&
                    !props.plain,
                'tw-text-green-500 dark:tw-text-green-400 tw-border tw-border-green-500 dark:tw-border-green-400 hover:tw-bg-green-300/20':
                    props.outlined &&
                    props.severity === 'success' &&
                    !props.plain,
                'tw-text-orange-500 dark:tw-text-orange-400 tw-border tw-border-orange-500 dark:tw-border-orange-400 hover:tw-bg-orange-300/20':
                    props.outlined &&
                    props.severity === 'warning' &&
                    !props.plain,
                'tw-text-purple-500 dark:tw-text-purple-400 tw-border tw-border-purple-500 dark:tw-border-purple-400 hover:tw-bg-purple-300/20':
                    props.outlined && props.severity === 'help' && !props.plain,
                'tw-text-red-500 dark:tw-text-red-400 tw-border tw-border-red-500 dark:tw-border-red-400 hover:tw-bg-red-300/20':
                    props.outlined &&
                    props.severity === 'danger' &&
                    !props.plain,
            },
            {
                'tw-px-4 tw-py-2 tw-text-base': props.size === null,
                'tw-text-xs tw-py-2 tw-px-3': props.size === 'small',
                'tw-text-xl tw-py-3 tw-px-4': props.size === 'large',
            },
            {
                'tw-flex-column':
                    props.iconPos == 'top' || props.iconPos == 'bottom',
            },
            {
                'tw-opacity-60 tw-pointer-events-none tw-cursor-default':
                    context.disabled,
            },
        ],
    }),
    label: ({ props }) => ({
        class: [
            'tw-flex-1',
            'tw-duration-300',
            'tw-font-semibold',
            {
                'hover:tw-underline': props.link,
            },
            { 'tw-invisible tw-w-0': props.label == null },
        ],
    }),
    loadingIcon: 'tw-mr-2',
    icon: ({ props }) => ({
        class: [
            'tw-mx-0',
            {
                'tw-mr-2': props.iconPos == 'left' && props.label != null,
                'tw-ml-2 tw-order-1':
                    props.iconPos == 'right' && props.label != null,
                'tw-mb-2': props.iconPos == 'top' && props.label != null,
                'tw-mt-2 tw-order-2':
                    props.iconPos == 'bottom' && props.label != null,
            },
        ],
    }),
    badge: ({ props }) => ({
        class: [
            {
                'tw-ml-2 tw-w-4 tw-h-4 tw-leading-none tw-flex tw-items-center tw-justify-center':
                    props.badge,
            },
        ],
    }),
};

const checkboxTheme = {
    root: {
        class: 'tw-inline-flex tw-relative tw-select-none tw-cursor-pointer',
    },
    input: ({ props, context }) => ({
        class: [
            'tw-border-2 tw-w-5 tw-h-5 tw-text-slate-600 tw-rounded-md tw-transition-colors tw-duration-300',
            {
                'tw-border-slate-300 tw-bg-slate-50 dark:tw-border-slate-700 dark:tw-bg-slate-900':
                    !context.checked,
                'tw-border-primary-dark tw-bg-primary': context.checked,
            },
            {
                'hover:tw-border-primary hover:dark:tw-border-primary-dark':
                    !props.disabled,
                'tw-cursor-default tw-opacity-60': props.disabled,
            },
            {
                'dark:tw-ring-offset-slate-800 tw-outline-none tw-ring-2 tw-ring-primary/80 tw-ring-offset-1':
                    context.focused,
            },
        ],
    }),
    icon: 'tw-w-3 tw-h-3 tw-text-slate-50 dark-tw-text-slate-900',
};

const colorpickerTheme = {
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
            'tw-text-base tw-text-slate-600 tw-bg-slate-50 dark:tw-bg-slate-900 tw-p-3 tw-border tw-border-slate-300 dark:tw-border-blue-900/40 tw-transition-colors tw-duration-300 tw-rounded-lg tw-cursor-pointer',
            'hover:tw-border-primary/80 focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
            'tw-w-8 tw-h-8',
        ],
    },
    panel: ({ props }) => ({
        class: [
            'tw-shadow-md',
            'tw-bg-slate-800 tw-border-slate-900',
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
    transition: TRANSITIONS.overlay,
};

const paginatorTheme = {
    root: {
        class: [
            'tw-duration-300 tw-transition',
            'tw-flex tw-items-center tw-justify-center tw-flex-wrap',
            'tw-bg-slate-100 tw-text-slate-500 tw-border-0 tw-px-4 tw-pt-2 tw-rounded-md',
            'dark:tw-bg-slate-800 dark:tw-text-slate-50/60 dark:tw-border-primary/40', // Dark Mode
        ],
    },
    firstpagebutton: ({ context }) => ({
        class: [
            'tw-relative tw-inline-flex tw-items-center tw-justify-center tw-user-none tw-overflow-hidden tw-leading-none',
            'tw-border-0 tw-text-slate-500  tw-min-w-[3rem] tw-h-12 tw-m-[0.143rem] tw-rounded-md',
            'tw-transition tw-duration-300',
            'dark:tw-text-slate-50', //Dark Mode
            {
                'tw-cursor-default tw-pointer-events-none tw-opacity-60':
                    context.disabled,
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1':
                    !context.disabled, // Focus
            },
        ],
    }),
    previouspagebutton: ({ context }) => ({
        class: [
            'tw-relative tw-inline-flex tw-items-center tw-justify-center tw-user-none tw-overflow-hidden tw-leading-none',
            'tw-border-0 tw-text-slate-500 tw-min-w-[3rem] tw-h-12 tw-m-[0.143rem] tw-rounded-md',
            'tw-transition tw-duration-300',
            'dark:tw-text-slate-50', //Dark Mode
            {
                'tw-cursor-default tw-pointer-events-none tw-opacity-60':
                    context.disabled,
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1':
                    !context.disabled, // Focus
            },
        ],
    }),
    nextpagebutton: ({ context }) => ({
        class: [
            'tw-relative tw-inline-flex tw-items-center tw-justify-center tw-user-none tw-overflow-hidden tw-leading-none',
            'tw-border-0 tw-text-slate-500 tw-min-w-[3rem] tw-h-12 tw-m-[0.143rem] tw-rounded-md',
            'tw-transition tw-duration-300',
            'dark:tw-text-slate-50', //Dark Mode
            {
                'tw-cursor-default tw-pointer-events-none tw-opacity-60':
                    context.disabled,
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1':
                    !context.disabled, // Focus
            },
        ],
    }),
    lastpagebutton: ({ context }) => ({
        class: [
            'tw-relative tw-inline-flex tw-items-center tw-justify-center tw-user-none tw-overflow-hidden tw-leading-none',
            'tw-border-0 tw-text-slate-500 tw-min-w-[3rem] tw-h-12 tw-m-[0.143rem] tw-rounded-md',
            'tw-transition tw-duration-300',
            'dark:tw-text-slate-50', //Dark Mode
            {
                'tw-cursor-default tw-pointer-events-none tw-opacity-60':
                    context.disabled,
                'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1':
                    !context.disabled, // Focus
            },
        ],
    }),
    pagebutton: ({ context }) => ({
        class: [
            'tw-relative tw-inline-flex tw-items-center tw-justify-center tw-user-none tw-overflow-hidden tw-leading-none',
            'tw-border-0 tw-min-w-[3rem] tw-h-12 tw-m-[0.143rem] tw-rounded-md',
            'tw-transition tw-duration-300',
            'dark:tw-border-primary/40 dark:tw-text-slate-50', // Dark Mode
            'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1', // Focus
            {
                'tw-bg-primary/60 tw-border-primary tw-text-slate-50 dark:tw-bg-primary/60':
                    context.active,
                'tw-text-slate-500 dark:tw-text-slate-50': !context.active,
            },
        ],
    }),
    rowperpagedropdown: {
        root: ({ props, state }) => ({
            class: [
                'tw-inline-flex tw-relative tw-cursor-pointer tw-user-none',
                'tw-bg-slate-100 tw-border tw-rounded-md',
                'tw-transition tw-duration-300',
                'tw-h-12 tw-mx-2',
                'dark:tw-bg-slate-800 dark:tw-border-primary/40', //DarkMode
                {
                    'dark:tw-ring-offset-slate-800 tw-outline-none tw-ring-2 tw-ring-primary/80 tw-ring-offset-1':
                        state.focused && !props.disabled, //Focus
                    'tw-border-slate-300': !state.focused,
                    'hover:tw-border-primary-dark': !props.disabled, //Hover
                },
            ],
        }),
        input: {
            class: [
                'tw-text-base tw-text-slate-600 tw-p-3 tw-m-0 tw-rounded-md apperance-none',
                'tw-block tw-whitespace-nowrap tw-overflow-hidden tw-flex-auto tw-w-[1%] tw-cursor-pointer tw-text-ellipsis tw-border-0 tw-pr-0',
                'focus:tw-outline-none focus:outline-offset-0',
                'dark:tw-text-slate-50', //Dark Mode
            ],
        },
        trigger: {
            class: [
                'tw-flex tw-items-center tw-justify-center tw-shrink-0',
                'tw-text-slate-500 dark:tw-text-slate-50 tw-w-12 tw-rounded-r-md',
            ],
        },
        panel: {
            class: [
                'tw-bg-slate-100 tw-text-slate-600 tw-border-1 tw-rounded-md tw-shadow',
                'dark:tw-bg-slate-800 dark:tw-text-slate-50 dark:tw-border-primary/40', //Dark Mode
            ],
        },
        wrapper: 'tw-overflow-auto',
        list: 'tw-m-0 tw-p-0 tw-py-3 tw-list-none',
        item: ({ context }) => ({
            class: [
                'tw-relative tw-font-normal tw-cursor-pointer space-nowrap tw-overflow-hidden',
                'tw-m-0 tw-py-3 tw-px-5 tw-border-none tw-text-slate-600 tw-rounded-none',
                'tw-transition tw-duration-300',
                'dark:tw-text-slate-50/80', // Dark Mode
                {
                    'tw-text-blue-700 tw-bg-blue-50 dark:text-slate-50/80 dark:tw-bg-primary':
                        !context.focused && context.selected,
                    'tw-bg-primary/40': context.focused && context.selected,
                    'tw-text-slate-600 tw-bg-slate-300 dark:text-slate-50/80 dark:bg-primary/40':
                        context.focused && !context.selected,
                },
            ],
        }),
    },
    jumptopageinput: {
        root: 'tw-inline-flex tw-mx-2',
        input: {
            class: [
                'tw-text-base tw-text-slate-600 tw-p-3 tw-m-0 tw-rounded-md apperance-none',
                'tw-block tw-whitespace-nowrap tw-overflow-hidden tw-flex-auto tw-w-[1%] tw-cursor-pointer text-ellipsis tw-border tw-border-slate-300 tw-pr-0',
                'focus:tw-outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:tw-border-blue-300',
                'dark:tw-text-slate-50 dark:bg-slate-950 dark:tw-border-blue-900/40', //Dark Mode
                'tw-m-0 tw-flex-auto tw-max-w-[3rem]',
            ],
        },
    },
    jumptopagedropdown: {
        root: ({ props, state }) => ({
            class: [
                'tw-inline-flex tw-relative tw-cursor-pointer tw-user-none',
                'tw-bg-slate-100 tw-border tw-rounded-md',
                'tw-transition tw-duration-300',
                'tw-h-12 tw-mx-2',
                'dark:bg-slate-950 dark:tw-border-blue-900/40', //DarkMode
                {
                    'dark:tw-ring-offset-slate-800 tw-outline-none tw-ring-2 tw-ring-primary/80 tw-ring-offset-1':
                        state.focused && !props.disabled, //Focus
                    'tw-border-slate-300': !state.focused,
                    'hover:tw-border-blue-500': !props.disabled, //Hover
                },
            ],
        }),
        input: {
            class: [
                'tw-text-base tw-text-slate-600 tw-p-3 tw-m-0 tw-rounded-md tw-appearance-none',
                'tw-block tw-whitespace-nowrap tw-overflow-hidden tw-flex-auto tw-w-[1%] tw-cursor-pointer text-ellipsis tw-border-0 tw-pr-0',
                'focus:tw-outline-none focus:outline-offset-0',
                'dark:tw-text-slate-50', //Dark Mode
            ],
        },
        trigger: {
            class: [
                'tw-flex tw-items-center tw-justify-center shrink-0',
                'tw-text-slate-500 dark:tw-text-slate-50 tw-w-12 tw-rounded-r-md',
            ],
        },
        panel: {
            class: [
                'tw-bg-slate-100 tw-text-slate-600 tw-border-0 tw-rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                'dark:tw-bg-slate-900 dark:text-slate-50/80 dark:tw-border-blue-900/40', //Dark Mode
            ],
        },
        wrapper: 'tw-overflow-auto',
        list: 'tw-m-0 tw-p-0 tw-py-3 tw-list-none',
        item: ({ context }) => ({
            class: [
                'tw-relative tw-font-normal tw-cursor-pointer space-nowrap tw-overflow-hidden',
                'tw-m-0 tw-py-3 tw-px-5 tw-border-none tw-text-slate-600 tw-rounded-none',
                'tw-transition tw-duration-300',
                'dark:text-slate-50/80', // Dark Mode
                {
                    'tw-text-blue-700 tw-bg-blue-50 dark:text-slate-50/80 dark:tw-bg-blue-300':
                        !context.focused && context.selected,
                    'bg-blue-300/40': context.focused && context.selected,
                    'tw-text-slate-600 tw-bg-slate-300 dark:text-slate-50/80 dark:bg-blue-900/40':
                        context.focused && !context.selected,
                },
            ],
        }),
    },
};

const datatableTheme = {
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
            'tw-fixed tw-w-full tw-h-full tw-t-0 tw-l-0 tw-bg-slate-100/40',
            'tw-transition tw-duration-300',
            'tw-absolute tw-flex tw-items-center tw-justify-center tw-z-2',
            'dark:tw-bg-slate-800/40', // Dark Mode
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
            'tw-bg-slate-100 tw-text-slate-700 tw-border-slate-300 tw-pb-4',
            'dark:tw-border-primary/40 dark:text-slate-50/80 dark:tw-bg-slate-800', // Dark Mode
            props.showGridlines
                ? 'tw-border-x tw-border-t tw-border-b-0'
                : 'tw-border-b tw-border-x-0',
        ],
    }),
    table: 'tw-w-full tw-border-spacing-0',
    thead: ({ context }) => ({
        class: [
            'tw-bg-slate-50 dark:tw-bg-slate-800',
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
                'tw-bg-slate-100 tw-bottom-0 tw-z-[1]': context.scrollable,
            },
        ],
    }),
    footer: {
        class: [
            'tw-duration-300 tw-transition',
            'tw-bg-slate-100 tw-text-slate-700 tw-border-t-0 tw-border-b tw-border-x-0 tw-border-slate-300 tw-p-4',
            'dark:tw-border-primary/40 dark:tw-text-slate-50/80 dark:tw-bg-slate-800', // Dark Mode
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
                    : 'tw-bg-slate-100 tw-text-slate-700', // Sort
                context.sorted
                    ? 'dark:tw-text-slate-50/80 dark:tw-bg-primary/10'
                    : 'dark:tw-text-slate-50/80 dark:tw-bg-slate-800', // Dark Mode
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
                'dark:tw-text-slate-50/80 dark:tw-border-primary/40', // Dark Mode
                {
                    'tw-sticky bg-inherit': props.frozen || props.frozen === '', // Frozen Columns
                    'border-x border-y': context?.showGridlines,
                },
            ],
        }),
        footercell: ({ context }) => ({
            class: [
                'tw-text-left tw-border-0 tw-border-b tw-border-solid tw-border-slate-300 tw-font-bold',
                'tw-bg-slate-100 tw-text-slate-700',
                'tw-transition tw-duration-300',
                context?.size === 'small'
                    ? 'tw-p-2'
                    : context?.size === 'large'
                      ? 'tw-p-5'
                      : 'tw-p-4', // Size
                'dark:tw-text-slate-50/80 dark:tw-bg-slate-900 dark:tw-border-primary/40', // Dark Mode
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
                'dark:tw-text-slate-50/80 dark:tw-bg-primary', // Dark Mode
            ],
        },
        columnfilter: 'tw-inline-flex tw-items-center tw-ml-auto',
        filteroverlay: {
            class: [
                'tw-bg-slate-100 tw-text-slate-600 tw-border-0 tw-rounded-md tw-min-w-[12.5rem]',
                'dark:tw-bg-slate-900 dark:tw-border-blue-900/40 dark:tw-text-slate-50/80', //Dark Mode
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
                    : 'tw-text-slate-600 tw-bg-transparent dark:tw-text-slate-50/80 dark:tw-bg-transparent',
            ],
        }),
        filteroperator: {
            class: [
                'tw-px-5 tw-py-3 tw-border-b tw-border-solid tw-border-slate-300 text-slate-700 tw-bg-slate-100 tw-rounded-t-md',
                'dark:tw-border-blue-900/40 dark:text-slate-50/80 dark:tw-bg-slate-900', // Dark Mode
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
                'focus:tw-outline-0 focus:tw-outline-offset-0 focus:tw-shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
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
                'focus:tw-outline-0 focus:tw-outline-offset-0 focus:tw-shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
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
                'focus:tw-outline-0 focus:tw-outline-offset-0 focus:tw-shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
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
                'focus:tw-outline-0 focus:tw-outline-offset-0 focus:tw-shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
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
                    'hover:tw-border-blue-500 dark:hover:tw-border-blue-400 focus:tw-outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
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
                    ? 'tw-border-blue-500 tw-bg-blue-500 dark:tw-border-blue-400 dark:tw-bg-blue-400'
                    : 'tw-border-slate-300 tw-bg-slate-100 dark:tw-border-blue-900/40 dark:tw-bg-slate-900',
                {
                    'hover:tw-border-blue-500 dark:hover:tw-border-blue-400 focus:tw-outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
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
                    : 'tw-border-slate-300 tw-bg-slate-100 dark:tw-border-blue-900/40 dark:tw-bg-slate-900',
                {
                    'hover:tw-border-blue-500 dark:hover:tw-border-blue-400 focus:tw-outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                        !context.disabled,
                    'tw-cursor-default tw-opacity-60': context.disabled,
                },
            ],
        }),
        checkboxicon:
            'tw-w-4 tw-h-4 tw-transition-all tw-duration-300 tw-text-slate-50 tw-text-base dark:tw-text-slate-900',
        transition: TRANSITIONS.overlay,
    },
    bodyrow: ({ context }) => ({
        class: [
            context.selected
                ? 'tw-bg-blue-50 tw-text-primary dark:tw-bg-primary/40'
                : 'tw-bg-slate-100 tw-text-slate-600 dark:tw-bg-slate-800',
            context.stripedRows
                ? context.index % 2 === 0
                    ? 'tw-bg-slate-100 tw-text-slate-600 dark:tw-bg-slate-800'
                    : 'tw-bg-slate-200/50 tw-text-slate-600 dark:tw-bg-slate-900/50'
                : '',
            'tw-transition tw-duration-300',
            'focus:tw-outline focus:tw-outline-[0.15rem] focus:tw-outline-primary/80 focus:tw-outline-offset-[-0.15rem]', // Focus
            'dark:text-slate-50/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-blue-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
            {
                'tw-cursor-pointer': context.selectable,
                'hover:bg-slate-300/20 hover:tw-text-slate-600':
                    context.selectable && !context.selected, // Hover
            },
        ],
    }),
    rowexpansion:
        'tw-bg-slate-100 tw-text-slate-600 dark:tw-bg-slate-900 dark:text-slate-50/80',
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
    paginator: paginatorTheme,
};

const dialogTheme = {
    root: ({ state }) => ({
        class: [
            'tw-rounded-lg tw-shadow-lg tw-border-0',
            'tw-max-h-[90%] tw-transform tw-scale-100',
            'tw-m-0 tw-w-[50vw]',
            'dark:tw-border dark:tw-border-primary/40',
            {
                'tw-transition-none tw-transform-none !tw-w-screen !tw-h-screen !tw-max-h-full !tw-top-0 !tw-left-0':
                    state.maximized,
            },
        ],
    }),
    header: {
        class: [
            'tw-flex tw-items-center tw-justify-between tw-shrink-0',
            'tw-text-slate-800 tw-border-t-0  tw-rounded-tl-lg tw-rounded-tr-lg tw-p-6',
            'tw-bg-slate-50 dark:tw-bg-slate-800 dark:tw-text-slate-50/80',
            'tw-font-bold tw-text-lg',
        ],
    },
    headerIcons: {
        class: 'tw-flex tw-items-center',
    },
    maximizableButton: {
        class: [
            'tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative',
            'tw-w-8 tw-h-8 tw-text-slate-500 tw-border-0 tw-bg-transparent tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2 last:tw-mr-0',
            'hover:tw-bg-slate-400/20 dark:hover:tw-bg-slate-700/80',
            'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1', // focus
            'dark:hover:tw-text-slate-50/80 dark:hover:tw-border-transparent',
        ],
    },
    closeButton: {
        class: [
            'tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative',
            'tw-w-8 tw-h-8 tw-text-slate-500 tw-border-0 tw-bg-transparent tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2 last:tw-mr-0',
            'hover:tw-bg-slate-400/20 dark:hover:tw-bg-slate-700/80',
            'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1', // focus
            'dark:hover:tw-text-slate-50/80 dark:hover:tw-border-transparent',
        ],
    },
    closeButtonIcon: {
        class: 'tw-w-4 tw-h-4 tw-inline-block',
    },
    content: ({ state, instance }) => ({
        class: [
            'primary-scrollbar',
            'tw-text-slate-700 tw-px-6 tw-pb-8 tw-pt-0',
            'tw-bg-slate-50 dark:tw-bg-slate-800 dark:tw-text-slate-50/80',
            {
                'tw-grow': state.maximized,
            },
            {
                'tw-rounded-bl-lg tw-rounded-br-lg': !instance.$slots.footer,
            },
        ],
    }),
    footer: {
        class: [
            'tw-flex tw-gap-2 tw-shrink-0 tw-justify-end tw-align-middle',
            'tw-border-t-0 tw-text-slate-700 tw-px-6 tw-pb-6 tw-text-right tw-rounded-b-lg',
            'tw-bg-slate-50 dark:tw-bg-slate-800 dark:text-slate-50/80',
        ],
    },
    mask: ({ props }) => ({
        class: [
            'tw-transition tw-duration-300',
            { 'tw-bg-slate-950/40': props.modal },
        ],
    }),
    transition: ({ props }) => {
        return props.position === 'top'
            ? {
                  enterFromClass:
                      'tw-opacity-0 tw-scale-75 tw-translate-x-0 -tw-translate-y-full tw-translate-z-0',
                  enterActiveClass:
                      'tw-transition-all tw-duration-300 tw-ease-out',
                  leaveActiveClass:
                      'tw-transition-all tw-duration-300 tw-ease-out',
                  leaveToClass:
                      'tw-opacity-0 tw-scale-75 tw-translate-x-0 -tw-translate-y-full tw-translate-z-0',
              }
            : props.position === 'bottom'
              ? {
                    enterFromClass:
                        'tw-opacity-0 tw-scale-75 tw-translate-y-full',
                    enterActiveClass:
                        'tw-transition-all tw-duration-300 tw-ease-out',
                    leaveActiveClass:
                        'tw-transition-all tw-duration-300 tw-ease-out',
                    leaveToClass:
                        'tw-opacity-0 tw-scale-75 tw-translate-x-0 tw-translate-y-full translate-z-0',
                }
              : props.position === 'left' ||
                  props.position === 'topleft' ||
                  props.position === 'bottomleft'
                ? {
                      enterFromClass:
                          'tw-opacity-0 tw-scale-75 -tw-translate-x-full tw-translate-y-0 tw-translate-z-0',
                      enterActiveClass:
                          'tw-transition-all tw-duration-300 tw-ease-out',
                      leaveActiveClass:
                          'tw-transition-all tw-duration-300 tw-ease-out',
                      leaveToClass:
                          'tw-opacity-0 tw-scale-75  -tw-translate-x-full tw-translate-y-0 tw-translate-z-0',
                  }
                : props.position === 'right' ||
                    props.position === 'topright' ||
                    props.position === 'bottomright'
                  ? {
                        enterFromClass:
                            'tw-opacity-0 tw-scale-75 tw-translate-x-full tw-translate-y-0 tw-translate-z-0',
                        enterActiveClass:
                            'tw-transition-all tw-duration-300 tw-ease-out',
                        leaveActiveClass:
                            'tw-transition-all tw-duration-300 tw-ease-out',
                        leaveToClass:
                            'tw-opacity-0 tw-scale-75 tw-opacity-0 tw-scale-75 tw-translate-x-full tw-translate-y-0 tw-translate-z-0',
                    }
                  : {
                        enterFromClass: 'tw-opacity-0 tw-scale-75',
                        enterActiveClass:
                            'tw-transition-all tw-duration-300 tw-ease-out',
                        leaveActiveClass:
                            'tw-transition-all tw-duration-300 tw-ease-out',
                        leaveToClass: 'tw-opacity-0 tw-scale-75',
                    };
    },
};

const dropdownTheme = {
    root: ({ props }) => ({
        class: [
            // Display and Position
            'tw-inline-flex',
            'tw-relative',

            // Shape
            'tw-w-full',
            'tw-rounded-full',

            // Color and Background
            'tw-bg-slate-50 dark:tw-bg-slate-900',
            'tw-border tw-border-slate-300 dark:tw-border-slate-700 tw-text-slate-800 dark:tw-text-slate-300',

            // Transitions
            'tw-transition-all',
            'tw-duration-300',

            // States
            'hover:tw-border-primary dark:hover:tw-border-primary',
            'focus:tw-border-primary dark:focus:tw-border-primary focus:tw-ring-primary dark:focus:tw-ring-primary',

            // Misc
            'tw-cursor-pointer',
            'tw-select-none',
            {
                'tw-opacity-60': props.disabled,
                'tw-pointer-events-none': props.disabled,
                'tw-cursor-default': props.disabled,
            },
        ],
    }),
    input: ({ props }) => ({
        class: [
            // Display
            'tw-block',
            'tw-flex-auto',

            // Color and Background
            'tw-text-slate-800 dark:tw-text-slate-300',
            'tw-bg-transparent',

            // Sizing and Spacing
            'w-[1%]',
            'tw-p-3 tw-pl-5',
            { 'tw-pr-7': props.showClear },

            //Shape
            'tw-rounded-none',

            // Transitions
            'tw-transition',
            'tw-duration-300',

            // States
            'focus:tw-outline-none focus:tw-shadow-none',

            // Misc
            'tw-relative',
            'tw-cursor-pointer',
            'tw-overflow-hidden tw-overflow-ellipsis',
            'tw-whitespace-nowrap',
            'tw-appearance-none',
        ],
    }),
    trigger: {
        class: [
            // Flexbox
            'tw-flex tw-items-center tw-justify-center',
            'tw-shrink-0',

            // Color and Background
            'tw-bg-transparent',
            'tw-text-slate-800 dark:tw-text-slate-300',

            // Size
            'tw-w-12',

            // Shape
            'tw-rounded-tr-md',
            'tw-rounded-br-md',
        ],
    },
    panel: {
        class: [
            // Position
            'tw-absolute tw-top-0 tw-left-0',

            // Shape
            'tw-border-0',
            'tw-shadow-lg',
            'tw-rounded-md',
            'tw-shadow-md',

            // Color
            'tw-transition tw-duration-300',
            'tw-bg-slate-50 dark:tw-bg-slate-900',
            'tw-text-slate-700 dark:tw-text-slate-50/80',
        ],
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
            'tw-overflow-auto',
        ],
    },
    list: {
        class: 'tw-py-3 tw-list-none tw-m-0',
    },
    item: ({ context }) => ({
        class: [
            // Position
            'tw-relative',

            // Shape
            'tw-border-0',
            'tw-rounded-none',

            // Spacing
            'tw-m-0',
            'tw-py-3 tw-px-5',

            // Color
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

            // Transitions
            'tw-transition',
            'tw-duration-300',

            // Misc
            'tw-cursor-pointer',
            'tw-overflow-hidden',
            'tw-whitespace-nowrap',
        ],
    }),
    itemgroup: {
        class: [
            //Font
            'tw-font-bold',

            // Spacing
            'tw-m-0',
            'tw-p-3',

            // Color
            'text-surface-800 dark:text-slate-50/80',
            'bg-surface-0 dark:bg-surface-600/80',

            // Misc
            'tw-cursor-auto',
        ],
    },
    emptymessage: {
        class: [
            // Font
            'tw-leading-none',

            // Spacing
            'tw-py-3 tw-px-5',

            // Color
            'text-surface-800 dark:text-slate-50/80',
            'tw-bg-transparent',
        ],
    },
    header: {
        class: [
            // Spacing
            'tw-py-3 tw-px-5',
            'tw-m-0',

            //Shape
            'tw-border-b',
            'tw-rounded-tl-md',
            'tw-rounded-tr-md',

            // Color
            'text-surface-700 dark:text-slate-50/80',
            'bg-surface-100 dark:bg-surface-800',
            'border-surface-300 dark:border-surface-700',
        ],
    },
    filtercontainer: {
        class: 'tw-relative',
    },
    filterinput: {
        class: [
            // Font
            'tw-font-sans',
            'tw-leading-none',

            // Sizing
            'tw-pr-7 tw-py-3 tw-px-3',
            'tw--mr-7',
            'tw-w-full',

            //Color
            'text-surface-700 dark:text-slate-50/80',
            'bg-surface-0 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700',

            // Shape
            'tw-border',
            'tw-rounded-lg',
            'tw-appearance-none',

            // Transitions
            'tw-transition',
            'tw-duration-300',

            // States
            'hover:border-primary-500 dark:hover:border-primary-300',
            'focus:tw-ring focus:tw-outline-none focus:outline-offset-0',
            'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Misc
            'tw-appearance-none',
        ],
    },
    filtericon: {
        class: ['tw-absolute', 'tw-top-1/2', 'tw--mt-2'],
    },
    clearicon: {
        class: [
            // Color
            'text-surface-500',

            // Position
            'tw-absolute',
            'tw-top-1/2',
            'tw-right-12',

            // Spacing
            'tw--mt-2',
        ],
    },
    transition: TRANSITIONS.overlay,
};

const imageTheme = {
    root: 'tw-relative tw-inline-block',
    image: 'tw-w-full tw-h-full tw-rounded tw-object-cover',
    preview: 'tw-rounded',
    button: {
        class: [
            'tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-opacity-0 tw-transition-opacity tw-duration-300',
            'tw-bg-transparent tw-text-slate-100',
            'hover:tw-opacity-100 hover:tw-cursor-pointer hover:tw-bg-slate-900 hover:tw-bg-opacity-50', //Hover
        ],
    },
    mask: {
        class: [
            'tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full',
            'tw-flex tw-items-center tw-justify-center',
            'tw-bg-slate-900 tw-bg-opacity-90',
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
            'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
        ],
    },
    rotaterighticon: 'tw-w-6 tw-h-6',
    rotateleftbutton: {
        class: [
            'tw-flex tw-justify-center tw-items-center',
            'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
            'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
            'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
        ],
    },
    rotatelefticon: 'tw-w-6 tw-h-6',
    zoomoutbutton: {
        class: [
            'tw-flex tw-justify-center tw-items-center',
            'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
            'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
            'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
        ],
    },
    zoomouticon: 'tw-w-6 tw-h-6',
    zoominbutton: {
        class: [
            'tw-flex tw-justify-center tw-items-center',
            'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
            'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
            'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
        ],
    },
    zoominicon: 'tw-w-6 tw-h-6',
    closebutton: {
        class: [
            'tw-flex tw-justify-center tw-items-center',
            'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
            'hover:tw-text-slate-50 hover:bg-slate-50/10',
            'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
        ],
    },
    closeicon: 'tw-w-6 tw-h-6',
    transition: TRANSITIONS.overlay,
};

const inputswitchTheme = {
    root: {
        class: ['tw-relative', 'tw-w-12 tw-h-7'],
    },
    slider: ({ props, state }) => ({
        class: [
            {
                'tw-bg-slate-200 dark:tw-bg-slate-700': !props.modelValue,
                'tw-bg-primary dark:tw-bg-primary before:tw-translate-x-5':
                    props.modelValue,
            },
            'tw-absolute tw-rounded-full tw-transition tw-duration-300',
            'before:tw-transition before:tw-duration-300 before:tw-bg-slate-50 dark:before:tw-bg-slate-900 before:tw-w-5 before:tw-h-5 before:tw-rounded-full before:tw-left-1 before:tw-translate-y-[-50%]',
            'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
            {
                'dark:tw-ring-offset-slate-800 tw-outline-none tw-ring-2 tw-ring-primary/80 tw-ring-offset-1':
                    state.focused,
            },
        ],
    }),
};

const inputtextTheme = {
    root: ({ context }) => ({
        class: [
            'tw-duration-300 tw-ease-in-out tw-rounded-full tw-shadow-sm tw-w-full',
            'tw-border-slate-300 dark:tw-bg-slate-900 dark:tw-border-slate-700 dark:tw-text-slate-300',
            'focus:tw-border-primary dark:focus:tw-border-primary focus:tw-ring-primary dark:focus:tw-ring-primary',
            {
                'hover:tw-border-primary/80 dark:hover:tw-border-primary/80 focus:tw-outline-none focus:tw-outline-offset-0':
                    !context.disabled,
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    context.disabled,
            },
        ],
    }),
};

const multiselectTheme = {
    root: ({ props }) => ({
        class: [
            'tw-w-full tw-inline-flex tw-cursor-pointer tw-select-none tw-rounded-md',
            'tw-bg-slate-50 dark:tw-bg-slate-900 tw-border tw-border-slate-300 dark:tw-border-slate-700',
            'tw-transition-colors tw-duration-300 tw-ease-in-out tw-shadow-sm',
            'hover:tw-border-primary dark:hover:tw-border-primary',
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    props?.disabled,
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
            'hover:tw-border-primary focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
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
            'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
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
            'hover:tw-border-primary focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
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
            'hover:tw-border-primary focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
        ],
    },
    filtericon: {
        class: '-tw-mt-2 tw-absolute tw-top-1/2',
    },
    clearicon: {
        class: 'tw-text-slate-500 tw-right-12 -tw-mt-2 tw-absolute tw-top-1/2',
    },
    transition: TRANSITIONS.overlay,
};

const passwordTheme = {
    root: ({ props }) => ({
        class: [
            'tw-inline-flex tw-relative tw-p-0 tw-rounded-full tw-border-none tw-bg-transparent',
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    props.disabled,
            },
        ],
    }),
    panel: 'tw-p-5 tw-bg-slate-50 dark:tw-bg-slate-900 tw-text-slate-700 dark:tw-text-slate-50/80 tw-shadow-md tw-rounded-md',
    meter: 'tw-mb-2 tw-bg-slate-300 dark:tw-bg-slate-700 tw-h-3',
    meterlabel: ({ instance, props }) => ({
        class: [
            'tw-transition tw-duration-1000 tw-ease-in-out tw-h-full',
            {
                'tw-bg-red-500': instance?.meter?.strength == 'weak',
                'tw-bg-orange-500': instance?.meter?.strength == 'medium',
                'tw-bg-green-500': instance?.meter?.strength == 'strong',
            },
            { 'tw-pr-[2.5rem] ': props.toggleMask },
        ],
    }),
    showicon: {
        class: [
            'tw-absolute tw-top-1/2 -tw-mt-2',
            'tw-right-3 tw-text-slate-600 dark:tw-text-slate-400',
        ],
    },
    hideicon: {
        class: [
            'tw-absolute tw-top-1/2 -tw-mt-2',
            'tw-right-3 tw-text-slate-600 dark:tw-text-slate-400',
        ],
    },
    transition: TRANSITIONS.overlay,
};

const selectbuttonTheme = {
    root: ({ props }) => ({
        class: [
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    props.disabled,
            },
        ],
    }),
    button: ({ context }) => ({
        class: [
            'tw-inline-flex tw-cursor-pointer tw-select-none tw-items-center tw-align-bottom tw-text-center tw-overflow-hidden tw-relative',
            'tw-px-4 tw-py-3',
            'tw-transition tw-duration-300 tw-border tw-border-r-0',
            'first:tw-rounded-l-full first:tw-rounded-tr-none first:tw-rounded-br-none last:tw-border-r last:tw-rounded-tl-none last:tw-rounded-bl-none last:tw-rounded-r-full',
            'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
            {
                'tw-bg-slate-50 dark:tw-bg-slate-900 tw-text-slate-700 dark:tw-text-slate-50/80 tw-border-slate-300 dark:tw-border-primary-dark/40 hover:tw-bg-slate-50 dark:hover:tw-bg-slate-800/80 ':
                    !context.active,
                'tw-bg-primary tw-border-primary tw-text-slate-50 hover:tw-bg-primary-dark':
                    context.active,
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    context.disabled,
            },
        ],
    }),
    label: 'tw-font-bold',
};

const sliderTheme = {
    root: ({ props }) => ({
        class: [
            'tw-h-1 tw-rounded-full',
            'tw-transition tw-duration-300',
            'tw-bg-slate-200 dark:tw-bg-slate-800',
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    props.disabled,
            },
        ],
    }),
    handle: {
        class: [
            'tw-transition tw-duration-300',
            'tw-w-2 tw-h-3 tw-rounded-full tw-outline-none',
            'tw-bg-slate-50 dark:tw-bg-slate-900 tw-border-primary-dark tw-border-2',
            'tw-translate-x-[-50%] tw-translate-y-[-50%]',
            'focus:dark:tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1',
        ],
    },
    range: { class: 'tw-bg-primary tw-h-full tw-rounded-full' },
};

const splitterTheme = {
    root: () => ({
        class: [
            'tw-bg-slate-50 dark:tw-bg-slate-800 tw-rounded-lg tw-transition tw-duration-300',
        ],
    }),

    gutter: ({ props }) => ({
        class: [
            'tw-flex tw-items-center tw-justify-center tw-shrink-0 tw-rounded-full',
            'tw-transition-all tw-duration-300 tw-bg-slate-100 dark:tw-bg-slate-700',
            {
                'cursor-col-resize': props.layout == 'horizontal',
                'cursor-row-resize': props.layout !== 'horizontal',
            },
        ],
    }),
    gutterhandler: ({ props }) => ({
        class: [
            'tw-bg-slate-300 dark:tw-bg-slate-600 tw-transition-all tw-duration-300',
            {
                'tw-h-7': props.layout == 'horizontal',
                'tw-w-7 tw-h-2': props.layout !== 'horizontal',
            },
        ],
    }),
};

const tabviewTheme = {
    navContainer: ({ props }) => ({
        class: [
            'tw-relative', // Relative positioning.
            { 'tw-overflow-hidden': props.scrollable }, // Overflow condition.
        ],
    }),
    navContent: {
        class: 'tw-overflow-y-hidden tw-overscroll-contain tw-overscroll-auto tw-scroll-smooth [&::-webkit-scrollbar]:tw-hidden', // Overflow and scrollbar styles.
    },
    previousButton: {
        class: [
            'tw-h-full tw-flex tw-items-center tw-justify-center !tw-absolute tw-top-0 tw-z-20',
            'tw-left-0',
            'tw-bg-slate-50 tw-text-primary tw-w-12 tw-shadow-md tw-rounded-none',
            'dark:tw-bg-slate-800 dark:tw-border-primary/40 dark:text-slate-50/80 ]',
        ], // Flex and tw-absolute positioning styles.
    },
    nextButton: {
        class: [
            'tw-h-full tw-flex tw-items-center tw-justify-center !tw-absolute tw-top-0 tw-z-20',
            'tw-right-0',
            'tw-bg-slate-50 tw-text-primary tw-w-12 tw-shadow-md tw-rounded-none',
            'dark:tw-bg-slate-900 dark:tw-border-primary/40 dark:text-slate-50/80 ',
        ], // Flex and tw-absolute positioning styles.
    },
    nav: {
        class: [
            'tw-flex tw-flex-1 tw-justify-start tw-list-none tw-m-0 tw-p-0 tw-transition tw-duration-300',
            'tw-bg-transparent tw-border tw-border-slate-300 tw-border-0 tw-border-b-2',
            'dark:tw-border-primary/40 dark:text-slate-50/80 ',
        ], // Flex, list, margin, padding, and tw-border styles.
    },
    tabpanel: {
        header: ({ props }) => ({
            class: [
                'tw-mr-0',
                {
                    'tw-cursor-default tw-pointer-events-none tw-select-none tw-select-none tw-opacity-60':
                        props?.disabled,
                },
            ], // Margin and condition-based styles.
        }),
        headerAction: ({ parent, context }) => ({
            class: [
                'tw-items-center tw-cursor-pointer tw-flex tw-overflow-hidden tw-relative tw-select-none text-decoration-none tw-select-none', // Flex and overflow styles.
                'tw-border-b-2 tw-p-5 tw-font-bold tw-rounded-t-md tw-m-0', // Border, padding, font, and tw-transition styles.
                'tw-transition tw-duration-300', // Transition duration style.
                'focus:tw-outline-none focus:outline-offset-0', // Focus styles.
                {
                    'tw-border-slate-300 tw-bg-slate-50 tw-text-slate-700 hover:tw-bg-slate-50 hover:tw-border-slate-400 dark:tw-bg-slate-800 dark:tw-border-primary/40 dark:tw-text-slate-50/80 dark:hover:tw-bg-slate-800/80':
                        parent.state.d_activeIndex !== context.index, // Condition-based hover styles.
                    'tw-bg-slate-50 tw-border-primary tw-text-primary dark:tw-bg-slate-800 dark:tw-border-primary dark:tw-text-primary':
                        parent.state.d_activeIndex === context.index, // Condition-based active styles.
                },
            ],
            style: 'margin-bottom: -2px', // Negative margin style.
        }),
        headerTitle: {
            class: ['tw-leading-none tw-whitespace-nowrap'], // Leading and whitespace styles.
        },
        content: {
            class: [
                'tw-transition tw-duration-300',
                'tw-bg-slate-50 tw-p-5 tw-border-0 tw-text-slate-700 tw-rounded-bl-md tw-rounded-br-md',
                'dark:tw-bg-slate-800 dark:tw-border-primary/40 dark:text-slate-50/80',
            ], // Background, padding, tw-border, and text styles.
        },
    },
};

const textareaTheme = {
    root: ({ context }) => ({
        class: [
            'tw-duration-300 tw-ease-in-out tw-rounded-lg tw-shadow-sm',
            'tw-border-slate-300 dark:tw-bg-slate-900 dark:tw-border-slate-700 dark:tw-text-slate-300',
            'focus:tw-border-primary dark:focus:tw-border-primary focus:tw-ring-primary dark:focus:tw-ring-primary',
            {
                'hover:tw-border-primary/80 dark:hover:tw-border-primary/80 focus:tw-outline-none focus:tw-outline-offset-0':
                    !context.disabled,
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    context.disabled,
            },
        ],
    }),
};

const toastTheme = {
    root: {
        class: ['tw-w-96'],
    },
    container: ({ props }) => ({
        class: [
            'tw-my-4 tw-rounded-md tw-w-full tw-bg-opacity-70 dark:tw-bg-opacity-30 tw-transition tw-duration-300',
            {
                'tw-bg-blue-100 dark:tw-bg-blue-800 tw-border-solid tw-border-0 tw-border-l-4 tw-border-blue-500 tw-text-blue-500':
                    props.message.severity == 'info',
                'tw-bg-green-100 dark:tw-bg-green-800 tw-border-solid tw-border-0 tw-border-l-4 tw-border-green-500 tw-text-green-500':
                    props.message.severity == 'success',
                'tw-bg-orange-100 dark:tw-bg-orange-800 tw-border-solid tw-border-0 tw-border-l-4 tw-border-orange-500 tw-text-orange-500':
                    props.message.severity == 'warn',
                'tw-bg-red-100 dark:tw-bg-red-800 tw-border-solid tw-border-0 tw-border-l-4 tw-border-red-500 tw-text-red-500':
                    props.message.severity == 'error',
            },
        ],
    }),
    content: 'tw-flex tw-items-center tw-py-5 tw-px-7',
    icon: {
        class: ['tw-w-6 tw-h-6', 'tw-text-lg tw-mr-2'],
    },
    text: 'tw-text-base tw-font-normal tw-flex tw-flex-col tw-flex-1 tw-grow tw-shrink tw-ml-4',
    summary: 'tw-font-bold tw-block',
    detail: 'tw-mt-1 tw-block',
    closebutton: {
        class: [
            'tw-w-8 tw-h-8 tw-rounded-full tw-bg-transparent tw-transition tw-duration-300 tw-ease-in-out',
            'tw-ml-auto tw-overflow-hidden tw-relative',
            'tw-flex tw-items-center tw-justify-center',
            'hover:tw-bg-slate-50/30',
        ],
    },
    transition: TRANSITIONS.floatIn,
};

const togglebuttonTheme = {
    root: ({ props, context }) => ({
        class: [
            'tw-inline-flex tw-cursor-pointer tw-select-none tw-items-center tw-align-bottom tw-text-center tw-overflow-hidden tw-relative',
            'tw-px-4 tw-py-2 tw-rounded-full tw-text-base tw-w-32',
            'tw-border tw-transition tw-duration-300 tw-ease-in-out',
            {
                'dark:tw-ring-offset-slate-800 tw-outline-none tw-ring-2 tw-ring-primary/80 tw-ring-offset-1':
                    context.focused,
            },
            {
                'tw-bg-slate-50 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-primary/40 tw-text-slate-700 dark:tw-text-slate-50/80 hover:tw-bg-slate-100 dark:hover:tw-bg-slate-800/80 hover:tw-border-slate-300 dark:hover:tw-bg-slate-800/70 hover:tw-text-slate-700 dark:hover:tw-text-slate-50/80':
                    !props.modelValue,
                'tw-bg-primary tw-border-primary tw-text-slate-50 hover:tw-bg-primary-dark hover:tw-border-primary-dark':
                    props.modelValue,
            },
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    props.disabled,
            },
        ],
    }),
    label: () => ({
        class: ['tw-w-full', 'tw-text-center', 'tw-font-semibold'],
    }),
    icon: ({ props }) => ({
        class: [
            'tw-mr-2',
            {
                'tw-text-slate-600 dark:tw-text-slate-50/70': !props.modelValue,
                'tw-text-slate-50': props.modelValue,
            },
        ],
    }),
};

export const mainDesignSystem = {
    button: buttonTheme,
    checkbox: checkboxTheme,
    colorpicker: colorpickerTheme,
    datatable: datatableTheme,
    dialog: dialogTheme,
    dropdown: dropdownTheme,
    image: imageTheme,
    inputtext: inputtextTheme,
    inputswitch: inputswitchTheme,
    multiselect: multiselectTheme,
    password: passwordTheme,
    selectbutton: selectbuttonTheme,
    slider: sliderTheme,
    splitter: splitterTheme,
    tabview: tabviewTheme,
    textarea: textareaTheme,
    toast: toastTheme,
    togglebutton: togglebuttonTheme,
};
