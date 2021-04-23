import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IEspecieDTOValidation = joi.object<IEspecieDTO>({
    _id: joi.string(),
    nombre: joi.string(),
});

export const IEspecieDTOSwagger = j2s(IEspecieDTOValidation).swagger;

export interface IEspecieDTO {
    _id: string;
    nombre: string;
}
