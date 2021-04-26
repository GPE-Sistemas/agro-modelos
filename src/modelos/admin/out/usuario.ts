import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IClienteDTO, IClienteDTOValidation } from './cliente';

export const IUsuarioDTOValidation = joi.object<IUsuarioDTO>({
    _id: joi.string(),
    usuario: joi.string().required(),
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
    //
    cliente: IClienteDTOValidation,
});

export const IUsuarioDTOSwagger = j2s(IUsuarioDTOValidation).swagger;

export interface IUsuarioDTO {
    _id: string;
    usuario: string;
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
    //
    cliente?: IClienteDTO;
}
