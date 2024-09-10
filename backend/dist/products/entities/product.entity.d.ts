import { Model } from 'sequelize-typescript';
export declare class Product extends Model {
    id: string;
    name: string;
    price: number;
    category: string;
    rating: number;
}
