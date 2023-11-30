export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'tw-opacity-0 tw-scale-75',
        enterActiveClass: 'tw-transition tw-duration-200 tw-ease-in-out',
        leaveActiveClass: 'tw-transition tw-duration-200 tw-ease-in-out',
        leaveToClass: 'tw-opacity-0 tw-scale-75',
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

export const paginatorTheme = {
    root: {
        class: [
            'tw-duration-300 tw-transition',
            'tw-flex tw-items-center tw-justify-center tw-flex-wrap',
            'tw-bg-slate-50 tw-text-slate-500 tw-border-0 tw-px-4 tw-py-2 tw-rounded-md',
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
                'tw-bg-slate-50 tw-border tw-rounded-md',
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
                'tw-font-sans tw-text-base tw-text-slate-600 tw-p-3 tw-m-0 tw-rounded-md apperance-none',
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
                'tw-bg-slate-50 tw-text-slate-600 tw-border-1 tw-rounded-md tw-shadow',
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
                'tw-font-sans tw-text-base tw-text-slate-600 tw-p-3 tw-m-0 tw-rounded-md apperance-none',
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
                'tw-bg-slate-50 tw-border tw-rounded-md',
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
                'tw-font-sans tw-text-base tw-text-slate-600 tw-p-3 tw-m-0 tw-rounded-md apperance-none',
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
                'tw-bg-slate-50 tw-text-slate-600 tw-border-0 tw-rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
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
