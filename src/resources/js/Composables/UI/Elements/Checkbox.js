export default {
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
