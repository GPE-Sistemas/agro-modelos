import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const ICorrectoraValidation = joi.object<ICorrectora>().keys({
    numeroSerie: joi.string().required(),
    deveui: joi.string().required(),
    modelo: joi.string(),
    fechaAsignacion: joi.date(),
    firmware: joi.string(),
    bateria: joi.number(),
    activa: joi.boolean(),
    ubicacion: ICoordenadasValidation,
    idEstablecimiento: joi.string(),
    idLote: joi.string().allow(null),
});

export const ICorrectoraSchema = j2s(ICorrectoraValidation).swagger;

export interface ICorrectora {
    numeroSerie?: string;
    deveui?: string;
    modelo?: string;
    fechaAsignacion?: string;
    firmware?: string;
    bateria?: number;
    activa?: boolean;
    ubicacion?: ICoordenadas;
    idEstablecimiento?: string;
    idLote?: string;
}
