export default interface Image {
    id: number;
    imageable_id: number;
    imageable_type: string;
    name: string;
    path: string;
    url: string;
    object_position: string;
    mime_type?: string;
    file_size?: string;

    created_at: string;
}
