<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import ColorPicker from 'primevue/colorpicker';
import route from '@/Composables/Common/Route';
import { getDate } from '@/Composables/Common/Helper';
import Transitions from '@/Composables/UI/Transitions';
import Tooltip from '@/Composables/UI/Elements/Tooltip';
import CategoryBadge from '@/Components/Elements/CategoryBadge.vue';
import InputError from '@/Components/UI/InputError.vue';
import { MoonIcon } from '@heroicons/vue/20/solid';
import Category from '@/Interfaces/Category';
import { DataMode } from '@/Constants/DataMode';

const toast = useToast();

const openCategorySaveDialog = ref(false);
const openCategoryDeleteDialog = ref(false);
const openCategoryRestoreDialog = ref(false);

const isSameColor = ref(false);
const isCategoryPreviewBgDark = ref(false);

const currentMode = ref<number>(0);

const currentCategories = ref<Array<Category>>([]);

const BACKGROUND_COLOR = 'background_color';
const TEXT_COLOR = 'text_color';

const SAVE_DIALOG = 'save_dialog';
const DELETE_DIALOG = 'delete_dialog';
const RESTORE_DIALOG = 'restore_dialog';

type CategoryData = {
    categories: Array<Category>;
    errors: any;
};

const props = defineProps<CategoryData>();

const form = useForm<{
    id: number | null;
    name: string;
    text_color: string;
    background_color: string;
}>({
    id: null,
    name: '',
    text_color: '#FFFFFF',
    background_color: '#000000',
});

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

onMounted(() => {
    loadCategories(props);
});

const loadCategories = (data: CategoryData) => {
    currentCategories.value = data.categories;
};

const getCategories = computed(() => {
    return currentCategories.value.filter(category => {
        switch (DataMode[currentMode.value].label) {
            case 'Active':
                return category.deleted_at == null;
            case 'Trash':
                return category.deleted_at != null;
            case 'All':
                return true;
        }
    });
});

const updateMode = () => {
    const updatedCurrentMode = currentMode.value + 1;
    if (Object.prototype.hasOwnProperty.call(DataMode, updatedCurrentMode)) {
        currentMode.value = updatedCurrentMode;
    } else {
        currentMode.value = 0;
    }
};

const toggleCategoryPreviewBg = () => {
    isCategoryPreviewBgDark.value = !isCategoryPreviewBgDark.value;
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

const changeColor = (colorType: string) => {
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

const closeDialog = (dialogType: string) => {
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

const openSaveDialog = (data: Category | null = null) => {
    resetForm();
    openCategorySaveDialog.value = true;
    if (data) {
        form.id = data.id;
        form.name = data.name;
        form.text_color = data.text_color;
        form.background_color = data.background_color;
    }
};

const saveCategory = () => {
    form.clearErrors();
    form.post(route('admin.category.save'), {
        preserveScroll: true,
        onSuccess: data => {
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

const openDeleteDialog = (data: Category) => {
    resetForm();
    openCategoryDeleteDialog.value = true;
    form.id = data.id;
    form.name = data.name;
};

const deleteCategory = () => {
    form.delete(route('admin.category.destroy'), {
        preserveScroll: true,
        onSuccess: data => {
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

const openRestoreDialog = (data: Category) => {
    resetForm();
    openCategoryRestoreDialog.value = true;
    form.id = data.id;
    form.name = data.name;
};

const restoreCategory = () => {
    form.put(route('admin.category.restore'), {
        preserveScroll: true,
        onSuccess: data => {
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
    <section class="tw-flex tw-h-full tw-flex-col tw-space-y-4">
        <Head title="Category - Admin" />
        <h1
            class="tw-h-8 tw-text-2xl tw-font-bold tw-uppercase tw-text-primary"
        >
            Categories
        </h1>
        <Toast />
        <div
            class="main-bg-2 tw-h-[calc(100%-3rem)] tw-rounded-lg tw-p-4 tw-text-slate-900 tw-shadow-lg tw-transition tw-duration-300 dark:tw-text-slate-100"
        >
            <DataTable
                removableSort
                v-model:filters="filters"
                :value="getCategories"
                scrollable
                scrollHeight="flex"
                paginator
                :rows="10"
                :rowsPerPageOptions="[5, 10, 20]"
                dataKey="id"
                :globalFilterFields="['id', 'name']"
            >
                <template #header>
                    <div class="tw-flex tw-items-center tw-justify-between">
                        <div
                            class="tw-flex tw-items-center tw-justify-start tw-space-x-4"
                        >
                            <Button
                                :label="DataMode[currentMode].label"
                                :icon="DataMode[currentMode].icon"
                                :outlined="DataMode[currentMode].outlined"
                                @click="updateMode"
                                rounded
                            />
                            <div>
                                <span class="p-input-icon-left">
                                    <i
                                        class="pi pi-search main-text tw-left-3"
                                    />
                                    <InputText
                                        class="tw-pl-10"
                                        v-model="filters['global'].value"
                                        placeholder="Search"
                                    />
                                </span>
                            </div>
                        </div>
                        <transition
                            :enter-from-class="
                                Transitions.overlay.enterFromClass
                            "
                            :enter-active-class="
                                Transitions.overlay.enterActiveClass
                            "
                            :leave-active-class="
                                Transitions.overlay.leaveActiveClass
                            "
                            :leave-to-class="Transitions.overlay.leaveToClass"
                        >
                            <template
                                v-if="DataMode[currentMode].label != 'Trash'"
                            >
                                <Button
                                    icon="pi pi-plus"
                                    class="tw-h-10 tw-w-10"
                                    rounded
                                    @click="openSaveDialog()"
                                />
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
                <Column field="name" header="Name" class="tw-w-1/5" sortable>
                    <template #body="slotProps">
                        <CategoryBadge :category="slotProps.data" />
                    </template>
                </Column>
                <Column
                    field="created_at"
                    header="Created Date"
                    class="tw-w-1/5"
                    sortable
                >
                    <template #body="slotProps">
                        {{ getDate(slotProps.data.created_at) }}
                    </template>
                </Column>
                <Column
                    field="articles_count"
                    header="Quantity"
                    class="tw-w-1/5"
                    sortable
                >
                    <template #body="slotProps">
                        {{ slotProps.data.articles_count }}
                    </template>
                </Column>
                <Column header="Options" class="tw-w-1/5">
                    <template #body="slotProps">
                        <div class="tw-flex tw-flex-row tw-space-x-2">
                            <template v-if="!slotProps.data.deleted_at">
                                <Button
                                    icon="pi pi-pencil"
                                    outlined
                                    rounded
                                    severity="warning"
                                    class="tw-h-10 tw-w-10"
                                    @click="openSaveDialog(slotProps.data)"
                                />
                                <Button
                                    icon="pi pi-trash"
                                    outlined
                                    rounded
                                    severity="danger"
                                    class="tw-h-10 tw-w-10"
                                    @click="openDeleteDialog(slotProps.data)"
                                />
                            </template>
                            <template v-if="!!slotProps.data.deleted_at">
                                <Button
                                    icon="pi pi-replay"
                                    outlined
                                    rounded
                                    severity="success"
                                    class="tw-h-10 tw-w-10"
                                    @click="openRestoreDialog(slotProps.data)"
                                />
                            </template>
                        </div>
                    </template>
                </Column>
                <template #footer>
                    In total, there are
                    <b>{{ getCategories ? getCategories.length : 0 }}</b>
                    categories.</template
                >
            </DataTable>
        </div>

        <!-- Create/Update Dialog -->
        <Dialog
            v-model:visible="openCategorySaveDialog"
            modal
            header="Category Details"
        >
            <form
                @submit.prevent="saveCategory"
                class="tw-flex tw-flex-col tw-space-y-6"
            >
                <div
                    class="tw-relative tw-flex tw-justify-center tw-rounded-md tw-border-primary tw-py-12 tw-shadow tw-transition tw-duration-300"
                    :class="
                        isCategoryPreviewBgDark
                            ? 'main-bg-3-dark-only'
                            : 'main-bg-3-light-only'
                    "
                >
                    <CategoryBadge
                        :category="{
                            name: form.name || 'Text',
                            text_color: form.text_color,
                            background_color: form.background_color,
                        }"
                    />
                    <button
                        type="button"
                        class="focus:main-primary-focus tw-absolute tw-right-3 tw-top-3 tw-rounded-full tw-p-1 tw-transition tw-duration-300"
                        :class="
                            isCategoryPreviewBgDark
                                ? 'main-bg-3-light-only tw-text-slate-900'
                                : 'main-bg-3-dark-only tw-text-slate-50'
                        "
                        @click="toggleCategoryPreviewBg"
                    >
                        <span>
                            <MoonIcon class="tw-h-5 tw-w-5" />
                        </span>
                    </button>
                </div>
                <div class="tw-flex tw-flex-col tw-space-y-4">
                    <div class="tw-flex tw-flex-col tw-space-y-1">
                        <label class="tw-font-bold">Name</label>
                        <InputText v-model.trim="form.name" autofocus />
                        <InputError :message="form.errors.name" />
                    </div>
                    <div class="tw-flex tw-flex-col tw-space-y-1">
                        <div class="tw-flex tw-flex-row tw-justify-between">
                            <label class="tw-font-bold">Color</label>
                            <Checkbox
                                v-tooltip.left="{
                                    value: 'Set background and text color same',
                                    showDelay: 500,
                                    pt: Tooltip,
                                }"
                                v-model="isSameColor"
                                :binary="true"
                                @change="setSameColor"
                            />
                        </div>
                        <div
                            class="tw-flex tw-flex-col tw-space-x-0 tw-space-y-2 sm:tw-flex-row sm:tw-space-x-2 sm:tw-space-y-0"
                        >
                            <div
                                class="tw-flex tw-w-full tw-flex-col tw-space-y-1"
                            >
                                <label class="text-sm tw-font-semibold"
                                    >Text Color</label
                                >
                                <div
                                    class="tw-flex tw-w-full tw-flex-row tw-items-center tw-space-x-1"
                                >
                                    <ColorPicker
                                        v-model="form.text_color"
                                        @change="changeColor(TEXT_COLOR)"
                                    />
                                    <InputText
                                        v-model="form.text_color"
                                        class="tw-w-full"
                                        required="true"
                                        @change="changeColor(TEXT_COLOR)"
                                    />
                                </div>
                                <InputError :message="form.errors.text_color" />
                            </div>
                            <div
                                class="tw-flex tw-w-full tw-flex-col tw-space-y-1"
                            >
                                <label class="text-sm tw-font-semibold"
                                    >Background Color</label
                                >
                                <div
                                    class="tw-flex tw-w-full tw-flex-row tw-items-center tw-space-x-1"
                                >
                                    <ColorPicker
                                        v-model="form.background_color"
                                        @change="changeColor(BACKGROUND_COLOR)"
                                    />
                                    <InputText
                                        v-model="form.background_color"
                                        class="tw-w-full"
                                        required="true"
                                        @change="changeColor(BACKGROUND_COLOR)"
                                    />
                                </div>
                                <InputError
                                    :message="form.errors.background_color"
                                />
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
                        icon="pi pi-check"
                    />
                    <Button
                        rounded
                        type="button"
                        label="Cancel"
                        icon="pi pi-times"
                        outlined
                        @click="closeDialog(SAVE_DIALOG)"
                    />
                </div>
            </form>
        </Dialog>

        <!-- Delete Dialog -->
        <Dialog
            v-model:visible="openCategoryDeleteDialog"
            modal
            header="Confirm"
            class="tw-w-2/5"
        >
            <div
                class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-x-2"
            >
                <i
                    class="pi pi-exclamation-triangle tw-mr-3 tw-text-4xl tw-text-red-500 dark:tw-text-red-400"
                />
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
                    severity="danger"
                />
                <Button
                    rounded
                    label="Cancel"
                    icon="pi pi-times"
                    outlined
                    severity="danger"
                    @click="closeDialog(DELETE_DIALOG)"
                />
            </template>
        </Dialog>

        <!-- Restore Dialog -->
        <Dialog
            v-model:visible="openCategoryRestoreDialog"
            modal
            header="Confirm"
            class="tw-w-2/5"
        >
            <div
                class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-x-2"
            >
                <i
                    class="pi pi-trash tw-mr-3 tw-text-4xl tw-text-green-500 dark:tw-text-green-400"
                />
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
                    severity="success"
                />
                <Button
                    rounded
                    label="Cancel"
                    icon="pi pi-times"
                    outlined
                    severity="success"
                    @click="closeDialog(RESTORE_DIALOG)"
                />
            </template>
        </Dialog>
    </section>
</template>
