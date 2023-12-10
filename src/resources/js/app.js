import './bootstrap';
import '../css/app.css';
import 'primeicons/primeicons.css';

import moment from 'moment';
import { createApp, h } from 'vue';
import { createPinia } from 'pinia';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';
import { mainDesignSystem } from '@/Composables/Common/Theme';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import GeneralLayout from '@/Layouts/GeneralLayout.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

window.moment = moment;

createInertiaApp({
    title: title => `${title} | ${appName}`,
    resolve: name => {
        const page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        );
        page.then(module => {
            let layout = null;

            switch (true) {
                case name.startsWith('Admin/'):
                    layout = AdminLayout;
                    break;
                case name.startsWith('Auth/'):
                    layout = GuestLayout;
                    break;
                default:
                    layout = GeneralLayout;
                    break;
            }
            module.default.layout = layout;
        });

        return page;
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createPinia())
            .use(PrimeVue, {
                unstyled: false,
                ripple: true,
                pt: mainDesignSystem,
            })
            .use(ToastService)
            .directive('tooltip', Tooltip)
            .mount(el);
    },
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,
        // The color of the progress bar...
        color: '#9400D3',
        // Whether to include the default NProgress styles...
        includeCSS: true,
        // Whether the NProgress spinner will be shown...
        showSpinner: false,
    },
});
