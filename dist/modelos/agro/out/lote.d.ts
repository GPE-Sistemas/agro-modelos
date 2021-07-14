import joi from 'joi';
import { ICoordenadas } from '../..';
import { IEstablecimientoDTO } from './establecimiento';
export declare const ILoteDTOValidation: joi.ObjectSchema<ILoteDTO>;
export declare const ILoteDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILoteDTO {
    _id: string;
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=lote.d.ts.map