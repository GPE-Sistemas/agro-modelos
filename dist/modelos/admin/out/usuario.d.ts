import joi from 'joi';
import { IAplicacionDTO } from './aplicacion';
import { IClienteDTO } from './cliente';
export declare const IUsuarioDTOValidation: joi.ObjectSchema<IUsuarioDTO>;
export declare const IUsuarioDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUsuarioDTO {
    _id: string;
    activo: boolean;
    usuario: string;
    clave?: string;
    idCliente: string;
    idAplicaciones: string[];
    rol: string;
    nombre: string;
    apellido: string;
    notificacionesActivas?: boolean;
    notificaciones?: {
        telegram?: string[];
        whatsapp?: string[];
        email?: string[];
        sms?: string[];
    };
    telegramChatId?: string;
    email?: string;
    telefono?: string;
    cliente?: IClienteDTO;
    aplicaciones?: IAplicacionDTO[];
}
//# sourceMappingURL=usuario.d.ts.map