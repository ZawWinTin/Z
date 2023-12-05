<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import Button from '@/Components/UI/Button.vue';
import ToggleButton from '@/Components/UI/ToggleButton.vue';
import TextInput from '@/Components/UI/TextInput.vue';
import DataTable from '@/Components/Elements/Datatable.vue';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import { computed, onMounted, ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import Toast from '@/Components/UI/Toast.vue';
import route from '@/Composables/Route';
import Badge from '@/Components/UI/Badge.vue';
import Dialog from '@/Components/UI/Dialog.vue';
import Checkbox from '@/Components/UI/Checkbox.vue';
import ColorPicker from '@/Components/UI/ColorPicker.vue';
import { TRANSITIONS, tooltipTheme } from '@/Composables/Theme';
import { getDate } from '@/Composables/Common';
import InputError from '@/Components/UI/InputError.vue';

const toast = useToast();
const openCategorySaveDialog = ref(false);
const openCategoryDeleteDialog = ref(false);
const openCategoryRestoreDialog = ref(false);
const isSameColor = ref(false);
const isCategoryPreviewBgDark = ref(false);

const isActiveMode = ref(true);

const BACKGROUND_COLOR = 'background_color';
const TEXT_COLOR = 'text_color';
const SAVE_DIALOG = 'save_dialog';
const DELETE_DIALOG = 'delete_dialog';
const RESTORE_DIALOG = 'restore_dialog';

const props = defineProps({
    activeCategories: {
        default: [],
    },
    deletedCategories: {
        default: [],
    },
    errors: Object,
});

const activeCategories = ref([]);
const deletedCategories = ref([]);

const form = useForm({
    id: null,
    name: null,
    text_color: '#FFFFFF',
    background_color: '#000000',
});

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

onMounted(() => {
    loadCategories(props);
});

const getCategories = computed(() => isActiveMode.value ? activeCategories.value : deletedCategories.value);

const toggleCategoryPreviewBg = () => {
    isCategoryPreviewBgDark.value = !isCategoryPreviewBgDark.value;
};

const openSaveDialog = (data = null) => {
    resetForm();
    openCategorySaveDialog.value = true;
    if (data) {
        form.id = data.id;
        form.name = data.name;
        form.text_color = data.text_color;
        form.background_color = data.background_color;
    }
};

const closeDialog = dialogType => {
    switch (dialogType) {
        case SAVE_DIALOG:
            openCategorySaveDialog.value = false;
            break;
        case DELETE_DIALOG:
            openCategoryDeleteDialog.value = false;
            break;
        case RESTORE_DIALOG:
            openCategoryRestoreDialog.value = false;
            break;
    }
    resetForm();
};

const resetForm = () => {
    form.reset();
    form.clearErrors();
    isSameColor.value = false;
};

const setSameColor = () => {
    if (isSameColor.value) {
        form.background_color = form.text_color;
    }
};

const changeColor = colorType => {
    let prefix = '';
    switch (colorType) {
        case TEXT_COLOR:
            if (!form.text_color.startsWith('#')) {
                prefix = '#';
            }
            form.text_color = prefix + form.text_color.toUpperCase();
            if (isSameColor.value) {
                form.background_color = form.text_color;
            }
            break;
        case BACKGROUND_COLOR:
            if (!form.background_color.startsWith('#')) {
                prefix = '#';
            }
            form.background_color =
                prefix + form.background_color.toUpperCase();
            if (isSameColor.value) {
                form.text_color = form.background_color;
            }
            break;
    }
};
const loadCategories = (data) => {
    activeCategories.value = data.activeCategories;
    deletedCategories.value = data.deletedCategories;
};

const saveCategory = () => {
    form.clearErrors();
    form.post(route('admin.category.save'), {
        preserveScroll: true,
        onSuccess: (data) => {
            toast.add({
                severity: 'success',
                summary: 'Saved',
                detail: `${form.name} is Saved Successfully.`,
                life: 3000,
            });
            loadCategories(data.props);
            closeDialog(SAVE_DIALOG);
        },
        onError: () => {
            toast.add({
                severity: 'error',
                summary: 'Save Failed',
                detail: `${form.name} saving failed!`,
                life: 3000,
            });
        },
    });
};

const openDeleteDialog = data => {
    resetForm();
    openCategoryDeleteDialog.value = true;
    form.id = data.id;
    form.name = data.name;
};

const deleteCategory = () => {
    form.delete(route('admin.category.destroy'), {
        preserveScroll: true,
        onSuccess: (data) => {
            toast.add({
                severity: 'success',
                summary: 'Deleted',
                detail: `${form.name} is Deleted Successfully.`,
                life: 3000,
            });
            loadCategories(data.props);
            closeDialog(DELETE_DIALOG);
        },
        onError: () => {
            toast.add({
                severity: 'error',
                summary: 'Delete Failed',
                detail: `${form.name} deleting failed!`,
                life: 3000,
            });
        },
    });
};

const openRestoreDialog = data => {
    resetForm();
    openCategoryRestoreDialog.value = true;
    form.id = data.id;
    form.name = data.name;
};

const restoreCategory = () => {
    form.put(route('admin.category.restore'), {
        preserveScroll: true,
        onSuccess: (data) => {
            toast.add({
                severity: 'success',
                summary: 'Restore',
                detail: `${form.name} is Restored Successfully.`,
                life: 3000,
            });
            loadCategories(data.props);
            closeDialog(RESTORE_DIALOG);
        },
        onError: () => {
            toast.add({
                severity: 'error',
                summary: 'Restore Failed',
                detail: `${form.name} restoring failed!`,
                life: 3000,
            });
        },
    });
};
</script>
<template>
    <section>
        <Head title="Category - Admin" />
        <h1
            class="tw-font-bold tw-text-2xl tw-text-primary tw-uppercase tw-mb-4">
            Categories
        </h1>
        <Toast />
        <div
            class="tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-lg tw-rounded-lg tw-p-4 tw-text-slate-900 dark:tw-text-slate-100 tw-duration-300 tw-transition">
            <DataTable
                removableSort
                v-model:filters="filters"
                :value="getCategories"
                scrollable
                scrollHeight="53vh"
                paginator
                :rows="10"
                :rowsPerPageOptions="[5, 10, 20]"
                dataKey="id"
                :globalFilterFields="['id', 'name']">
                <template #header>
                    <div class="tw-flex tw-justify-between tw-items-center">
                        <div class="tw-flex tw-justify-start tw-items-center tw-space-x-4">
                            <ToggleButton v-model="isActiveMode"
                                onLabel="Active" offLabel="Trash"
                                onIcon="pi pi-check" offIcon="pi pi-trash" />
                            <div>
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search tw-left-3 tw-text-slate-700 dark:tw-text-slate-400" />
                                    <TextInput class="tw-pl-10"
                                        v-model="filters['global'].value"
                                        placeholder="Search" />
                                </span>
                            </div>
                        </div>
                        <transition
                            :enter-from-class="TRANSITIONS.overlay.enterFromClass"
                            :enter-active-class="TRANSITIONS.overlay.enterActiveClass"
                            :leave-active-class="TRANSITIONS.overlay.leaveActiveClass"
                            :leave-to-class="TRANSITIONS.overlay.leaveToClass"
                        >
                            <template v-if="isActiveMode">
                                <Button icon="pi pi-plus" class="tw-w-10 tw-h-10" rounded @click="openSaveDialog()" />
                            </template>
                        </transition>
                    </div>
                </template>
                <template #empty> No categories exist.</template>
                <Column field="id" header="ID" class="tw-w-1/5" sortable>
                    <template #body="slotProps">
                        {{ slotProps.data.id }}
                    </template>
                </Column>
                <Column
                    field="name"
                    header="Name"
                    class="tw-w-1/5"
                    sortable>
                    <template #body="slotProps">
                        <Badge
                            :content="slotProps.data.name"
                            :textColor="slotProps.data.text_color"
                            :backgroundColor="slotProps.data.background_color
                                " />
                    </template>
                </Column>
                <Column
                    field="created_at"
                    header="Created Date"
                    class="tw-w-1/5"
                    sortable>
                    <template #body="slotProps">
                        {{ getDate(slotProps.data.created_at) }}
                    </template>
                </Column>
                <Column
                    field="articles_count"
                    header="Quantity"
                    class="tw-w-1/5"
                    sortable>
                    <template #body="slotProps">
                        {{ slotProps.data.articles_count }}
                    </template>
                </Column>
                <Column
                    header="Options"
                    class="tw-w-full tw-flex tw-flex-row tw-space-x-2">
                    <template #body="slotProps">
                        <template v-if="isActiveMode">
                            <Button
                                icon="pi pi-pencil"
                                outlined
                                rounded
                                severity="warning"
                                class="tw-w-10 tw-h-10"
                                @click="openSaveDialog(slotProps.data)" />
                            <Button
                                icon="pi pi-trash"
                                outlined
                                rounded
                                severity="danger"
                                class="tw-w-10 tw-h-10"
                                @click="openDeleteDialog(slotProps.data)" />
                        </template>
                        <template v-if="!isActiveMode">
                            <Button
                                icon="pi pi-replay"
                                outlined
                                rounded
                                severity="success"
                                class="tw-w-10 tw-h-10"
                                @click="openRestoreDialog(slotProps.data)" />
                        </template>
                    </template>
                </Column>
                <template #footer> In total, there are <b>{{ getCategories ? getCategories.length : 0 }}</b> categories.</template>
            </DataTable>

            <!-- Create/Update Dialog -->
            <Dialog
                v-model:visible="openCategorySaveDialog"
                modal
                header="Category Details">
                <form @submit.prevent="saveCategory" class="tw-flex tw-flex-col tw-space-y-6">
                    <div
                        class="tw-py-12 tw-flex tw-justify-center tw-rounded-md tw-border-primary tw-shadow tw-relative tw-transition tw-duration-300"
                        :class="isCategoryPreviewBgDark ? 'tw-bg-slate-900' : 'tw-bg-slate-50'">
                        <Badge
                            :content="form.name || 'Text'"
                            :textColor="form.text_color"
                            :backgroundColor="form.background_color" />
                        <button type="button" class="tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-p-1 tw-transition tw-duration-300"
                            :class="isCategoryPreviewBgDark ? 'tw-bg-slate-50 tw-text-slate-900' : 'tw-bg-slate-900 tw-text-slate-50'"
                        @click="toggleCategoryPreviewBg">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="tw-w-5 tw-h-5">
                                <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div class="tw-flex tw-flex-col tw-space-y-4">
                        <div class="tw-flex tw-flex-col tw-space-y-1">
                            <label class="tw-font-bold">Name</label>
                            <TextInput
                                v-model.trim="form.name"
                                autofocus />
                            <InputError :message="form.errors.name" />
                        </div>
                        <div class="tw-flex tw-flex-col tw-space-y-1">
                            <div
                                class="tw-flex tw-flex-row tw-justify-between">
                                <label class="tw-font-bold">Color</label>
                                <Checkbox
                                    v-tooltip.left="{ value: 'Set background and text color same', pt: tooltipTheme }"
                                    v-model="isSameColor"
                                    :binary="true"
                                    @change="setSameColor" />
                            </div>
                            <div
                                class="tw-flex tw-flex-col sm:tw-flex-row tw-space-y-2 sm:tw-space-y-0 tw-space-x-0 sm:tw-space-x-2">
                                <div
                                    class="tw-flex tw-flex-col tw-space-y-1 tw-w-full">
                                    <label class="text-sm tw-font-semibold">Text Color</label>
                                    <div
                                        class="tw-flex tw-flex-row tw-w-full tw-items-center tw-space-x-1">
                                        <ColorPicker
                                            v-model="form.text_color"
                                            @change="
                                                changeColor(TEXT_COLOR)
                                                " />
                                        <TextInput
                                            v-model="form.text_color"
                                            class="tw-w-full"
                                            required="true"
                                            @change="
                                                changeColor(TEXT_COLOR)
                                                " />
                                    </div>
                                    <InputError :message="form.errors.text_color" />
                                </div>
                                <div
                                    class="tw-flex tw-flex-col tw-space-y-1 tw-w-full">
                                    <label class="text-sm tw-font-semibold">Background Color</label>
                                    <div
                                        class="tw-flex tw-flex-row tw-w-full tw-items-center tw-space-x-1">
                                        <ColorPicker
                                            v-model="form.background_color"
                                            @change="
                                                changeColor(
                                                    BACKGROUND_COLOR,
                                                )
                                                " />
                                        <TextInput
                                            v-model="form.background_color"
                                            class="tw-w-full"
                                            required="true"
                                            @change="
                                                changeColor(
                                                    BACKGROUND_COLOR,
                                                )
                                                " />
                                    </div>
                                    <InputError :message="form.errors.background_color" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-row tw-justify-end tw-space-x-2">
                        <Button
                            :loading="form.processing"
                            type="submit"
                            rounded
                            label="Save"
                            icon="pi pi-check" />
                        <Button
                            rounded
                            type="button"
                            label="Cancel"
                            icon="pi pi-times"
                            outlined
                            @click="closeDialog(SAVE_DIALOG)" />
                    </div>
                </form>
            </Dialog>

            <!-- Delete Dialog -->
            <Dialog
                v-model:visible="openCategoryDeleteDialog"
                modal
                header="Confirm"
                class="tw-w-2/5">
                <div
                    class="tw-flex tw-flex-row tw-items-center tw-space-x-2 tw-justify-center">
                    <i
                        class="pi pi-exclamation-triangle tw-mr-3 tw-text-4xl tw-text-red-500 dark:tw-text-red-400" />
                    <span>
                        Are you sure you want to delete
                        <b>{{ form.name }}</b> ?
                    </span>
                </div>
                <template #footer>
                    <Button
                        :loading="form.processing"
                        rounded
                        label="Delete"
                        icon="pi pi-check"
                        autofocus
                        @click="deleteCategory"
                        severity="danger" />
                    <Button
                        rounded
                        label="Cancel"
                        icon="pi pi-times"
                        outlined
                        severity="danger"
                        @click="closeDialog(DELETE_DIALOG)" />
                </template>
            </Dialog>

            <!-- Restore Dialog -->
            <Dialog
                v-model:visible="openCategoryRestoreDialog"
                modal
                header="Confirm"
                class="tw-w-2/5">
                <div
                    class="tw-flex tw-flex-row tw-items-center tw-space-x-2 tw-justify-center">
                    <i
                        class="pi pi-trash tw-mr-3 tw-text-4xl tw-text-green-500 dark:tw-text-green-400" />
                    <span>
                        Are you sure you want to restore
                        <b>{{ form.name }}</b> ?
                    </span>
                </div>
                <template #footer>
                    <Button
                        :loading="form.processing"
                        rounded
                        label="Restore"
                        icon="pi pi-check"
                        autofocus
                        @click="restoreCategory"
                        severity="success" />
                    <Button
                        rounded
                        label="Cancel"
                        icon="pi pi-times"
                        outlined
                        severity="success"
                        @click="closeDialog(RESTORE_DIALOG)" />
                </template>
            </Dialog>
        </div>
    </section>
</template>
