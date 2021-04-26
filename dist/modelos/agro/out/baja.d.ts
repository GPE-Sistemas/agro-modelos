import joi from 'joi';
import { ITipoBajaDTO } from './tipoBaja';
export declare const IBajaDTOValidation: joi.ObjectSchema<IBajaDTO>;
export declare const IBajaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IBajaDTO {
    _id: string;
    fecha: string;
    idTipoBaja: string;
    observaciones: string;
    tipoBaja?: ITipoBajaDTO;
}
//# sourceMappingURL=baja.d.ts.map