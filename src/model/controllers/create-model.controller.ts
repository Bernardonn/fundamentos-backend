import {  z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipes';
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateModelsService } from '../services/create-models.service';
import { FetchRecentModelService } from '../services/fetch.recent.models.service';

   const createModelsBodySchema = z.object({
      nome: z.string().min(3)
    });

    const bodyValidationPipe = new ZodValidationPipe(createModelsBodySchema);
    type createModelsBodySchema = z.infer<typeof createModelsBodySchema>;


    @Controller('/models')
     export class CreateModelsController {
        constructor(private createModels: CreateModelsService){}

        @Post()
        @HttpCode(201)
        async handle(@Body(bodyValidationPipe) body: createModelsBodySchema){
            const {nome} = body;
            const data = await this.createModels.execute({
                nome,       
            });
            return data;
        }
        
     
     }