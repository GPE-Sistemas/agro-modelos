import joi from 'joi';
import { IEspecieDTO } from './especie';
export declare const ICategoriaDTOValidation: joi.ObjectSchema<ICategoriaDTO>;
export declare const ICategoriaDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface ICategoriaDTO {
    _id: string;
    nombre: string;
    idEspecie: string;
    sexo?: boolean;
    edadMinMeses?: number;
    edadMaxMeses?: number;
    especie?: IEspecieDTO;
}
//# sourceMappingURL=categoria.d.ts.map