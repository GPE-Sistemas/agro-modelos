import joi from 'joi';
import { IUsuario } from '../../admin';
import { IPermiso } from './permisos';
export declare const IOperarioValidation: joi.ObjectSchema<IUsuario & IOperario>;
export declare const IOperarioSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IOperario extends IUsuario {
    idUsuario?: string;
    permisos?: IPermiso;
}
//# sourceMappingURL=operario.d.ts.map