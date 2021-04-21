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
    idUltimoReporte: joi.string(),
    fechaAsignacion: joi.date(),
    idSilobolsa: joi.string(),
    posicion: joi.number(),
    //
    ultimoReporte: IReporteSilobolsaDTOValidation,
});

export const IDispositivoSilobolsaDTOSwagger = j2s(IDispositivoSilobolsaDTOValidation).swagger;

export interface IDispositivoSilobolsaDTO extends IDispositivoDTO {
    idUltimoReporte: string;
    fechaAsignacion: string;
    idSilobolsa: string;
    posicion: number;
    // Populate
    ultimoReporte?: IReporteSilobolsaDTO;
}
