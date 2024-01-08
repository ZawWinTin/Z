export default {
    root: {
        class: 'tw-inline-flex tw-relative tw-select-none tw-cursor-pointer',
    },
    input: ({ props, context }) => ({
        class: [
            'tw-border-2 tw-w-5 tw-h-5 tw-text-slate-600 tw-rounded-md tw-transition-colors tw-duration-300',
            {
                'main-bg-3 main-input-border': !context.checked,
                'tw-border-primary-dark tw-bg-primary': context.checked,
            },
            {
                'hover:tw-border-primary hover:dark:tw-border-primary-dark':
                    !props.disabled,
                'tw-cursor-default tw-opacity-60': props.disabled,
            },
            {
                'main-primary-focus': context.focused,
            },
        ],
    }),
    icon: 'tw-w-3 tw-h-3 tw-text-slate-50 dark-tw-text-slate-900',
};
