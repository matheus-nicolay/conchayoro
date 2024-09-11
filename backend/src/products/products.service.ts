import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = {
      name: createProductDto.name,
      price: createProductDto.price,
      category: createProductDto.category,
      rating: createProductDto.rating,
    };
    return this.productModel.create(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  findOne(id: string): Promise<Product> {
    return this.productModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    await product.destroy();
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    const productUpdated = {
      name: updateProductDto.name,
      price: updateProductDto.price,
      category: updateProductDto.category,
      rating: updateProductDto.rating,
    };
    await product.update(productUpdated);
    return product
  }

  async findByCriteria(criteria: any): Promise<Product[]> {
    return this.productModel.findAll({
    where: criteria,
    });
  }
}