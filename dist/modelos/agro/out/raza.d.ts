import joi from 'joi';
import { IEspecieDTO } from './especie';
export declare const IRazaDTOValidation: joi.ObjectSchema<IRazaDTO>;
export declare const IRazaDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface IRazaDTO {
    _id: string;
    nombre: string;
    idEspecie: string;
    especie?: IEspecieDTO;
}
//# sourceMappingURL=raza.d.ts.map