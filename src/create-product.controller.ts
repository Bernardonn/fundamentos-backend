import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ZodValidationPipe } from "./pipes/zod-validation-pipes";
import { z } from "zod";
import { isValidCPF } from "./utils/is-valid-cpf";

  const createProductBodySchema = z.object({
    name: z.string(),
    model: z.string(),
    dateManuFacture: z.string().date(),
    year: z.number(),
    brand: z.string(),
    email: z.string(),
    cpf: z.string()
        .regex(/^\d{11}$/,{
          message:'CPF deve conter exatamente 11 dígitos numéricos',
        })
        .refine(isValidCPF, {
          message: "CPF invalid",
        }),

  });

const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);

type CreateProductBodySchema = z.infer<typeof createProductBodySchema>;

@Controller('/products')
export class CreateProductController {
    constructor() {}

            @Post()
            @HttpCode(201)
            async handle(@Body(bodyValidationPipe) body: CreateProductBodySchema) {

            }
            
        }