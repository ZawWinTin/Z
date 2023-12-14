export default {
    root: ({ context }) => ({
        class: [
            'tw-duration-300 tw-ease-in-out tw-rounded-full tw-shadow-sm tw-w-full',
            'tw-border-slate-300 dark:tw-bg-slate-900 dark:tw-border-slate-700 dark:tw-text-slate-300',
            'focus:main-primary-focus',
            {
                'hover:tw-border-primary/80 dark:hover:tw-border-primary/80 focus:tw-outline-none focus:tw-outline-offset-0':
                    !context.disabled,
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    context.disabled,
            },
        ],
    }),
};
