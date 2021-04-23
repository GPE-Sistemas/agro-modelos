import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ILoteDispositivoDTOValidation = joi.object<ILoteDispositivoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
});

export const ILoteDispositivoDTOSwagger = j2s(ILoteDispositivoDTOValidation).swagger;

export interface ILoteDispositivoDTO {
    _id: string;
    nombre: string;
}
