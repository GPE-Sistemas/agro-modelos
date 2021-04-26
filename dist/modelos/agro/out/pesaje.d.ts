import joi from 'joi';
import { IAnimalDTO } from './animal';
export declare const IPesajeDTOValidation: joi.ObjectSchema<IPesajeDTO>;
export declare const IPesajeDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPesajeDTO {
    _id: string;
    idAnimal: string;
    fecha: string;
    peso: number;
    observaciones: string;
    animal?: IAnimalDTO;
}
//# sourceMappingURL=pesaje.d.ts.map