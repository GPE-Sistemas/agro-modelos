import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IMetadatosValidation } from '../../shared/metadatos';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IReporteSensorNivelDTO, IReporteSensorNivelDTOValidation } from './reporte';

export const IDispositivoSensorNivelDTOValidation = joi.object<IDispositivoSensorNivelDTO>({
    // Base
    _id: joi.string().required(),
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
    //
    ultimoReporte: IReporteSensorNivelDTOValidation,
});

export const IDispositivoSensorNivelDTOSwagger = j2s(IDispositivoSensorNivelDTOValidation).swagger;

export interface IDispositivoSensorNivelDTO extends IDispositivoDTO {
    idUltimoReporte?: string;
    ubicacion?: ICoordenadas;
    firmware?: string;
    // Populate
    ultimoReporte?: IReporteSensorNivelDTO;
}
