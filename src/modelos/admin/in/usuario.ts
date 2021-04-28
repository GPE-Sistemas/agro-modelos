import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IUsuarioValidation = joi.object<IUsuario>({
    usuario: joi.string().required(),
    clave: joi.string(),
    idCliente: joi.string().required(),
    nombre: joi.string(),
    apellido: joi.string(),
    notificacionesActivas: joi.boolean(),
    notificaciones: {
        telegram: joi.string(),
        whatsapp: joi.boolean(),
        email: joi.boolean(),
    },
    email: joi.string().allow(''),
    telefono: joi.string().allow(''),
});

export const IUsuarioSwagger = j2s(IUsuarioValidation).swagger;

export interface IUsuario {
    usuario: string;
    clave?: string;
    idCliente: string;
    nombre: string;
    apellido: string;
    notificacionesActivas?: boolean;
    notificaciones?: {
        telegram?: string;
        whatsapp?: boolean;
        email?: boolean;
    };
    email?: string;
    telefono?: string;
}
