<script setup>
import { computed, onMounted, ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import route from '@/Composables/Common/Route';
import Transitions from '@/Composables/UI/Transitions';
import SettingCard from '@/Components/Elements/SettingCard.vue';

const props = defineProps({
    systemSettings: {
        default: [],
    },
    envSettings: {
        default: [],
    },
    errors: Object,
});

const form = useForm({
    setting_type: null,
    key: null,
    value: null,
});

const filters = ref(null);

const currentSystemSettings = ref([]);
const currentEnvSettings = ref([]);

onMounted(() => {
    loadSettings(props);
});

const loadSettings = (data) => {
    currentSystemSettings.value = data.systemSettings;
    currentEnvSettings.value = data.envSettings;
};

const filteredSettings = (settings) => {
    if (filters.value) {
        return settings.filter(setting => {
            return setting.name.toLowerCase().includes(filters.value.toLowerCase())
                || setting.label.toLowerCase().includes(filters.value.toLowerCase())
                || setting.description.toLowerCase().includes(filters.value.toLowerCase());
        });
    }
    return settings;
}

const getFilteredSystemSettings = computed(() => {
    return filteredSettings(currentSystemSettings.value);
});

const getFilteredEnvSettings = computed(() => {
    return filteredSettings(currentEnvSettings.value);
});

const updateSettings = () => {
    form.post(route('admin.setting.save'), {
        preserveScroll: true,
    });
};
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
            <div class="tw-flex tw-justify-end">
                <span class="p-input-icon-left">
                    <i class="pi pi-search tw-left-3 tw-text-slate-700 dark:tw-text-slate-400" />
                    <InputText class="tw-pl-10"
                        v-model="filters"
                        placeholder="Search" />
                </span>
            </div>
            <div class="tw-h-[75vh] primary-scrollbar tw-flex tw-flex-col tw-space-y-4">
                <transition
                    :enter-from-class="Transitions.overlay.enterFromClass"
                    :enter-active-class="
                        Transitions.overlay.enterActiveClass
                    "
                    :leave-active-class="
                        Transitions.overlay.leaveActiveClass
                    "
                    :leave-to-class="Transitions.overlay.leaveToClass"
                >
                    <div v-show="getFilteredSystemSettings.length > 0"
                        class="main-bg-1 tw-shadow-lg tw-rounded-lg tw-p-4 tw-transition tw-duration-300">
                        <h3 class="tw-font-bold tw-text-xl tw-text-primary tw-uppercase tw-mb-4">System</h3>
                        <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
                            <template
                                v-for="setting in getFilteredSystemSettings"
                                :key="setting.name"
                            >
                                <SettingCard :setting="setting" />
                            </template>
                        </div>
                    </div>
                </transition>
                <transition
                    :enter-from-class="Transitions.overlay.enterFromClass"
                    :enter-active-class="
                        Transitions.overlay.enterActiveClass
                    "
                    :leave-active-class="
                        Transitions.overlay.leaveActiveClass
                    "
                    :leave-to-class="Transitions.overlay.leaveToClass"
                >
                    <div v-show="getFilteredEnvSettings.length > 0"
                        class="tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-transition tw-duration-300">
                        <h3 class="tw-font-bold tw-text-xl tw-text-primary tw-uppercase tw-mb-4">Environment</h3>
                        <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
                            <template
                                v-for="setting in getFilteredEnvSettings"
                                :key="setting.name"
                            >
                                <SettingCard :setting="setting" />
                            </template>
                        </div>
                    </div>
                </transition>
                <transition
                    :enter-from-class="Transitions.overlay.enterFromClass"
                    :enter-active-class="
                        Transitions.overlay.enterActiveClass
                    "
                    :leave-active-class="
                        Transitions.overlay.leaveActiveClass
                    "
                    :leave-to-class="Transitions.overlay.leaveToClass"
                >
                    <div v-show="!getFilteredSystemSettings.length && !getFilteredEnvSettings.length"
                        class="tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-transition tw-duration-300">
                        <div>No results for <span class="tw-font-semibold tw-italic">{{ filters }}</span></div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>
