<script setup>
import TabView from 'primevue/tabview';
</script>
<template>
    <TabView
        :pt="{
            navContainer: ({ props }) => ({
                class: [
                    'tw-relative', // Relative positioning.
                    { 'tw-overflow-hidden': props.scrollable }, // Overflow condition.
                ],
            }),
            navContent: {
                class: 'tw-overflow-y-hidden tw-overscroll-contain tw-overscroll-auto tw-scroll-smooth [&::-webkit-scrollbar]:tw-hidden', // Overflow and scrollbar styles.
            },
            previousButton: {
                class: [
                    'tw-h-full tw-flex tw-items-center tw-justify-center !tw-absolute tw-top-0 tw-z-20',
                    'tw-left-0',
                    'tw-bg-slate-50 tw-text-primary tw-w-12 tw-shadow-md tw-rounded-none',
                    'dark:tw-bg-slate-800 dark:tw-border-primary/40 dark:text-slate-50/80 ]',
                ], // Flex and tw-absolute positioning styles.
            },
            nextButton: {
                class: [
                    'tw-h-full tw-flex tw-items-center tw-justify-center !tw-absolute tw-top-0 tw-z-20',
                    'tw-right-0',
                    'tw-bg-slate-50 tw-text-primary tw-w-12 tw-shadow-md tw-rounded-none',
                    'dark:tw-bg-slate-900 dark:tw-border-primary/40 dark:text-slate-50/80 ',
                ], // Flex and tw-absolute positioning styles.
            },
            nav: {
                class: [
                    'tw-flex tw-flex-1 tw-justify-start tw-list-none tw-m-0 tw-p-0 tw-transition tw-duration-300',
                    'tw-bg-transparent tw-border tw-border-slate-300 tw-border-0 tw-border-b-2',
                    'dark:tw-border-primary/40 dark:text-slate-50/80 ',
                ], // Flex, list, margin, padding, and tw-border styles.
            },
            tabpanel: {
                header: ({ props }) => ({
                    class: [
                        'tw-mr-0',
                        {
                            'tw-cursor-default tw-pointer-events-none tw-select-none tw-select-none tw-opacity-60':
                                props?.disabled,
                        },
                    ], // Margin and condition-based styles.
                }),
                headerAction: ({ parent, context }) => ({
                    class: [
                        'tw-items-center tw-cursor-pointer tw-flex tw-overflow-hidden tw-relative tw-select-none text-decoration-none tw-select-none', // Flex and overflow styles.
                        'tw-border-b-2 tw-p-5 tw-font-bold tw-rounded-t-md tw-m-0', // Border, padding, font, and tw-transition styles.
                        'tw-transition tw-duration-300', // Transition duration style.
                        'focus:tw-outline-none focus:outline-offset-0', // Focus styles.
                        {
                            'tw-border-slate-300 tw-bg-slate-50 tw-text-slate-700 hover:tw-bg-slate-50 hover:tw-border-slate-400 dark:tw-bg-slate-800 dark:tw-border-primary/40 dark:tw-text-slate-50/80 dark:hover:tw-bg-slate-800/80':
                                parent.state.d_activeIndex !== context.index, // Condition-based hover styles.
                            'tw-bg-slate-50 tw-border-primary tw-text-primary dark:tw-bg-slate-800 dark:tw-border-primary dark:tw-text-primary':
                                parent.state.d_activeIndex === context.index, // Condition-based active styles.
                        },
                    ],
                    style: 'margin-bottom: -2px', // Negative margin style.
                }),
                headerTitle: {
                    class: ['tw-leading-none tw-whitespace-nowrap'], // Leading and whitespace styles.
                },
                content: {
                    class: [
                        'tw-transition tw-duration-300',
                        'tw-bg-slate-50 tw-p-5 tw-border-0 tw-text-slate-700 tw-rounded-bl-md tw-rounded-br-md',
                        'dark:tw-bg-slate-800 dark:tw-border-primary/40 dark:text-slate-50/80',
                    ], // Background, padding, tw-border, and text styles.
                },
            },
        }"
    >
        <slot />
    </TabView>
</template>
