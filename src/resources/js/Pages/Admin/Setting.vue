<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import route from '@/Composables/Common/Route';


const filters = ref({
    global: { value: null },
});

</script>
<template>
    <section>
        <Head title="Setting - Admin" />
        <h1
            class="tw-font-bold tw-text-2xl tw-text-primary tw-uppercase tw-mb-4">
            Setting
        </h1>
        <Toast />
        <div class="tw-flex tw-flex-col tw-space-y-4">
            <div
                class="tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-duration-300 tw-transition">
                <span class="p-input-icon-left">
                    <i class="pi pi-search tw-left-3 tw-text-slate-700 dark:tw-text-slate-400" />
                    <InputText class="tw-pl-10"
                        v-model="filters['global'].value"
                        placeholder="Search" />
                </span>
            </div>
            <div
                class="tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-duration-300 tw-transition">
                <h3 class="tw-font-bold tw-text-xl tw-text-primary tw-uppercase tw-mb-4">System</h3>
            </div>
            <div
                class="tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-duration-300 tw-transition">
                <h3 class="tw-font-bold tw-text-xl tw-text-primary tw-uppercase tw-mb-4">Environment</h3>
            </div>
        </div>
    </section>
</template>
