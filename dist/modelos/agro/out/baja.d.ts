import joi from 'joi';
import { IAnimalDTO } from './animal';
import { IEstablecimientoDTO } from './establecimiento';
import { ITipoBajaDTO } from './tipoBaja';
export declare const IBajaDTOValidation: joi.ObjectSchema<IBajaDTO>;
export declare const IBajaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IBajaDTO {
    _id: string;
    fecha: string;
    idTipoBaja: string;
    idEstablecimiento: string;
    idAnimal: string;
    observaciones: string;
    tipoBaja?: ITipoBajaDTO;
    animal?: IAnimalDTO;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=baja.d.ts.map