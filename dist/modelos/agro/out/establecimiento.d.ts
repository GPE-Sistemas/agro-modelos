import joi from 'joi';
import { ICoordenadas } from '../../shared/coordenadas';
export declare const IEstablecimientoDTOValidation: joi.ObjectSchema<IEstablecimientoDTO>;
export declare const IEstablecimientoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IEstablecimientoDTO {
    _id: string;
    nombre: string;
    coordenadas?: ICoordenadas[][];
}
//# sourceMappingURL=establecimiento.d.ts.map