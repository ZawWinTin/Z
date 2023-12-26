<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { getDate } from '@/Composables/Common/Helper';
import Contact from '@/Interfaces/Contact';
import { ref, computed, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import route from '@/Composables/Common/Route';
import Star from '@/Components/UI/Star.vue';
import UnreadEnvelope from '@/Components/UI/UnreadEnvelope.vue';
import Dropdown from 'primevue/dropdown';
import {
    InboxStackIcon,
    StarIcon,
    EnvelopeOpenIcon,
    EnvelopeIcon,
} from '@heroicons/vue/24/solid';

const toast = useToast();

type ContactData = {
    contacts: Array<Contact>;
    errors: any;
};

const props = defineProps<ContactData>();

const currentContacts = ref<Array<Contact>>([]);

const openContactDetailDialog = ref(false);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const form = useForm({});

const initialDetail = {
    id: -1,
    name: '',
    email: '',
    content: '',
    is_checked: false,
    is_favorite: false,
    created_at: '',
};
const currentDetail = ref<Contact>(initialDetail);

type DataModeType = {
    name: string;
    component: any;
};
const currentMode = ref<DataModeType | null>(null);
const DataMode = <Array<DataModeType>>[
    { name: 'All', component: InboxStackIcon },
    { name: 'Favorite', component: StarIcon },
    { name: 'Read', component: EnvelopeOpenIcon },
    { name: 'Unread', component: EnvelopeIcon },
];

const loadContacts = (data: ContactData) => {
    currentContacts.value = data.contacts;
    if (currentDetail.value.id != -1) {
        currentDetail.value = currentContacts.value.find(contact => {
            return contact.id == currentDetail.value.id;
        }) as Contact;
    }
};

const getContacts = computed(() => {
    return currentContacts.value.filter(contact => {
        switch (currentMode.value?.name) {
            case 'All':
                return true;
            case 'Favorite':
                return contact.is_favorite;
            case 'Read':
                return contact.is_checked;
            case 'Unread':
                return !contact.is_checked;
        }
    });
});

onMounted(() => {
    loadContacts(props);
    currentMode.value = DataMode[0];
});

const openDetailDialog = (data: Contact) => {
    openContactDetailDialog.value = true;
    currentDetail.value = initialDetail;
    currentDetail.value = data;
    setTimeout(() => {
        if (openContactDetailDialog.value && !currentDetail.value.is_checked) {
            setRead(currentDetail.value.id);
        }
    }, 5 * 1000);
};

const contactClassesForRead = (isRead: boolean) => {
    return isRead ? 'main-text' : 'tw-font-semibold main-text-for-input';
};

const setRead = (id: number) => {
    form.post(route('admin.contact.read', id), {
        preserveScroll: true,
        onSuccess: data => {
            loadContacts(data.props);
        },
        onError: () => {
            toast.add({
                severity: 'error',
                summary: 'Read Failed',
                detail: `Contact ${id} cannot be read!`,
                life: 3000,
            });
        },
    });
};

const setUnread = (id: number) => {
    form.post(route('admin.contact.unread', id), {
        preserveScroll: true,
        onSuccess: data => {
            loadContacts(data.props);
            openContactDetailDialog.value = false;
        },
        onError: () => {
            toast.add({
                severity: 'error',
                summary: 'Unread Failed',
                detail: `Contact ${id} cannot be unread!`,
                life: 3000,
            });
        },
    });
};

const toggleFavorite = (id: number) => {
    form.post(route('admin.contact.favorite', id), {
        preserveScroll: true,
        onSuccess: data => {
            loadContacts(data.props);
        },
        onError: () => {
            toast.add({
                severity: 'error',
                summary: 'Set Favorite Failed',
                detail: `Contact ${id} cannot be added to favorite!`,
                life: 3000,
            });
        },
    });
};

const replyMail = () => {
    location.href = `mailto:${currentDetail.value.email}`;
};
</script>
<template>
    <section class="tw-flex tw-h-full tw-flex-col tw-space-y-4">
        <Head title="Category - Admin" />
        <h1
            class="tw-h-8 tw-text-2xl tw-font-bold tw-uppercase tw-text-primary"
        >
            Contacts
        </h1>
        <Toast />
        <div
            class="main-bg-2 tw-h-[calc(100%-3rem)] tw-rounded-lg tw-p-4 tw-text-slate-900 tw-shadow-lg tw-transition tw-duration-300 dark:tw-text-slate-100"
        >
            <DataTable
                removableSort
                v-model:filters="filters"
                :value="getContacts"
                scrollable
                scrollHeight="flex"
                paginator
                :rows="10"
                :rowsPerPageOptions="[5, 10, 20]"
                dataKey="id"
                :globalFilterFields="['id', 'name', 'email', 'content']"
            >
                <template #header>
                    <div class="tw-flex tw-items-center tw-justify-between">
                        <div
                            class="tw-flex tw-items-center tw-justify-start tw-space-x-4"
                        >
                            <Dropdown
                                v-model="currentMode"
                                :options="DataMode"
                                :pt="{ input: 'tw-py-2 tw-px-4' }"
                            >
                                <template #value="slotProps">
                                    <div
                                        v-if="slotProps.value"
                                        class="main-text-for-input tw-flex tw-items-center tw-space-x-2"
                                    >
                                        <component
                                            class="tw-h-5 tw-w-5"
                                            :is="slotProps.value.component"
                                        />
                                        <div>{{ slotProps.value.name }}</div>
                                    </div>
                                </template>
                                <template #option="slotProps">
                                    <div
                                        class="main-text tw-flex tw-items-center tw-space-x-2"
                                    >
                                        <component
                                            class="tw-h-5 tw-w-5"
                                            :is="slotProps.option.component"
                                        />
                                        <div>{{ slotProps.option.name }}</div>
                                    </div>
                                </template>
                            </Dropdown>
                            <div class="tw-w-full">
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
                    </div>
                </template>
                <template #empty> No contacts exist.</template>
                <Column field="id" header="ID" class="tw-w-1/6" sortable>
                    <template #body="slotProps">
                        <div
                            :class="
                                contactClassesForRead(slotProps.data.is_checked)
                            "
                        >
                            {{ slotProps.data.id }}
                        </div>
                    </template>
                </Column>
                <Column headerStyle="width: 3rem">
                    <template #body="slotProps">
                        <div
                            :class="
                                contactClassesForRead(slotProps.data.is_checked)
                            "
                        >
                            <Star
                                :checked="slotProps.data.is_favorite"
                                @clicked="toggleFavorite(slotProps.data.id)"
                            />
                        </div>
                    </template>
                </Column>
                <Column field="name" header="Name" class="tw-w-1/6" sortable>
                    <template #body="slotProps">
                        <div
                            :class="
                                contactClassesForRead(slotProps.data.is_checked)
                            "
                        >
                            {{ slotProps.data.name }}
                        </div>
                    </template>
                </Column>
                <Column field="email" header="Email" class="tw-w-1/6" sortable>
                    <template #body="slotProps">
                        <div
                            :class="
                                contactClassesForRead(slotProps.data.is_checked)
                            "
                        >
                            {{ slotProps.data.email }}
                        </div>
                    </template>
                </Column>
                <Column
                    field="content"
                    header="Content"
                    class="tw-w-1/6"
                    sortable
                >
                    <template #body="slotProps">
                        <div class="tw-line-clamp-3">
                            <div
                                :class="
                                    contactClassesForRead(
                                        slotProps.data.is_checked,
                                    )
                                "
                            >
                                {{ slotProps.data.content }}
                            </div>
                        </div>
                    </template>
                </Column>
                <Column
                    field="created_at"
                    header="Created Date"
                    class="tw-w-1/6"
                    sortable
                >
                    <template #body="slotProps">
                        <div
                            :class="
                                contactClassesForRead(slotProps.data.is_checked)
                            "
                        >
                            {{ getDate(slotProps.data.created_at) }}
                        </div>
                    </template>
                </Column>
                <Column header="Options" class="tw-w-1/6">
                    <template #body="slotProps">
                        <div class="tw-flex tw-flex-row tw-space-x-2">
                            <Button
                                icon="pi pi-file"
                                outlined
                                rounded
                                severity="info"
                                class="tw-h-10 tw-w-10"
                                @click="openDetailDialog(slotProps.data)"
                            />
                        </div>
                    </template>
                </Column>
                <template #footer>
                    In total, there are
                    <b>{{ getContacts ? getContacts.length : 0 }}</b>
                    contacts.</template
                >
            </DataTable>
        </div>
        <Dialog
            maximizable
            v-model:visible="openContactDetailDialog"
            modal
            header="Contact Details"
        >
            <div class="tw-flex tw-h-full tw-flex-col tw-space-y-4">
                <div class="tw-flex tw-flex-row tw-justify-between">
                    <div>
                        <span class="main-text">ID:&nbsp;</span>
                        <b>{{ currentDetail.id }}</b>
                    </div>
                    <div
                        class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-x-2"
                    >
                        <UnreadEnvelope
                            @clicked="setUnread(currentDetail.id)"
                        />
                        <Star
                            :checked="currentDetail.is_favorite"
                            @clicked="toggleFavorite(currentDetail.id)"
                        />
                    </div>
                </div>
                <hr
                    class="tw-mx-2 tw-h-px tw-border-0 tw-bg-slate-300 dark:tw-bg-slate-700"
                />
                <div class="tw-flex tw-flex-row tw-justify-between">
                    <div class="tw-flex tw-flex-col tw-space-y-1">
                        <span>{{ currentDetail.name }}</span>
                        <a
                            class="main-link"
                            :href="'mailto:' + currentDetail.email"
                        >
                            {{ currentDetail.email }}
                        </a>
                    </div>
                    <div class="tw-flex tw-flex-col tw-space-y-1">
                        <span class="main-text">{{
                            getDate(currentDetail.created_at)
                        }}</span>
                    </div>
                </div>
                <div
                    class="main-input-border main-bg-3 main-text-for-input tw-h-full tw-w-full tw-rounded-md tw-border tw-p-4 tw-shadow-sm tw-transition tw-duration-300"
                >
                    {{ currentDetail.content }}
                </div>
            </div>
            <template #footer>
                <Button
                    rounded
                    label="Reply"
                    icon="pi pi-send"
                    autofocus
                    @click="replyMail"
                />
                <Button
                    rounded
                    label="Close"
                    icon="pi pi-times"
                    outlined
                    @click="openContactDetailDialog = false"
                />
            </template>
        </Dialog>
    </section>
</template>
