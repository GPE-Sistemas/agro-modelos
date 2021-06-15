import joi from 'joi';
import { IEstablecimientoDTO } from './establecimiento';
export declare const ILoteDTOValidation: joi.ObjectSchema<ILoteDTO>;
export declare const ILoteDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILoteDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=lote.d.ts.map