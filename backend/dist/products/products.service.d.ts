import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: typeof Product);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    remove(id: string): Promise<void>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
}
