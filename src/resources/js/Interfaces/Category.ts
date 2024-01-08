export default interface Category {
    id: number;
    name: string;
    text_color: string;
    background_color: string;

    created_at: string;
    deleted_at: string | null;

    articles_count?: number;
}
