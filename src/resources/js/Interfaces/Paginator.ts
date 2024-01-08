export default interface Paginator<T> {
    current_page: number;
    data: Array<T> | [];
    first_page_url: string;
    from: number;
    last_page: number;
    links: Array<{
        active: boolean;
        label: string;
        url: string | null;
    }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}
