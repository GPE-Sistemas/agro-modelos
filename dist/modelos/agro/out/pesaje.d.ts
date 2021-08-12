import joi from 'joi';
import { IAnimalDTO } from './animal';
import { IEstablecimientoDTO } from './establecimiento';
export declare const IPesajeDTOValidation: joi.ObjectSchema<IPesajeDTO>;
export declare const IPesajeDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPesajeDTO {
    _id: string;
    idAnimal: string;
    idEstablecimiento: string;
    fecha: string;
    peso: number;
    observaciones: string;
    animal?: IAnimalDTO;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=pesaje.d.ts.map