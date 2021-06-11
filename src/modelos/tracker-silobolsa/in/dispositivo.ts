import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivo } from '../../shared/in/dispositivo';
import { IMetadatosValidation } from '../../shared/metadatos';

export const IDispositivoTrackerSilobolsaValidation = joi.object<IDispositivoTrackerSilobolsa>({
    // Base
    adr: joi.boolean(),
    deveui: joi.string().required(),
    deviceName: joi.string(),
    dr: joi.number(),
    fCnt: joi.number(),
    fechaUltimoUplink: joi.date(),
    metadatos: joi.array().items(IMetadatosValidation),
    red: joi.string(),
    // Especificos
    idUltimoReporte: joi.string(),
    fechaAsignacion: joi.date(),
    idSilobolsa: joi.string(),
    posicion: joi.number(),
    firmware: joi.string(),
    sensibilidad: joi.number(),
});

export const IDispositivoTrackerSilobolsaSwagger = j2s(IDispositivoTrackerSilobolsaValidation).swagger;

export interface IDispositivoTrackerSilobolsa extends IDispositivo {
    fechaAsignacion?: string;
    idUltimoReporte?: string;
    idSilobolsa?: string;
    posicion?: number;
    firmware?: string;
    sensibilidad?: number;
}
