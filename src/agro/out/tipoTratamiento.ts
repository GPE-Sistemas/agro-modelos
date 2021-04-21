import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ITipoTratamientoDTOValidation = joi.object<ITipoTratamientoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
});

export const ITipoTratamientoDTOSwagger = j2s(ITipoTratamientoDTOValidation).swagger;

export interface ITipoTratamientoDTO {
    _id: string;
    nombre: string;
}
