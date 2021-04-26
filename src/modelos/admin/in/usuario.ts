import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IUsuarioValidation = joi.object<IUsuario>({
    usuario: joi.string().required(),
    clave: joi.string().required(),
    idCliente: joi.string().required(),
    nombre: joi.string(),
    apellido: joi.string(),
    notificacionesActivas: joi.boolean(),
    notificaciones: {
        telegram: joi.boolean(),
        whatsapp: joi.boolean(),
        email: joi.boolean(),
    },
    email: joi.string(),
    telefono: joi.string(),
});

export const IUsuarioSwagger = j2s(IUsuarioValidation).swagger;

export interface IUsuario {
    usuario: string;
    clave: string;
    idCliente: string;
    nombre: string;
    apellido: string;
    notificacionesActivas: boolean;
    notificaciones: {
        telegram: boolean;
        whatsapp: boolean;
        email: boolean;
    };
    email: string;
    telefono: string;
}
