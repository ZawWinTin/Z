export default {
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
            'before:tw-transition before:tw-duration-300 before:main-bg-3 before:tw-w-5 before:tw-h-5 before:tw-rounded-full before:tw-left-1 before:tw-translate-y-[-50%]',
            'focus:main-primary-focus',
            {
                'main-primary-focus': state.focused,
            },
        ],
    }),
};
