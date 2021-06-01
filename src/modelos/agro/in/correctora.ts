import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ICorrectoraValidation = joi.object<ICorrectora>().keys({
    numeroSerie: joi.string().required(),
    deveui: joi.string().required(),
    modelo: joi.string(),
    fechaAsignacion: joi.date(),
    firmware: joi.string(),
    bateria: joi.number(),
});

export const ICorrectoraSchema = j2s(ICorrectoraValidation).swagger;

export interface ICorrectora {
    numeroSerie?: string;
    deveui?: string;
    modelo?: string;
    fechaAsignacion: string;
    firmware?: string;
    bateria: number;
}
