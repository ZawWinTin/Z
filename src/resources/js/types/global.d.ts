import { AxiosInstance } from 'axios';
import { PageProps as AppPageProps } from './';
import { PageProps as InertiaPageProps } from '@inertiajs/core';

declare global {
    interface Window {
        axios: AxiosInstance;
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {}
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}
