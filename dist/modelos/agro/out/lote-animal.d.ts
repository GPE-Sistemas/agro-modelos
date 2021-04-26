import joi from 'joi';
import { IEstablecimientoDTO } from './establecimiento';
export declare const ILoteAnimalDTOValidation: joi.ObjectSchema<ILoteAnimalDTO>;
export declare const ILoteAnimalDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILoteAnimalDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=lote-animal.d.ts.map