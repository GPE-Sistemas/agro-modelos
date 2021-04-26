import joi from 'joi';
import { ICoordenadas } from '../../';
export declare const ICorralValidation: joi.ObjectSchema<ICorral>;
export declare const ICorralSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICorral {
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
}
//# sourceMappingURL=corral.d.ts.map