import { createSSRApp, DefineComponent, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import AdminLayout from '@/Layouts/AdminLayout.vue';
import AuthLayout from '@/Layouts/AuthLayout.vue';
import GeneralLayout from '@/Layouts/GeneralLayout.vue';

import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        title: title => (title ? `${title} | ${appName}` : `${appName}`),
        resolve: name => {
            const page = resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob<DefineComponent>('./Pages/**/*.vue'),
            );
            page.then(module => {
                let layout = null;

                switch (true) {
                    case name.startsWith('Admin/'):
                        layout = AdminLayout;
                        break;
                    case name.startsWith('Auth/'):
                        layout = AuthLayout;
                        break;
                    default:
                        layout = GeneralLayout;
                        break;
                }
                module.default.layout = layout;
            });

            return page;
        },
        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });
        },
    }),
);
