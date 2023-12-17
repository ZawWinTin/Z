import Category from '@/Interfaces/Category';
import Image from '@/Interfaces/Image';

export default interface Article {
    id: number;
    title: string;
    description: string;
    content: string;
    created_at: string;

    categories: Array<Category>;
    cover_image: Image;
}
