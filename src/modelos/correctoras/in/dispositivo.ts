import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivo } from '../../shared/in/dispositivo';
import { IMetadatosValidation } from '../../shared/metadatos';

export const IDispositivoCorrectoraValidation = joi.object<IDispositivoCorrectora>({
    // Base
    adr: joi.boolean(),
    deveui: joi.string().required(),
    deviceName: joi.string(),
    dr: joi.number(),
    fCnt: joi.number(),
    fechaUltimoUplink: joi.date(),
    metadatos: joi.array().items(IMetadatosValidation),
    red: joi.string(),
    // Especificos Correctoras
    firmware: joi.string(),
    fechaAsignacion: joi.date(),
    numeroSerieCorrectora: joi.string(),
    idUltimoReporte: joi.string(),
});

export const IDispositivoCorrectoraSwagger = j2s(IDispositivoCorrectoraValidation).swagger;

export interface IDispositivoCorrectora extends IDispositivo {
    firmware: string;
    fechaAsignacion: string;
    numeroSerieCorrectora: string;
    idUltimoReporte: string;
}
