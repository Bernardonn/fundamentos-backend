import { Injectable } from "@nestjs/common";
import { ModelsRepository } from "../../repository/models.repository";
import { ProductsRepository } from "../../repository/products.repository";

@Injectable()
export class FetchRecentProductService {

  constructor(private productRepository: ProductsRepository) { }

async execute(){
        const model= await this.productRepository.findRecents();
        return model;
        
    }
}