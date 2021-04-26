import joi from 'joi';
import { IClienteDTO } from './cliente';
export declare const IUsuarioDTOValidation: joi.ObjectSchema<IUsuarioDTO>;
export declare const IUsuarioDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUsuarioDTO {
    _id: string;
    usuario: string;
    idCliente: string;
    nombre: string;
    apellido: string;
    cliente?: IClienteDTO;
}
//# sourceMappingURL=usuario.d.ts.map