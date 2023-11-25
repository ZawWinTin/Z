<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import { onMounted, ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import route from '@/Composables/Route';
import Badge from '@/Components/UI/Badge.vue';
import Dialog from 'primevue/dialog';
import Checkbox from 'primevue/checkbox';
import ColorPicker from 'primevue/colorpicker';

const toast = useToast();
const openCategorySaveDialog = ref(false);
const openCategoryDeleteDialog = ref(false);
const isSameColor = ref(false);
const isLoading = ref(false);

const BACKGROUND_COLOR = 'background_color';
const TEXT_COLOR = 'text_color';
const SAVE_DIALOG = 'save_dialog';
const DELETE_DIALOG = 'delete_dialog';

const props = defineProps({
    categories: {
        type: Array,
    },
    errors: Object,
});

const currentCategories = ref([]);

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
    currentCategories.value = props.categories;
});

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

const saveCategory = () => {
    isLoading.value = true;
    form.clearErrors();
    form.post(route('admin.category.save'), {
        preserveScroll: true,
        preserveState: (page) => { return !(Object.keys(page.props.errors).length == 0) },
        onSuccess: () => {
            closeDialog(SAVE_DIALOG);
            toast.add({
                severity: 'success',
                summary: 'Saved',
                detail: 'Category is Saved Successfully',
                life: 3000,
            });
        },
        onFinish: () => {
            isLoading.value = false;
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
    isLoading.value = true;
    form.delete(route('admin.category.destroy'), {
        preserveScroll: true,
        preserveState: false,
        onSuccess: () => {
            isLoading.value = false;
            closeDialog(DELETE_DIALOG);
            toast.add({
                severity: 'success',
                summary: 'Deleted',
                detail: 'Category is Deleted Successfully',
                life: 3000,
            });
        },
        onError: () => {
            toast.add({
                severity: 'danger',
                summary: 'Delete Failed',
                detail: 'Category deleting failed!',
                life: 3000,
            });
        },
        onFinish: () => {
            isLoading.value = false;
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
            class="tw-bg-slate-50 dark:tw-bg-slate-900 tw-shadow-lg tw-rounded-lg tw-p-6 tw-text-slate-900 dark:tw-text-slate-100">
            <div>
                <DataTable
                    stripedRows
                    removableSort
                    v-model:filters="filters"
                    :value="currentCategories"
                    paginator
                    :rows="10"
                    :rowsPerPageOptions="[5, 10, 20, 50]"
                    dataKey="id"
                    :globalFilterFields="['id', 'name']">
                    <template #header>
                        <div class="tw-flex tw-justify-between">
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText
                                    v-model="filters['global'].value"
                                    placeholder="Keyword Search" />
                            </span>
                            <Button
                                icon="pi pi-plus"
                                rounded
                                raised
                                @click="openSaveDialog()" />
                        </div>
                    </template>
                    <template #empty> No categories found. </template>
                    <Column field="id" header="ID" class="tw-w-max" sortable>
                        <template #body="slotProps">
                            {{ slotProps.data.id }}
                        </template>
                    </Column>
                    <Column
                        field="name"
                        header="Name"
                        class="tw-w-2/5"
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
                        header="Options"
                        class="tw-w-full tw-flex tw-flex-row tw-space-x-2">
                        <template #body="slotProps">
                            <Button
                                icon="pi pi-pencil"
                                outlined
                                rounded
                                severity="warning"
                                class="mr-2"
                                @click="openSaveDialog(slotProps.data)" />
                            <Button
                                icon="pi pi-trash"
                                outlined
                                rounded
                                severity="danger"
                                @click="openDeleteDialog(slotProps.data)" />
                        </template>
                    </Column>
                </DataTable>

                <!-- Create/Update Dialog -->
                <Dialog
                    v-model:visible="openCategorySaveDialog"
                    modal
                    header="Category Details"
                    class="tw-w-3/5">
                    <form @submit.prevent="saveCategory" class="tw-flex tw-flex-col tw-space-y-6">
                        <div
                            class="tw-p-4 tw-flex tw-justify-center tw-bg-slate-50 tw-rounded-md">
                            <Badge
                                :content="form.name || 'Text'"
                                :textColor="form.text_color"
                                :backgroundColor="form.background_color" />
                        </div>
                        <div class="tw-flex tw-flex-col tw-space-y-4">
                            <div class="tw-flex tw-flex-col tw-space-y-1">
                                <label class="tw-font-bold">Name</label>
                                <InputText
                                    v-model.trim="form.name"
                                    autofocus />
                                <small
                                    class="p-error"
                                    v-if="form.errors.name">{{ form.errors.name }}</small>
                            </div>
                            <div class="tw-flex tw-flex-col tw-space-y-1">
                                <div
                                    class="tw-flex tw-flex-row tw-justify-between">
                                    <label class="tw-font-bold">Color</label>
                                    <Checkbox
                                        v-tooltip.left="'Set background and text Color same'"
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
                                            <InputText
                                                v-model="form.text_color"
                                                class="tw-w-full"
                                                required="true"
                                                @change="
                                                    changeColor(TEXT_COLOR)
                                                    " />
                                        </div>
                                        <small
                                            class="p-error"
                                            v-if="form.errors.name">{{ form.errors.text_color }}</small>
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
                                            <InputText
                                                v-model="form.background_color"
                                                class="tw-w-full"
                                                required="true"
                                                @change="
                                                    changeColor(
                                                        BACKGROUND_COLOR,
                                                    )
                                                    " />
                                        </div>
                                        <small
                                            class="p-error"
                                            v-if="form.errors.name">{{
                                                form.errors.background_color
                                            }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tw-flex tw-flex-row tw-justify-end tw-space-x-2">
                            <Button
                                :loading="isLoading"
                                type="submit"
                                rounded
                                label="Save"
                                icon="pi pi-check" />
                            <Button
                                rounded
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
                            class="pi pi-exclamation-triangle mr-3 tw-text-4xl" />
                        <span>
                            Are you sure you want to delete
                            <b>{{ form.name }}</b> ?
                        </span>
                    </div>
                    <template #footer>
                        <Button
                            :loading="isLoading"
                            rounded
                            label="Delete"
                            icon="pi pi-check"
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
            </div>
        </div>
    </section>
</template>
