import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IDispositivo } from '../../shared/in/dispositivo';
import { IMetadatosValidation } from '../../shared/metadatos';

export const IDispositivoSensorNivelValidation = joi.object<IDispositivoSensorNivel>({
    // Base
    adr: joi.boolean(),
    deveui: joi.string().required(),
    deviceName: joi.string(),
    dr: joi.number(),
    fCnt: joi.number(),
    fechaUltimoUplink: joi.date(),
    metadatos: joi.array().items(IMetadatosValidation),
    red: joi.string(),
    // Especificos SensorNivel
    idUltimoReporte: joi.string(),
    ubicacion: ICoordenadasValidation,
    firmware: joi.string(),
});

export const IDispositivoSensorNivelSwagger = j2s(IDispositivoSensorNivelValidation).swagger;

export interface IDispositivoSensorNivel extends IDispositivo {
    idUltimoReporte?: string;
    ubicacion?: ICoordenadas;
    firmware?: string;
}
