import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivo } from '../../shared/in/dispositivo';
import { IMetadatosValidation } from '../../shared/metadatos';
import { IAcelerometro } from '../acelerometro';

export const IDispositivoCaravanaValidation = joi.object<IDispositivoCaravana>({
    // Base
    adr: joi.boolean(),
    deveui: joi.string().required(),
    deviceName: joi.string(),
    dr: joi.number(),
    fCnt: joi.number(),
    fechaUltimoUplink: joi.date(),
    metadatos: joi.array().items(IMetadatosValidation),
    red: joi.string(),
    // Especificos Caravana
    acelerometro: joi.string(),
    fechaAsignacion: joi.date(),
    frecuenciaReporte: joi.string(),
    idAsignado: joi.string(),
    idUltimoReporte: joi.string(),
});

export const IDispositivoCaravanaSwagger = j2s(IDispositivoCaravanaValidation).swagger;

export interface IDispositivoCaravana extends IDispositivo {
    acelerometro: IAcelerometro;
    fechaAsignacion: string;
    frecuenciaReporte: string;
    idAsignado: string;
    idUltimoReporte: string;
}
