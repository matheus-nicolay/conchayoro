import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

const product = {
  name: 'Product1',
  price: 10,
  category: 'C1',
  rating: 1,
};

const createProductDto: CreateProductDto = product;
const updateProductDto: UpdateProductDto = product;

describe('ProductsController', () => {
  let productsService: ProductsService;
  let productsController: ProductsController;
  let product: Product;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
    controllers: [ProductsController],
    providers: [
      ProductsService,
      {
        provide: getModelToken(Product),
        useValue: {},
      },
    ],
  }).compile();

  productsService = moduleRef.get<ProductsService>(ProductsService);
  productsController = moduleRef.get<ProductsController>(ProductsController);
  product = moduleRef.get<Product>(getModelToken(Product));
});

it('should create a product', async () => {
  const mockedResponseData = product;
  jest
    .spyOn(productsService, 'create')
    .mockImplementation(() => Promise.resolve(mockedResponseData));
  expect(await productsController.create(createProductDto)).toBe(mockedResponseData,);
  //expect(await productsController.create(createProductDto)).toBe(null);
  });

  it('should update a product', async () => {
    const mockedResponseData = product;
    const id = '1';
    jest
      .spyOn(productsService, 'update')
      .mockImplementation(() => Promise.resolve(mockedResponseData));
    expect(await productsController.update(id, updateProductDto)).toBe(mockedResponseData,);
  });
  
  it('should delete a product', async () => {
    const mockedResponseData = null;
    const id = '1';
    jest
      .spyOn(productsService, 'remove')
      .mockImplementation(() => Promise.resolve(mockedResponseData));
    expect(await productsController.remove(id)).toBe(mockedResponseData);
  });
  
  it('should return an array of products', async () => {
    const mockedResponseData = [];
    jest
      .spyOn(productsService, 'findAll')
      .mockImplementation(() => Promise.resolve(mockedResponseData));
    expect(await productsController.findAll()).toBe(mockedResponseData);
  });
  
  it('should return a specific product', async () => {
    const mockedResponseData = product;
    const id = '1';
    jest
      .spyOn(productsService, 'findOne')
      .mockImplementation(() => Promise.resolve(mockedResponseData));
    expect(await productsController.findOne(id)).toBe(mockedResponseData);
  });
  
  it('should return an array of products by criteria', async () => {
    const mockedResponseData = [];
    const criteria = { id: '1' };
    jest
      .spyOn(productsService, 'findByCriteria')
      .mockImplementation(() => Promise.resolve(mockedResponseData)); 
    expect(await productsController.findByCriteria(criteria)).toBe(mockedResponseData,);
  });
});

