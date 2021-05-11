import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IMetadatosValidation } from '../../shared/metadatos';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IReporteCorrectoraDTO, IReporteCorrectoraDTOValidation } from './reporte';

export const IDispositivoCorrectoraDTOValidation = joi.object<IDispositivoCorrectoraDTO>({
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
    // Especificos Correctora
    firmware: joi.string(),
    fechaAsignacion: joi.date(),
    numeroSerieCorrectora: joi.string(),
    idUltimoReporte: joi.string(),
    //
    ultimoReporte: IReporteCorrectoraDTOValidation,
});

export const IDispositivoCorrectoraDTOSwagger = j2s(IDispositivoCorrectoraDTOValidation).swagger;

export interface IDispositivoCorrectoraDTO extends IDispositivoDTO {
    firmware: string;
    fechaAsignacion: string;
    numeroSerieCorrectora: string;
    idUltimoReporte: string;
    // Populate
    ultimoReporte?: IReporteCorrectoraDTO;
}
