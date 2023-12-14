export default {
    root: ({ props, context }) => ({
        class: [
            'tw-inline-flex tw-cursor-pointer tw-select-none tw-items-center tw-align-bottom tw-text-center tw-overflow-hidden tw-relative',
            'tw-px-4 tw-py-2 tw-rounded-full tw-text-base tw-w-32',
            'tw-border tw-transition tw-duration-300 tw-ease-in-out',
            {
                'main-primary-focus': context.focused,
            },
            {
                'main-bg-1 tw-border-slate-300 dark:tw-border-primary/40 tw-text-slate-700 dark:tw-text-slate-50/80 hover:main-bg-2 hover:tw-border-slate-300 dark:hover:tw-bg-slate-800/70 hover:tw-text-slate-700 dark:hover:tw-text-slate-50/80':
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
