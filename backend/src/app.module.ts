import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      omitNull: true,
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductsModule,
  ],
})
export class AppModule {}