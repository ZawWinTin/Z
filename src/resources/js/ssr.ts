import { createSSRApp, h, DefineComponent } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import GeneralLayout from '@/Layouts/GeneralLayout.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        title: title => `${title} | ${appName}`,
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
