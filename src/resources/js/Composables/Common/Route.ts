import { usePage } from '@inertiajs/vue3';
import route, { Config, RouteName, RouteParams, Router } from 'ziggy-js';

export default function useRoute(): Router;
export default function useRoute<T extends RouteName>(
    name: string,
    params?: RouteParams<T> | undefined,
    absolute?: boolean,
    config?: Config,
): string;
export default function useRoute(
    name: undefined,
    params: undefined,
    absolute?: boolean,
    config?: Config,
): Router;
export default function useRoute(
    name?: string & {},
    params?: RouteParams<string & {}> | undefined,
    absolute?: boolean,
    config = usePage().props.ziggy,
): unknown {
    return route(name as string & {}, params, absolute, config);
}
