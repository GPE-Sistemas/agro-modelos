import joi from 'joi';
import { ICoordenadas } from '../../shared/coordenadas';
export declare const IEstablecimientoValidation: joi.ObjectSchema<IEstablecimiento>;
export declare const IEstablecimientoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IEstablecimiento {
    nombre: string;
    coordenadas?: ICoordenadas[][];
}
//# sourceMappingURL=establecimiento.d.ts.map