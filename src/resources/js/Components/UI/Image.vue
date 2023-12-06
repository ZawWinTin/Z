<script setup>
import Image from 'primevue/image';
</script>
<template>
    <Image :pt="{
        root: 'tw-relative tw-inline-block',
        image: 'tw-w-full tw-h-full tw-rounded tw-object-cover',
        preview: 'tw-rounded',
        button: {
            class: [
                'tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-opacity-0 tw-transition-opacity tw-duration-300',
                'tw-bg-transparent tw-text-slate-100',
                'hover:tw-opacity-100 hover:tw-cursor-pointer hover:tw-bg-slate-900 hover:tw-bg-opacity-50' //Hover
            ]
        },
        mask: {
            class: ['tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full', 'tw-flex tw-items-center tw-justify-center', 'tw-bg-slate-900 tw-bg-opacity-90']
        },
        toolbar: {
            class: ['tw-absolute tw-top-0 tw-right-0 tw-z-10 tw-flex', 'tw-p-4']
        },
        rotaterightbutton: {
            class: [
                'tw-flex tw-justify-center tw-items-center',
                'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
                'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
                'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1'
            ]
        },
        rotaterighticon: 'tw-w-6 tw-h-6',
        rotateleftbutton: {
            class: [
                'tw-flex tw-justify-center tw-items-center',
                'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
                'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
                'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1'
            ]
        },
        rotatelefticon: 'tw-w-6 tw-h-6',
        zoomoutbutton: {
            class: [
                'tw-flex tw-justify-center tw-items-center',
                'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
                'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
                'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1'
            ]
        },
        zoomouticon: 'tw-w-6 tw-h-6',
        zoominbutton: {
            class: [
                'tw-flex tw-justify-center tw-items-center',
                'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
                'hover:tw-text-slate-50 hover:tw-bg-slate-50/10',
                'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1'
            ]
        },
        zoominicon: 'tw-w-6 tw-h-6',
        closebutton: {
            class: [
                'tw-flex tw-justify-center tw-items-center',
                'tw-text-slate-50 tw-bg-transparent tw-w-12 tw-h-12 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out tw-mr-2',
                'hover:tw-text-slate-50 hover:bg-slate-50/10',
                'focus::tw-ring-offset-slate-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary/80 focus:tw-ring-offset-1'
            ]
        },
        closeicon: 'tw-w-6 tw-h-6',
        transition: {
            enterFromClass: 'tw-opacity-0 tw-scale-75',
            enterActiveClass: 'tw-transition-all tw-duration-150 tw-ease-in-out',
            leaveActiveClass: 'tw-transition-all tw-duration-150 tw-ease-in',
            leaveToClass: 'tw-opacity-0 tw-scale-75'
        }
    }"/>
</template>