import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAplicacionDTO, IAplicacionDTOValidation } from './aplicacion';
import { IClienteDTO, IClienteDTOValidation } from './cliente';

export const IUsuarioDTOValidation = joi.object<IUsuarioDTO>({
    _id: joi.string(),
    activo: joi.boolean(),
    usuario: joi.string().required(),
    idCliente: joi.string().required(),
    idAplicaciones: joi.array().items(joi.string()),
    rol: joi.string(),
    nombre: joi.string(),
    apellido: joi.string(),
    notificacionesActivas: joi.boolean(),
    notificaciones: {
        telegram: joi.string(),
        whatsapp: joi.boolean(),
        email: joi.boolean(),
        sms: joi.boolean(),
    },
    email: joi.string(),
    telefono: joi.string(),
    //
    cliente: IClienteDTOValidation,
    aplicaciones: IAplicacionDTOValidation,
});

export const IUsuarioDTOSwagger = j2s(IUsuarioDTOValidation).swagger;

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
    //
    cliente?: IClienteDTO;
    aplicaciones?: IAplicacionDTO[];
}
