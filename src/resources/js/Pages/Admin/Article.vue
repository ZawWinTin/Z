<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { onMounted, ref, watchEffect } from 'vue';
import { useToast } from 'primevue/usetoast';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toast from 'primevue/toast';
import Image from 'primevue/image';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import MultiSelect from 'primevue/multiselect';
import route from '@/Composables/Common/Route';
import Transitions from '@/Composables/UI/Transitions';
import { getDate } from '@/Composables/Common/Helper';
import initializeEditor from '@/Composables/NoteEditor/Main';
import CategoryBadge from '@/Components/Elements/CategoryBadge.vue';
import InputError from '@/Components/UI/InputError.vue';
import { DataMode } from '@/Constants/DataMode';
import Category from '@/Interfaces/Category';
import Article from '@/Interfaces/Article';
import Paginator from '@/Interfaces/Paginator';

const FILTER_DIALOG = 'filter_dialog';
const SAVE_DIALOG = 'save_dialog';
const DELETE_DIALOG = 'delete_dialog';
const RESTORE_DIALOG = 'restore_dialog';

type ArticleData = {
    articles: Paginator<Article>,
    categories: Array<Category>,
    categoryLimit: number,
    errors: any,
};

const props = withDefaults(
    defineProps<ArticleData>(),
    {
        categoryLimit: 5
    }
);

const form = useForm<{
    id: number | null,
    cover_image: File | null,
    cover_image_object_position: string,
    title: string,
    description: string,
    categories: Array<number>,
    content: string,
}>({
    id: null,
    cover_image: null,
    cover_image_object_position: 'center 50%',
    title: '',
    description: '',
    categories: [],
    content: '',
});

const filters = useForm<{
    global: string,
    mode: number,
    sortField?: string | null,
    sortOrder?: number | null,
    page?: number | null,
    perPage?: number | null,
}>({
    global: '',
    mode: 0,

    sortField: null,
    sortOrder: null,
    page: null,
    perPage: 10,
});

const toast = useToast();

const currentArticles = ref<Paginator<Article> | null>(null);
const allCategories = ref<Array<Category>>([]);

const currentMode = ref<number>(0);

const openArticleFilterDialog = ref(false);
const openArticleSaveDialog = ref(false);
const openArticleDeleteDialog = ref(false);
const openArticleRestoreDialog = ref(false);

const coverImage = {
    placeholder: ref<HTMLElement | null>(null),
    preview: ref<HTMLImageElement | null>(null),
    inputUpload: ref<HTMLInputElement | null>(null),
    isFileExist: ref(false),

    isRepositionMode: ref(false),
    isRepositioning: ref(false),
    initialMousePositionY: ref(0),
    initialObjectPositionY: ref(0),
    defaultObjectPosition: ref(null),
};

const contentEditor = ref<HTMLElement | null>(null);

onMounted(() => {
    loadData(props);
});

watchEffect(() => {
    if (contentEditor.value) {
        initializeEditor(contentEditor.value);
    }
});

const loadData = (data: ArticleData) => {
    currentArticles.value = data.articles;
    allCategories.value = data.categories;
};

const loadArticles = () => {
    filters.post(route('admin.article.index'), {
        preserveScroll: true,
        onSuccess: (data) => {
            loadData(data.props);
        }
    });
};

const onPage = (event: any) => {
    onPageOrSort(event);
};
const onSort = (event: any) => {
    onPageOrSort(event);
};
const onPageOrSort = (event: any) => {
    filters.page = event.page + 1;
    filters.perPage = event.rows;
    filters.sortField = event.sortField;
    filters.sortOrder = event.sortOrder;

    loadArticles();
};

const updateMode = () => {
    let updatedCurrentMode = currentMode.value + 1;
    if (DataMode.hasOwnProperty(updatedCurrentMode)) {
        currentMode.value = updatedCurrentMode;
    } else {
        currentMode.value = 0;
    }
    filters.reset();
    filters.mode = currentMode.value;

    loadArticles();
}

const resetForm = () => {
    form.reset();
    form.clearErrors();
    coverImage.isRepositionMode.value = false;
};

const fileReader = new FileReader();

fileReader.onload = function handleLoad() {
    coverImage.preview.value.src = fileReader.result;
    coverImage.preview.value.style.objectPosition = 'center 50%';
    coverImage.isFileExist.value = true;
};

const uploadCoverImage = () => {
    coverImage.inputUpload.value.click();
};

const onDragEnterCoverImage = () => {
    coverImage.placeholder.value.classList.add('!tw-border-primary');
    coverImage.placeholder.value.querySelector('i').classList.add('!tw-text-primary', '!tw-border-primary');
}
const onDragLeaveCoverImage = () => {
    coverImage.placeholder.value.classList.remove('!tw-border-primary');
    coverImage.placeholder.value.querySelector('i').classList.remove('!tw-text-primary', '!tw-border-primary');
}

const onCoverImageUpload = (event: Event) => {
    let file = (event.target as HTMLInputElement)?.files?.[0];

    if (file) {
        fileReader.readAsDataURL(file);
    } else {
        coverImage.preview.value.src = form.cover_image ? form.cover_image.url : '';
        coverImage.preview.value.style.objectPosition = form.cover_image ? form.cover_image.objectPosition : 'center 50%';
        coverImage.isFileExist.value = !!form.cover_image;
    }
}

const startRepositionCoverImage = () => {
    coverImage.defaultObjectPosition.value = coverImage.preview.value.style.objectPosition;
    coverImage.isRepositionMode.value = true;
};

const mouseDownRepositionCoverImage = (event: MouseEvent) => {
    let { clientY } = event;
    coverImage.isRepositioning.value = true;
    let getInitialObjectPosition = coverImage.preview.value.style.objectPosition.match(/center (\d+)%/);
    coverImage.initialMousePositionY.value = clientY;
    coverImage.initialObjectPositionY.value = getInitialObjectPosition ? parseInt(getInitialObjectPosition[1]) : 50;
}

const mouseMoveRepositionCoverImage = (event: MouseEvent) => {
    if (coverImage.isRepositionMode.value && coverImage.isRepositioning.value) {
        let { clientY } = event;
        let result = coverImage.initialObjectPositionY.value - (((clientY - coverImage.initialMousePositionY.value) / coverImage.initialMousePositionY.value) * 100);
        let mouseYPercentage = Math.min(Math.max(result, 0), 100);

        coverImage.preview.value.style.objectPosition = `center ${mouseYPercentage}%`;
    }
}
const mouseUpRepositionCoverImage = () => {
    coverImage.isRepositioning.value = false;
}

const saveRepositionCoverImage = () => {
    coverImage.isRepositionMode.value = false;
}

const cancelRepositionCoverImage = () => {
    coverImage.preview.value.style.objectPosition = coverImage.defaultObjectPosition.value;
    coverImage.isRepositionMode.value = false;
}

const closeDialog = (dialogType : string) => {
    switch (dialogType) {
        case FILTER_DIALOG:
            openArticleFilterDialog.value = false;
            break;
        case SAVE_DIALOG:
            openArticleSaveDialog.value = false;
            break;
        case DELETE_DIALOG:
            openArticleDeleteDialog.value = false;
            break;
        case RESTORE_DIALOG:
            openArticleRestoreDialog.value = false;
            break;
    }
    resetForm();
};

const openFilterDialog = () => {
    openArticleFilterDialog.value = true;
};

const openSaveDialog = (data : Article | null = null) => {
    resetForm();
    openArticleSaveDialog.value = true;
    coverImage.isFileExist.value = false;
    if (data) {
        form.id = data.id;
        // form.cover_image = data.cover_image;
        form.title = data.title;
        form.description = data.description;
        form.categories = data.categories?.map(item => item['id']);
        form.content = data.content;
        coverImage.isFileExist.value = true;
    }
};

const saveArticle = () => {

};

const openDeleteDialog = (data : Article) => {
    resetForm();
    openArticleDeleteDialog.value = true;
    form.id = data.id;
    form.title = data.title;
};

const deleteArticle = () => {
    form.delete(route('admin.article.destroy'), {
        preserveScroll: true,
        onSuccess: () => {
            toast.add({
                severity: 'success',
                summary: 'Deleted',
                detail: `${form.title} is Deleted Successfully.`,
                life: 3000,
            });
            loadArticles();
            closeDialog(DELETE_DIALOG);
        },
        onError: () => {
            toast.add({
                severity: 'error',
                summary: 'Delete Failed',
                detail: `${form.title} deleting failed!`,
                life: 3000,
            });
        },
    });
};

const openRestoreDialog = (data : Article) => {
    resetForm();
    openArticleRestoreDialog.value = true;
    form.id = data.id;
    form.title = data.title;
};

const restoreArticle = () => {
    form.put(route('admin.article.restore'), {
        preserveScroll: true,
        onSuccess: () => {
            toast.add({
                severity: 'success',
                summary: 'Restore',
                detail: `${form.title} is Restored Successfully.`,
                life: 3000,
            });
            loadArticles();
            closeDialog(RESTORE_DIALOG);
        },
        onError: () => {
            toast.add({
                severity: 'error',
                summary: 'Restore Failed',
                detail: `${form.title} restoring failed!`,
                life: 3000,
            });
        },
    });
};
</script>
<template>
    <section>
        <Head title="Article - Admin" />
        <h1
            class="tw-font-bold tw-text-2xl tw-text-primary tw-uppercase tw-mb-4"
        >
            Articles
        </h1>
        <Toast />
        <div
            class="tw-w-full main-bg-2 tw-shadow-lg tw-rounded-lg tw-p-4 tw-duration-300 tw-transition tw-flex tw-flex-col"
        >
            <DataTable
                removableSort
                :value="currentArticles?.data"
                scrollable
                scrollHeight="52vh"
                lazy
                paginator
                :rows="10"
                :rowsPerPageOptions="[5, 10, 20]"
                :totalRecords="currentArticles?.total" :loading="filters.processing || form.processing" @page="onPage($event)" @sort="onSort($event)"
                dataKey="id">
                <template #header>
                    <div class="tw-flex tw-justify-between tw-items-center tw-space-x-4 tw-pb-2">
                        <div
                            class="tw-flex tw-justify-start tw-items-center tw-space-x-4 tw-w-full"
                        >
                            <Button :label="DataMode[currentMode].label"
                                :icon="DataMode[currentMode].icon"
                                :outlined="DataMode[currentMode].outlined" @click="updateMode" rounded />
                            <Button
                                icon="pi pi-search"
                                class="tw-w-10 tw-h-10"
                                rounded outlined
                                @click="openFilterDialog()"
                            />
                        </div>
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
                            <template v-if="DataMode[currentMode].label != 'Trash'">
                                <Button
                                    icon="pi pi-plus"
                                    class="tw-w-10 tw-h-10"
                                    rounded
                                    @click="openSaveDialog()"
                                />
                            </template>
                        </transition>
                    </div>
                </template>
                <template #empty> No articles exist.</template>
                <Column field="id" header="ID" class="tw-w-1/7" sortable>
                    <template #body="slotProps">
                        {{ slotProps.data.id }}
                    </template>
                </Column>
                <Column field="cover" header="Cover Image" class="tw-w-1/7">
                    <template #body="slotProps">
                        <Image :src="slotProps.data.cover_image.url" alt="Image" width="80" preview />
                    </template>
                </Column>
                <Column field="title" header="Title" class="tw-w-1/7" sortable>
                    <template #body="slotProps">
                        <div class="tw-text-left">{{ slotProps.data.title }}</div>
                    </template>
                </Column>
                <Column field="description" header="Description" class="tw-w-1/7">
                    <template #body="slotProps">
                        <div class="tw-text-justify">{{ slotProps.data.description }}</div>
                    </template>
                </Column>
                <Column field="categories" header="Categories" class="tw-w-1/7">
                    <template #body="slotProps">
                        <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
                            <template v-for="category in slotProps.data.categories" :key="category.id">
                                <CategoryBadge :category="category" />
                            </template>
                        </div>
                    </template>
                </Column>
                <Column
                    field="created_at"
                    header="Created Date"
                    class="tw-w-1/7"
                    sortable>
                    <template #body="slotProps">
                        {{ getDate(slotProps.data.created_at) }}
                    </template>
                </Column>
                <Column
                    header="Options"
                    class="tw-w-1/7">
                    <template #body="slotProps">
                        <div class="tw-flex tw-flex-row tw-space-x-2">
                            <template v-if="!slotProps.data.deleted_at">
                                <Button
                                    icon="pi pi-cog"
                                    outlined
                                    rounded
                                    severity="info"
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
                            <template v-if="!!slotProps.data.deleted_at">
                                <Button
                                    icon="pi pi-replay"
                                    outlined
                                    rounded
                                    severity="success"
                                    class="tw-w-10 tw-h-10"
                                    @click="openRestoreDialog(slotProps.data)" />
                            </template>
                        </div>
                    </template>
                </Column>
                <template #footer> In total, there are <b>{{ currentArticles?.total || 0 }}</b> articles.</template>
            </DataTable>

            <!-- Filter Dialog -->
            <Dialog
                v-model:visible="openArticleFilterDialog"
                modal
                header="Advanced Search">
            </Dialog>

            <!-- Create/Update Dialog -->
            <Dialog maximizable :style="{ width: '90vw' }"
                v-model:visible="openArticleSaveDialog"
                modal
                :closeOnEscape="false"
                header="Article Details">
                <div class="tw-flex tw-flex-col tw-space-y-4">
                    <div>
                        <div class="tw-relative -tw-mx-6 tw-h-48 tw-group">
                            <!-- Placeholder -->
                            <div :ref="coverImage.placeholder"
                                class="tw-absolute main-bg-3 tw-inset-0 tw-flex tw-transition tw-duration-300 tw-justify-center tw-items-center tw-border-2 tw-border-dashed tw-border-transparent group-hover:dark:tw-border-slate-400/60 group-hover:tw-border-slate-700/60">
                                <i class="pi pi-cloud-upload tw-transition tw-duration-300 tw-border-2 tw-rounded-full tw-p-5 tw-text-6xl main-text !tw-text-opacity-60 tw-border-slate-700/60 dark:tw-border-slate-400/60" />
                            </div>
                            <!-- PreviewImage -->
                            <img :ref="coverImage.preview" class="tw-relative tw-w-full tw-h-full tw-object-cover" alt="Cover Image"
                                :src="form.cover_image ? form.cover_image.url : ''" :style="`object-position: ${form.cover_image?.object_position || 'center 50%'}`" />
                            <!-- Clickable, Drag & Drop Area -->
                            <input class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-opacity-0 tw-cursor-pointer" title="Upload Image"
                                @dragenter="onDragEnterCoverImage"
                                @dragleave="onDragLeaveCoverImage"
                                @drop="onDragLeaveCoverImage"
                                @change="onCoverImageUpload($event)"
                                required
                                :ref="coverImage.inputUpload" type="file" accept="image/*">
                            <!-- Reposition Area -->
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
                                <template v-if="coverImage.isRepositionMode.value">
                                    <div
                                        @mousedown="mouseDownRepositionCoverImage($event)"
                                        class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-cursor-move">
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
                                            <span v-if="!coverImage.isRepositioning.value" class="tw-px-4 tw-py-2 tw-bg-primary/80 tw-rounded-full tw-text-slate-50 tw-select-none">Drag Image to Reposition</span>
                                        </transition>
                                    </div>
                                </template>
                            </transition>
                            <template v-if="coverImage.isRepositionMode.value && coverImage.isRepositioning.value">
                                <div class="tw-fixed tw-left-[-50%] tw-top-[-9%] tw-w-screen tw-h-screen  tw-cursor-move"
                                    @mousemove="mouseMoveRepositionCoverImage($event)"
                                    @mouseup="mouseUpRepositionCoverImage">
                                </div>
                            </template>
                            <span class="!tw-absolute tw-ml-4 tw-bottom-4 tw-opacity-0 group-hover:tw-opacity-100 tw-transition tw-duration-300 tw-flex">
                                <template v-if="!coverImage.isRepositionMode.value">
                                    <Button
                                        icon="pi pi-upload"
                                        size="small"
                                        severity="secondary"
                                        @click="uploadCoverImage"
                                        :class="coverImage.isFileExist.value ? 'tw-rounded-s-full tw-border-r-slate-300/10' : '!tw-rounded-full'"
                                        :label="coverImage.isFileExist.value ? 'Change Cover' : 'Add Cover'"/>
                                    <Button
                                        icon="pi pi-arrows-alt"
                                        size="small"
                                        class="tw-rounded-e-full"
                                        severity="secondary"
                                        @click="startRepositionCoverImage"
                                        :class="{ 'tw-hidden' : !coverImage.isFileExist.value }"
                                        label="Reposition"/>
                                </template>
                                <template v-if="coverImage.isRepositionMode.value">
                                    <Button
                                        icon="pi pi-check"
                                        size="small"
                                        class="tw-rounded-s-full tw-border-r-slate-300/10"
                                        severity="secondary"
                                        @click="saveRepositionCoverImage"
                                        label="Save Position"/>
                                    <Button
                                        icon="pi pi-times"
                                        size="small"
                                        class="tw-rounded-e-full"
                                        severity="secondary"
                                        @click="cancelRepositionCoverImage"
                                        label="Cancel"/>
                                </template>
                            </span>
                        </div>
                        <InputError class="tw-text-center" :message="form.errors.cover_image" />
                    </div>
                    <div class="tw-flex tw-flex-col tw-space-y-1">
                        <label class="tw-font-bold">Title</label>
                        <Textarea v-model.trim="form.title" autoResize rows="1" autofocus />
                        <InputError :message="form.errors.title" />
                    </div>
                    <div class="tw-flex tw-flex-col tw-space-y-1">
                        <label class="tw-font-bold">Description</label>
                        <Textarea v-model.trim="form.description" autoResize rows="2" />
                        <InputError :message="form.errors.description" />
                    </div>
                    <div class="tw-flex tw-flex-col tw-space-y-1">
                        <label class="tw-font-bold">Categories</label>
                        <MultiSelect v-model="form.categories"
                            display="chip" filter
                            :options="allCategories"
                            optionLabel="name"
                            optionValue="id"
                            optionDisabled="deleted_at"
                            :selectionLimit="props.categoryLimit"
                            :maxSelectedLabels="props.categoryLimit"/>
                        <InputError :message="form.errors.categories" />
                    </div>
                    <div class="tw-flex tw-flex-col tw-space-y-1">
                        <label class="tw-font-bold">Content</label>
                        <InputError :message="form.errors.content" />
                        <div ref="contentEditor"
                            class="
                            tw-rounded-md
                            tw-w-full
                            tw-min-h-[6rem]
                            tw-border
                            tw-transition
                            tw-duration-300
                            tw-shadow-sm
                            main-input-border
                            main-bg-3
                            focus-within:main-primary-focus
                            main-text-for-input"
                        >
                        </div>
                    </div>
                </div>
                <template #footer>
                    <Button
                        :loading="form.processing"
                        rounded
                        label="Save"
                        icon="pi pi-check"
                        :disabled="coverImage.isRepositionMode.value"
                        @click="saveArticle" />
                    <Button
                        rounded
                        label="Cancel"
                        icon="pi pi-times"
                        outlined
                        @click="closeDialog(SAVE_DIALOG)" />
                </template>
            </Dialog>
            <!-- Delete Dialog -->
            <Dialog
                v-model:visible="openArticleDeleteDialog"
                modal
                header="Confirm"
                class="tw-w-2/5">
                <div
                    class="tw-flex tw-flex-row tw-items-center tw-space-x-2 tw-justify-center">
                    <i
                        class="pi pi-exclamation-triangle tw-mr-3 tw-text-4xl tw-text-red-500 dark:tw-text-red-400" />
                    <span>
                        Are you sure you want to delete
                        <b>{{ form.title }}</b> ?
                    </span>
                </div>
                <template #footer>
                    <Button
                        :loading="form.processing"
                        rounded
                        label="Delete"
                        icon="pi pi-check"
                        autofocus
                        @click="deleteArticle"
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
                v-model:visible="openArticleRestoreDialog"
                modal
                header="Confirm"
                class="tw-w-2/5">
                <div
                    class="tw-flex tw-flex-row tw-items-center tw-space-x-2 tw-justify-center">
                    <i
                        class="pi pi-trash tw-mr-3 tw-text-4xl tw-text-green-500 dark:tw-text-green-400" />
                    <span>
                        Are you sure you want to restore
                        <b>{{ form.title }}</b> ?
                    </span>
                </div>
                <template #footer>
                    <Button
                        :loading="form.processing"
                        rounded
                        label="Restore"
                        icon="pi pi-check"
                        autofocus
                        @click="restoreArticle"
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
