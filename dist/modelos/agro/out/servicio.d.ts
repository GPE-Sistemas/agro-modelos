import joi from 'joi';
import { IAnimalDTO } from './animal';
export declare const IServicioDTOValidation: joi.ObjectSchema<IServicioDTO>;
export declare const IServicioDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface IServicioDTO {
    _id: string;
    idAnimal: string;
    fecha: string;
    inicio: boolean;
    observaciones: string;
    animal?: IAnimalDTO;
}
//# sourceMappingURL=servicio.d.ts.map