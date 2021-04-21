import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivo } from '../../shared/in/dispositivo';
import { IMetadatosValidation } from '../../shared/metadatos';

export const IDispositivoSilobolsaValidation = joi.object<IDispositivoSilobolsa>({
    // Base
    adr: joi.boolean(),
    deveui: joi.string().required(),
    deviceName: joi.string(),
    dr: joi.number(),
    fCnt: joi.number(),
    fechaUltimoUplink: joi.date(),
    metadatos: joi.array().items(IMetadatosValidation),
    red: joi.string(),
    // Especificos Silobolsa
    alarmaActiva: joi.boolean(),
    idUltimoReporte: joi.string(),
    fechaAsignacion: joi.date(),
    idSilobolsa: joi.string(),
    posicion: joi.number(),
});

export const IDispositivoSilobolsaSwagger = j2s(IDispositivoSilobolsaValidation).swagger;

export interface IDispositivoSilobolsa extends IDispositivo {
    alarmaActiva: boolean;
    fechaAsignacion: string;
    idUltimoReporte: string;
    idSilobolsa: string;
    posicion: number;
}
