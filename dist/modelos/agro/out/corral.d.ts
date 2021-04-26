import joi from 'joi';
import { ICoordenadas } from '../../';
import { IEstablecimientoDTO } from './establecimiento';
export declare const ICorralDTOValidation: joi.ObjectSchema<ICorralDTO>;
export declare const ICorralDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICorralDTO {
    _id: string;
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=corral.d.ts.map