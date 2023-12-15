export default {
    root: ({ state }) => ({
        class: [
            'tw-rounded-lg tw-shadow-lg tw-border-0',
            'tw-max-h-[90%] tw-transform tw-scale-100',
            'tw-m-0 tw-w-[50vw]',
            'dark:tw-border dark:tw-border-primary/40',
            {
                'tw-transition-none tw-transform-none !tw-w-screen !tw-h-screen !tw-max-h-full !tw-top-0 !tw-left-0':
                    state.maximized,
            },
        ],
    }),
    header: {
        class: [
            'tw-flex tw-items-center tw-justify-between tw-shrink-0',
            'tw-text-slate-800 tw-border-t-0  tw-rounded-tl-lg tw-rounded-tr-lg tw-p-6',
            'main-bg-2 dark:tw-text-slate-50/80',
            'tw-font-bold tw-text-lg',
        ],
    },
    headerIcons: {
        class: 'tw-flex tw-items-center',
    },
    maximizableButton: {
        class: [
            'tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative',
            'tw-w-8 tw-h-8 tw-text-slate-500 tw-border-0 tw-bg-transparent tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2 last:tw-mr-0',
            'hover:main-secondary-hover',
            'focus:main-primary-focus', // focus
            'dark:hover:tw-text-slate-50/80 dark:hover:tw-border-transparent',
        ],
    },
    closeButton: {
        class: [
            'tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative',
            'tw-w-8 tw-h-8 tw-text-slate-500 tw-border-0 tw-bg-transparent tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2 last:tw-mr-0',
            'hover:main-secondary-hover',
            'focus:main-primary-focus', // focus
            'dark:hover:tw-text-slate-50/80 dark:hover:tw-border-transparent',
        ],
    },
    closeButtonIcon: {
        class: 'tw-w-4 tw-h-4 tw-inline-block',
    },
    content: ({ state, instance }) => ({
        class: [
            'primary-scrollbar',
            'tw-text-slate-700 tw-px-6 tw-pb-8 tw-pt-0',
            'main-bg-2 dark:tw-text-slate-50/80',
            {
                'tw-grow': state.maximized,
            },
            {
                'tw-rounded-bl-lg tw-rounded-br-lg': !instance.$slots.footer,
            },
        ],
    }),
    footer: {
        class: [
            'tw-flex tw-gap-2 tw-shrink-0 tw-justify-end tw-align-middle',
            'tw-border-t-0 tw-text-slate-700 tw-px-6 tw-pt-2 tw-pb-6 tw-text-right tw-rounded-b-lg',
            'main-bg-2 dark:text-slate-50/80',
        ],
    },
    mask: ({ props }) => ({
        class: [
            'tw-transition tw-duration-300',
            { 'main-bg-1-dark-only !tw-bg-opacity-40': props.modal },
        ],
    }),
    transition: ({ props }) => {
        return props.position === 'top'
            ? {
                  enterFromClass:
                      'tw-opacity-0 tw-scale-75 tw-translate-x-0 -tw-translate-y-full tw-translate-z-0',
                  enterActiveClass:
                      'tw-transition-all tw-duration-300 tw-ease-out',
                  leaveActiveClass:
                      'tw-transition-all tw-duration-300 tw-ease-out',
                  leaveToClass:
                      'tw-opacity-0 tw-scale-75 tw-translate-x-0 -tw-translate-y-full tw-translate-z-0',
              }
            : props.position === 'bottom'
              ? {
                    enterFromClass:
                        'tw-opacity-0 tw-scale-75 tw-translate-y-full',
                    enterActiveClass:
                        'tw-transition-all tw-duration-300 tw-ease-out',
                    leaveActiveClass:
                        'tw-transition-all tw-duration-300 tw-ease-out',
                    leaveToClass:
                        'tw-opacity-0 tw-scale-75 tw-translate-x-0 tw-translate-y-full translate-z-0',
                }
              : props.position === 'left' ||
                  props.position === 'topleft' ||
                  props.position === 'bottomleft'
                ? {
                      enterFromClass:
                          'tw-opacity-0 tw-scale-75 -tw-translate-x-full tw-translate-y-0 tw-translate-z-0',
                      enterActiveClass:
                          'tw-transition-all tw-duration-300 tw-ease-out',
                      leaveActiveClass:
                          'tw-transition-all tw-duration-300 tw-ease-out',
                      leaveToClass:
                          'tw-opacity-0 tw-scale-75  -tw-translate-x-full tw-translate-y-0 tw-translate-z-0',
                  }
                : props.position === 'right' ||
                    props.position === 'topright' ||
                    props.position === 'bottomright'
                  ? {
                        enterFromClass:
                            'tw-opacity-0 tw-scale-75 tw-translate-x-full tw-translate-y-0 tw-translate-z-0',
                        enterActiveClass:
                            'tw-transition-all tw-duration-300 tw-ease-out',
                        leaveActiveClass:
                            'tw-transition-all tw-duration-300 tw-ease-out',
                        leaveToClass:
                            'tw-opacity-0 tw-scale-75 tw-opacity-0 tw-scale-75 tw-translate-x-full tw-translate-y-0 tw-translate-z-0',
                    }
                  : {
                        enterFromClass: 'tw-opacity-0 tw-scale-75',
                        enterActiveClass:
                            'tw-transition-all tw-duration-300 tw-ease-out',
                        leaveActiveClass:
                            'tw-transition-all tw-duration-300 tw-ease-out',
                        leaveToClass: 'tw-opacity-0 tw-scale-75',
                    };
    },
};
