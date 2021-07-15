import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IIcono } from './icono';
export declare const IPuntoInteresValidation: joi.ObjectSchema<IPuntoInteres>;
export declare const IPuntoInteresSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPuntoInteres {
    nombre?: string;
    idEstablecimiento?: string;
    coordenadas?: ICoordenadas;
    icono?: IIcono;
}
//# sourceMappingURL=puntoInteres.d.ts.map