import joi from 'joi';
import { IClienteDTO } from './cliente';
export declare const IUsuarioDTOValidation: joi.ObjectSchema<IUsuarioDTO>;
export declare const IUsuarioDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUsuarioDTO {
    _id: string;
    usuario: string;
    clave?: string;
    idCliente: string;
    nombre: string;
    apellido: string;
    notificacionesActivas?: boolean;
    notificaciones?: {
        telegram?: string[];
        whatsapp?: string[];
        email?: string[];
    };
    telegramChatId?: string;
    email?: string;
    telefono?: string;
    cliente?: IClienteDTO;
}
//# sourceMappingURL=usuario.d.ts.map