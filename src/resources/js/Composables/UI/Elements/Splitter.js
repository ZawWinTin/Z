export default {
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
