import { usePage } from '@inertiajs/vue3';
import route from 'ziggy-js';

export default function useRoute(
    name: string,
    params?: object,
    absolute?: boolean,
    config = usePage().props.ziggy,
) {
    return route(name, params, absolute, config);
}
