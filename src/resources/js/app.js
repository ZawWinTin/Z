import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import GeneralLayout from '@/Layouts/GeneralLayout.vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import moment from 'moment';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

window.moment = moment;

createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: name => {
        let page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        );
        page.then(module => {
            module.default.layout = name.startsWith('Admin/')
                ? AdminLayout
                : GeneralLayout;
        });

        return page;
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
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
