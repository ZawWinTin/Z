export default {
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
            'focus:main-primary-focus',
        ],
    },
    range: { class: 'tw-bg-primary tw-h-full tw-rounded-full' },
};
