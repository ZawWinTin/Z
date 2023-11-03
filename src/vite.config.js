import path from 'path';
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'resources/js/Components/'),
            '@layouts': path.resolve(__dirname, 'resources/js/Layouts/'),
        },
    },
    server: {
        hmr: {
            host: 'localhost',
        },
        host: '0.0.0.0'
    },
});
