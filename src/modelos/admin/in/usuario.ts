import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IUsuarioValidation = joi.object<IUsuario>({
    usuario: joi.string(),
    clave: joi.string(),
    idCliente: joi.string(),
    nombre: joi.string(),
    apellido: joi.string(),
    notificacionesActivas: joi.boolean(),
    notificaciones: {
        telegram: joi.array().items(joi.string()),
        whatsapp: joi.array().items(joi.string()),
        email: joi.array().items(joi.string()),
        sms: joi.array().items(joi.string()),
    },
    telegramChatId: joi.string().allow(''),
    email: joi.string().allow(''),
    telefono: joi.string().allow(''),
});

export const IUsuarioSwagger = j2s(IUsuarioValidation).swagger;

export interface IUsuario {
    activo?: boolean;
    usuario?: string;
    clave?: string;
    idCliente?: string;
    nombre?: string;
    apellido?: string;
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
}
