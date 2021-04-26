import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IUsuarioDTOValidation = joi.object<IUsuarioDTO>({
    _id: joi.string(),
    usuario: joi.string().required(),
    idCliente: joi.string().required(),
    nombre: joi.string(),
    apellido: joi.string()
});

export const IUsuarioDTOSwagger = j2s(IUsuarioDTOValidation).swagger;

export interface IUsuarioDTO {
    _id: string;
    usuario: string;
    idCliente: string;
    nombre: string;
    apellido: string;
}
