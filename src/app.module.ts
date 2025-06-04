import { Module } from '@nestjs/common';
import { CreateProductController } from './product/controllers/create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './product/services/create-product.service';
import { ProductsRepository } from './repository/products.repository';
import { CreateModelsController } from './model/controllers/create-model.controller';
import { CreateModelsService } from './model/services/create-models.service';
import { ModelsRepository } from './repository/models.repository';
import { FetchRecentModelController } from './model/controllers/fetch-recent-model.controller';
import { FetchRecentModelService } from './model/services/fetch.recent.models.service';
import { FetchRecentProductController } from './product/controllers/fetch-recent-product.controller';
import { FetchRecentProductService } from './product/services/fetch-recent-product.service';


@Module({
  imports: [],
  controllers: [CreateProductController,CreateModelsController,FetchRecentModelController,FetchRecentProductController],
  providers: [PrismaService, CreateProductService,ProductsRepository,CreateModelsService,ModelsRepository,FetchRecentModelService,FetchRecentProductService],
})
export class AppModule {}

