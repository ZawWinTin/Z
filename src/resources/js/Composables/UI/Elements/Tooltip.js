export default {
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
