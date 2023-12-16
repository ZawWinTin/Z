export default {
    overlay: {
        enterFromClass: 'tw-opacity-0 tw-scale-75',
        enterActiveClass: 'tw-transition tw-duration-200 tw-ease-in-out',
        leaveActiveClass: 'tw-transition tw-duration-200 tw-ease-in-out',
        leaveToClass: 'tw-opacity-0 tw-scale-75',
    },
    floatIn: {
        enterFromClass:
            'tw-opacity-0 tw-translate-x-0 tw-translate-y-2/4 tw-translate-z-0',
        enterActiveClass:
            'tw-transition-transform tw-transition-opacity tw-duration-300',
        leaveFromClass: 'tw-max-h-40',
        leaveActiveClass: 'tw-transition-all tw-duration-500 tw-ease-in',
        leaveToClass: 'tw-max-h-0 tw-opacity-0 tw-mb-0 tw-overflow-hidden',
    },
};
