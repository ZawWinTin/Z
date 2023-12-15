import Transitions from '@/Composables/UI/Transitions';

export default {
    root: ({ props, state }) => ({
        class: [
            // Display and Position
            'tw-inline-flex',
            'tw-relative',

            // Shape
            'tw-w-full',
            'tw-rounded-full',

            // Color and Background
            'main-bg-3',
            'tw-border main-input-border main-text-for-input',

            // Transitions
            'tw-transition-all',
            'tw-duration-300',

            // Misc
            'tw-cursor-pointer',
            'tw-select-none',
            {
                'tw-opacity-60': props.disabled,
                'tw-pointer-events-none': props.disabled,
                'tw-cursor-default': props.disabled,
                'main-primary-focus': state.focused,
            },
        ],
    }),
    input: ({ props }) => ({
        class: [
            // Display
            'tw-block',
            'tw-flex-auto',

            // Color and Background
            'main-text-for-input',
            'tw-bg-transparent',

            // Sizing and Spacing
            'w-[1%]',
            'tw-p-3 tw-pl-5',
            { 'tw-pr-7': props.showClear },

            //Shape
            'tw-rounded-none',

            // Transitions
            'tw-transition',
            'tw-duration-300',

            // States
            'focus:tw-outline-none focus:tw-shadow-none',

            // Misc
            'tw-relative',
            'tw-cursor-pointer',
            'tw-overflow-hidden tw-overflow-ellipsis',
            'tw-whitespace-nowrap',
            'tw-appearance-none',
        ],
    }),
    trigger: {
        class: [
            // Flexbox
            'tw-flex tw-items-center tw-justify-center',
            'tw-shrink-0',

            // Color and Background
            'tw-bg-transparent',
            'main-text-for-input',

            // Size
            'tw-w-12',

            // Shape
            'tw-rounded-tr-md',
            'tw-rounded-br-md',
        ],
    },
    panel: {
        class: [
            // Position
            'tw-absolute tw-top-0 tw-left-0',

            // Shape
            'tw-border-0',
            'tw-shadow-lg',
            'tw-rounded-md',
            'tw-shadow-md',

            // Color
            'tw-transition tw-duration-300',
            'main-bg-3',
            'tw-text-slate-700 dark:tw-text-slate-50/80',
        ],
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
            'tw-overflow-auto',
        ],
    },
    list: {
        class: 'tw-py-3 tw-list-none tw-m-0',
    },
    item: ({ context }) => ({
        class: [
            // Position
            'tw-relative',

            // Shape
            'tw-border-0',
            'tw-rounded-none',

            // Spacing
            'tw-m-0',
            'tw-py-3 tw-px-5',

            // Color
            {
                'tw-text-slate-700 hover:tw-text-slate-700 hover:tw-bg-slate-200 dark:tw-text-slate-50/80 dark:hover:tw-bg-slate-800':
                    !context.focused && !context.selected,
                'tw-bg-slate-300 tw-text-slate-700 dark:tw-text-slate-50/80 dark:tw-bg-slate-800/90 hover:tw-text-slate-700 hover:tw-bg-slate-200 dark:tw-text-slate-50/80 dark:hover:tw-bg-slate-800':
                    context.focused && !context.selected,
                'tw-bg-primary-dark/60 tw-text-slate-50 dark:tw-bg-primary-dark/60 dark:tw-text-slate-50':
                    context.focused && context.selected,
                'tw-bg-primary/60 tw-text-slate-50 dark:tw-bg-primary/60 dark:tw-text-slate-50':
                    !context.focused && context.selected,
            },

            // Transitions
            'tw-transition',
            'tw-duration-300',

            // Misc
            'tw-cursor-pointer',
            'tw-overflow-hidden',
            'tw-whitespace-nowrap',
        ],
    }),
    itemgroup: {
        class: [
            //Font
            'tw-font-bold',

            // Spacing
            'tw-m-0',
            'tw-p-3',

            // Color
            'text-surface-800 dark:text-slate-50/80',
            'bg-surface-0 dark:bg-surface-600/80',

            // Misc
            'tw-cursor-auto',
        ],
    },
    emptymessage: {
        class: [
            // Font
            'tw-leading-none',

            // Spacing
            'tw-py-3 tw-px-5',

            // Color
            'text-surface-800 dark:text-slate-50/80',
            'tw-bg-transparent',
        ],
    },
    header: {
        class: [
            // Spacing
            'tw-py-3 tw-px-5',
            'tw-m-0',

            //Shape
            'tw-border-b',
            'tw-rounded-tl-md',
            'tw-rounded-tr-md',

            // Color
            'text-surface-700 dark:text-slate-50/80',
            'bg-surface-100 dark:bg-surface-800',
            'border-surface-300 dark:border-surface-700',
        ],
    },
    filtercontainer: {
        class: 'tw-relative',
    },
    filterinput: {
        class: [
            // Font
            'tw-font-sans',
            'tw-leading-none',

            // Sizing
            'tw-pr-7 tw-py-3 tw-px-3',
            'tw--mr-7',
            'tw-w-full',

            //Color
            'text-surface-700 dark:text-slate-50/80',
            'bg-surface-0 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700',

            // Shape
            'tw-border',
            'tw-rounded-lg',
            'tw-appearance-none',

            // Transitions
            'tw-transition',
            'tw-duration-300',

            // States
            'hover:border-primary-500 dark:hover:border-primary-300',
            'focus:main-primary-focus',

            // Misc
            'tw-appearance-none',
        ],
    },
    filtericon: {
        class: ['tw-absolute', 'tw-top-1/2', 'tw--mt-2'],
    },
    clearicon: {
        class: [
            // Color
            'text-surface-500',

            // Position
            'tw-absolute',
            'tw-top-1/2',
            'tw-right-12',

            // Spacing
            'tw--mt-2',
        ],
    },
    transition: Transitions.overlay,
};
