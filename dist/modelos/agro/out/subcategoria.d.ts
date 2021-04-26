import joi from 'joi';
import { ICategoriaDTO } from './categoria';
export declare const ISubcategoriaDTOValidation: joi.ObjectSchema<ISubcategoriaDTO>;
export declare const ISubcategoriaDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface ISubcategoriaDTO {
    _id: string;
    nombre: string;
    pesoMin?: number;
    pesoMax?: number;
    idCategoria: string;
    categoria?: ICategoriaDTO;
}
//# sourceMappingURL=subcategoria.d.ts.map