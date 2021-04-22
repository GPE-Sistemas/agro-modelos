import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IUsuarioValidation = joi.object<IUsuario>({
    usuario: joi.string().required(),
    clave: joi.string().required(),
    idCliente: joi.string().required(),
});

export const IUsuarioSwagger = j2s(IUsuarioValidation).swagger;

export interface IUsuario {
    usuario: string;
    clave: string;
    idCliente: string;
}
