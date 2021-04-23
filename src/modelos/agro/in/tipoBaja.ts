import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ITipoBajaValidation = joi.object<ITipoBaja>({
    nombre: joi.string(),
});

export const ITipoBajaSwagger = j2s(ITipoBajaValidation).swagger;

export interface ITipoBaja {
    nombre: string;
}
