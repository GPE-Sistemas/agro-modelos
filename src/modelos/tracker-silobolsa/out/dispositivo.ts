import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IMetadatosValidation } from '../../shared/metadatos';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IReporteTrackerSilobolsaDTO, IReporteTrackerSilobolsaDTOValidation } from './reporte';

export const IDispositivoTrackerSilobolsaDTOValidation = joi.object<IDispositivoTrackerSilobolsaDTO>({
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
    // Especificos Silobolsa
    fechaAsignacion: joi.date(),
    idUltimoReporte: joi.string(),
    idSilobolsa: joi.string(),
    posicion: joi.number(),
    firmware: joi.string(),
    sensibilidad: joi.number(),
    //
    ultimoReporte: IReporteTrackerSilobolsaDTOValidation,
});

export const IDispositivoTrackerSilobolsaDTOSwagger = j2s(IDispositivoTrackerSilobolsaDTOValidation).swagger;

export interface IDispositivoTrackerSilobolsaDTO extends IDispositivoDTO {
    fechaAsignacion: string;
    idUltimoReporte: string;
    idSilobolsa: string;
    posicion: number;
    firmware: string;
    sensibilidad: number;
    // Populate
    ultimoReporte?: IReporteTrackerSilobolsaDTO;
}
