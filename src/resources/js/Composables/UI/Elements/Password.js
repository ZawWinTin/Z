import Transitions from '@/Composables/UI/Transitions';

export default {
    root: ({ props }) => ({
        class: [
            'tw-inline-flex tw-relative tw-p-0 tw-rounded-full tw-border-none tw-bg-transparent',
            {
                'tw-opacity-60 tw-select-none tw-pointer-events-none tw-cursor-default':
                    props.disabled,
            },
        ],
    }),
    panel: 'tw-p-5 main-bg-3 tw-text-slate-700 dark:tw-text-slate-50/80 tw-shadow-md tw-rounded-md',
    meter: 'tw-mb-2 tw-bg-slate-300 dark:tw-bg-slate-700 tw-h-3',
    meterlabel: ({ instance, props }) => ({
        class: [
            'tw-transition tw-duration-1000 tw-ease-in-out tw-h-full',
            {
                'tw-bg-red-500': instance?.meter?.strength == 'weak',
                'tw-bg-orange-500': instance?.meter?.strength == 'medium',
                'tw-bg-green-500': instance?.meter?.strength == 'strong',
            },
            { 'tw-pr-[2.5rem] ': props.toggleMask },
        ],
    }),
    showicon: {
        class: [
            'tw-absolute tw-top-1/2 -tw-mt-2',
            'tw-right-3 tw-text-slate-600 dark:tw-text-slate-400',
        ],
    },
    hideicon: {
        class: [
            'tw-absolute tw-top-1/2 -tw-mt-2',
            'tw-right-3 tw-text-slate-600 dark:tw-text-slate-400',
        ],
    },
    transition: Transitions.overlay,
};
