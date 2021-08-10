import joi from 'joi';
import { IPermiso } from './permisos';
export declare const IOperarioValidation: joi.ObjectSchema<IOperario>;
export declare const IOperarioSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IOperario {
    idUsuario?: string;
    permisos?: IPermiso;
}
//# sourceMappingURL=operario.d.ts.map