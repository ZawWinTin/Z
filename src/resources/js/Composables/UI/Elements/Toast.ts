import Transitions from '@/Composables/UI/Transitions';

export default {
    root: {
        class: ['tw-w-96'],
    },
    container: ({ props }) => ({
        class: [
            'tw-my-4 tw-rounded-md tw-w-full tw-bg-opacity-70 dark:tw-bg-opacity-30 tw-transition tw-duration-300',
            {
                'tw-bg-blue-100 dark:tw-bg-blue-800 tw-border-solid tw-border-0 tw-border-l-4 tw-border-blue-500 tw-text-blue-500':
                    props.message.severity == 'info',
                'tw-bg-green-100 dark:tw-bg-green-800 tw-border-solid tw-border-0 tw-border-l-4 tw-border-green-500 tw-text-green-500':
                    props.message.severity == 'success',
                'tw-bg-orange-100 dark:tw-bg-orange-800 tw-border-solid tw-border-0 tw-border-l-4 tw-border-orange-500 tw-text-orange-500':
                    props.message.severity == 'warn',
                'tw-bg-red-100 dark:tw-bg-red-800 tw-border-solid tw-border-0 tw-border-l-4 tw-border-red-500 tw-text-red-500':
                    props.message.severity == 'error',
            },
        ],
    }),
    content: 'tw-flex tw-items-center tw-py-5 tw-px-7',
    icon: {
        class: ['tw-w-6 tw-h-6', 'tw-text-lg tw-mr-2'],
    },
    text: 'tw-text-base tw-font-normal tw-flex tw-flex-col tw-flex-1 tw-grow tw-shrink tw-ml-4',
    summary: 'tw-font-bold tw-block',
    detail: 'tw-mt-1 tw-block',
    closebutton: {
        class: [
            'tw-w-8 tw-h-8 tw-rounded-full tw-bg-transparent tw-transition tw-duration-300 tw-ease-in-out',
            'tw-ml-auto tw-overflow-hidden tw-relative',
            'tw-flex tw-items-center tw-justify-center',
            'hover:tw-bg-slate-50/30',
        ],
    },
    transition: Transitions.floatIn,
};
