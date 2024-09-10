import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

@Table({ tableName: 'Product', createdAt: true, updatedAt: true })
export class Product extends Model {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
    })
    id: string;

    @Column({ allowNull: false, unique: true })
    name: string;

    @Column({})
    price: number;

    @Column({})
    category: string;

    @Column({})
    rating: number;
}