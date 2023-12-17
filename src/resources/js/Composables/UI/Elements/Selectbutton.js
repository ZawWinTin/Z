export default {
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
            'focus:main-primary-focus',
            {
                'main-bg-3 tw-text-slate-700 dark:tw-text-slate-50/80 tw-border-slate-300 dark:tw-border-primary-dark/40 hover:tw-bg-slate-50 dark:hover:tw-bg-slate-800/80 ':
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
