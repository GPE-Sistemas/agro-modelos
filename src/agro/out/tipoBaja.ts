import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ITipoBajaDTOValidation = joi.object<ITipoBajaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
});

export const ITipoBajaDTOSwagger = j2s(ITipoBajaDTOValidation).swagger;

export interface ITipoBajaDTO {
    _id: string;
    nombre: string;
}
