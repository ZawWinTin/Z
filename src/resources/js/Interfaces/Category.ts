export default interface Category {
    id: number;
    name: string;
    text_color: string;
    background_color: string;
    created_at: string;

    articles_count?: number;
}
