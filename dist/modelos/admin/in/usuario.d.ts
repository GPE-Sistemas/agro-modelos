import joi from 'joi';
export declare const IUsuarioValidation: joi.ObjectSchema<IUsuario>;
export declare const IUsuarioSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUsuario {
    activo?: boolean;
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
}
//# sourceMappingURL=usuario.d.ts.map