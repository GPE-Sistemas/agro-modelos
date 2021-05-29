import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IMetadatosValidation } from '../../shared/metadatos';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IReporteSilobolsaDTO, IReporteSilobolsaDTOValidation } from './reporte';

export const IDispositivoSilobolsaDTOValidation = joi.object<IDispositivoSilobolsaDTO>({
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
    alarmaActiva: joi.boolean(),
    fechaAsignacion: joi.date(),
    idUltimoReporte: joi.string(),
    idSilobolsa: joi.string(),
    posicion: joi.number(),
    alerta: joi.number(),
    //
    ultimoReporte: IReporteSilobolsaDTOValidation,
});

export const IDispositivoSilobolsaDTOSwagger = j2s(IDispositivoSilobolsaDTOValidation).swagger;

export interface IDispositivoSilobolsaDTO extends IDispositivoDTO {
    alarmaActiva: boolean;
    fechaAsignacion: string;
    idUltimoReporte: string;
    idSilobolsa: string;
    posicion: number;
    alerta: number;
    // Populate
    ultimoReporte?: IReporteSilobolsaDTO;
}
