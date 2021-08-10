import joi from 'joi';
import { IPermiso } from '../in/permisos';
export declare const IOperarioDTOValidation: joi.ObjectSchema<IOperarioDTO>;
export declare const IOperarioDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IOperarioDTO {
    _id: string;
    idUsuario: string;
    permisos: IPermiso;
}
//# sourceMappingURL=operario.d.ts.map