<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';

import SettingCard from '@/Components/Elements/SettingCard.vue';
import Transitions from '@/Composables/UI/Transitions';
import { SettingType } from '@/Constants/SettingType';
import EnvSetting from '@/Interfaces/EnvSetting';
import SystemSetting from '@/Interfaces/SystemSetting';

type SettingData = {
    systemSettings: Array<SystemSetting>;
    envSettings: Array<EnvSetting>;
    errors: any;
};

const props = defineProps<SettingData>();

const filters = ref<string>('');

const currentSystemSettings = ref<Array<SystemSetting>>([]);
const currentEnvSettings = ref<Array<EnvSetting>>([]);

onMounted(() => {
    loadSettings(props);
});

const loadSettings = (data: SettingData) => {
    currentSystemSettings.value = data.systemSettings;
    currentEnvSettings.value = data.envSettings;
};

const filteredSettings = (
    settings: Array<SystemSetting> | Array<EnvSetting>,
) => {
    if (filters.value) {
        return settings.filter(setting => {
            return (
                setting.name
                    .toLowerCase()
                    .includes(filters.value.toLowerCase()) ||
                setting.label
                    .toLowerCase()
                    .includes(filters.value.toLowerCase()) ||
                setting.description
                    .toLowerCase()
                    .includes(filters.value.toLowerCase())
            );
        });
    }
    return settings;
};

const getFilteredSystemSettings = computed(() => {
    return filteredSettings(currentSystemSettings.value);
});

const getFilteredEnvSettings = computed(() => {
    return filteredSettings(currentEnvSettings.value);
});
</script>
<template>
    <section class="tw-flex tw-h-full tw-flex-col tw-space-y-4">
        <Head title="Setting - Admin" />
        <h1
            class="tw-h-8 tw-text-2xl tw-font-bold tw-uppercase tw-text-primary"
        >
            Setting
        </h1>
        <!-- Search -->
        <div class="tw-flex tw-justify-end">
            <span class="p-input-icon-left">
                <i class="pi pi-search main-text tw-left-3" />
                <InputText
                    class="tw-pl-10"
                    v-model="filters"
                    placeholder="Search"
                />
            </span>
        </div>
        <!-- Settings -->
        <div
            class="primary-scrollbar tw-flex tw-h-full tw-flex-col tw-space-y-4"
        >
            <transition
                :enter-from-class="Transitions.overlay.enterFromClass"
                :enter-active-class="Transitions.overlay.enterActiveClass"
                :leave-active-class="Transitions.overlay.leaveActiveClass"
                :leave-to-class="Transitions.overlay.leaveToClass"
            >
                <div
                    v-show="getFilteredSystemSettings.length > 0"
                    class="main-bg-2 tw-rounded-lg tw-p-4 tw-shadow-lg tw-transition tw-duration-300"
                >
                    <h3
                        class="tw-mb-4 tw-text-xl tw-font-bold tw-uppercase tw-text-primary"
                    >
                        System
                    </h3>
                    <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
                        <template
                            v-for="setting in getFilteredSystemSettings"
                            :key="setting.name"
                        >
                            <SettingCard
                                :setting="setting"
                                :type="SettingType.SYSTEM"
                            />
                        </template>
                    </div>
                </div>
            </transition>
            <transition
                :enter-from-class="Transitions.overlay.enterFromClass"
                :enter-active-class="Transitions.overlay.enterActiveClass"
                :leave-active-class="Transitions.overlay.leaveActiveClass"
                :leave-to-class="Transitions.overlay.leaveToClass"
            >
                <div
                    v-show="getFilteredEnvSettings.length > 0"
                    class="main-bg-2 tw-rounded-lg tw-p-4 tw-text-slate-900 tw-shadow-lg tw-transition tw-duration-300 dark:tw-text-slate-100"
                >
                    <h3
                        class="tw-mb-4 tw-text-xl tw-font-bold tw-uppercase tw-text-primary"
                    >
                        Environment
                    </h3>
                    <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
                        <template
                            v-for="setting in getFilteredEnvSettings"
                            :key="setting.name"
                        >
                            <SettingCard
                                :setting="setting"
                                :type="SettingType.ENV"
                            />
                        </template>
                    </div>
                </div>
            </transition>
            <transition
                :enter-from-class="Transitions.overlay.enterFromClass"
                :enter-active-class="Transitions.overlay.enterActiveClass"
                :leave-active-class="Transitions.overlay.leaveActiveClass"
                :leave-to-class="Transitions.overlay.leaveToClass"
            >
                <div
                    v-show="
                        !getFilteredSystemSettings.length &&
                        !getFilteredEnvSettings.length
                    "
                    class="main-bg-2 tw-rounded-lg tw-p-4 tw-text-slate-900 tw-shadow-lg tw-transition tw-duration-300 dark:tw-text-slate-100"
                >
                    <div>
                        No results for
                        <span class="tw-font-semibold tw-italic">{{
                            filters
                        }}</span>
                    </div>
                </div>
            </transition>
        </div>
    </section>
</template>
