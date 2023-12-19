<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import Transitions from '@/Composables/UI/Transitions';
import SettingCard from '@/Components/Elements/SettingCard.vue';
import { SettingType } from '@/Constants/SettingType';
import SystemSetting from '@/Interfaces/SystemSetting';
import EnvSetting from '@/Interfaces/EnvSetting';

type SettingData = {
    systemSettings: Array<SystemSetting>,
    envSettings: Array<EnvSetting>,
    errors: any,
};

const props = defineProps<SettingData>();

const filters = ref<string>('');

const currentSystemSettings = ref<Array<SystemSetting>>([]);
const currentEnvSettings = ref<Array<EnvSetting>>([]);

onMounted(() => {
    loadSettings(props);
});

const loadSettings = (data : SettingData) => {
    currentSystemSettings.value = data.systemSettings;
    currentEnvSettings.value = data.envSettings;
};

const filteredSettings = (settings : Array<SystemSetting> | Array<EnvSetting>) => {
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
</script>
<template>
    <section class="tw-h-full tw-flex tw-flex-col tw-space-y-4">
        <Head title="Setting - Admin" />
        <h1
            class="tw-font-bold tw-text-2xl tw-text-primary tw-uppercase tw-h-8">
            Setting
        </h1>
        <!-- Search -->
        <div class="tw-flex tw-justify-end">
            <span class="p-input-icon-left">
                <i class="pi pi-search tw-left-3 main-text" />
                <InputText class="tw-pl-10"
                    v-model="filters"
                    placeholder="Search" />
            </span>
        </div>
        <!-- Settings -->
        <div class="tw-h-full primary-scrollbar tw-flex tw-flex-col tw-space-y-4">
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
                    class="main-bg-2 tw-shadow-lg tw-rounded-lg tw-p-4 tw-transition tw-duration-300">
                    <h3 class="tw-font-bold tw-text-xl tw-text-primary tw-uppercase tw-mb-4">System</h3>
                    <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
                        <template
                            v-for="setting in getFilteredSystemSettings"
                            :key="setting.name"
                        >
                            <SettingCard :setting="setting" :type="SettingType.SYSTEM" />
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
                    class="main-bg-2 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-transition tw-duration-300">
                    <h3 class="tw-font-bold tw-text-xl tw-text-primary tw-uppercase tw-mb-4">Environment</h3>
                    <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
                        <template
                            v-for="setting in getFilteredEnvSettings"
                            :key="setting.name"
                        >
                            <SettingCard :setting="setting" :type="SettingType.ENV" />
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
                    class="main-bg-2 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-transition tw-duration-300">
                    <div>No results for <span class="tw-font-semibold tw-italic">{{ filters }}</span></div>
                </div>
            </transition>
        </div>
    </section>
</template>
