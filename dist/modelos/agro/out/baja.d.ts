import joi from 'joi';
import { IAnimalDTO } from './animal';
import { ITipoBajaDTO } from './tipoBaja';
export declare const IBajaDTOValidation: joi.ObjectSchema<IBajaDTO>;
export declare const IBajaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IBajaDTO {
    _id: string;
    fecha: string;
    idTipoBaja: string;
    idAnimal: string;
    observaciones: string;
    tipoBaja?: ITipoBajaDTO;
    animal?: IAnimalDTO;
}
//# sourceMappingURL=baja.d.ts.map