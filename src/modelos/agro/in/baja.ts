import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IBajaValidation = joi.object<IBaja>({
    fecha: joi.date(),
    idTipoBaja: joi.string(),
    observaciones: joi.string(),
});

export const IBajaSwagger = j2s(IBajaValidation).swagger;

export interface IBaja {
    fecha: string;
    idTipoBaja: string;
    observaciones: string;
}
