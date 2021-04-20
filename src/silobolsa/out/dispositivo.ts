import joi from 'joi';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IReporteSilobolsaDTO, IReporteSilobolsaDTOValidation } from './reporte';
// import j2s from 'joi-to-swagger';

export const IDispositivoSilobolsaDTOValidation = joi.object<IDispositivoSilobolsaDTO>({
    _id: joi.string().required(),
    deveui: joi.string().required(),
    red: joi.string(),
    // metadatos: IMetadatosValidation,
    fCnt: joi.number(),
    adr: joi.boolean(),
    dr: joi.number(),
    fechaUltimoUplink: joi.date(),
    idUltimoReporte: joi.string(),
    // Carga manual
    fechaAsignacion: joi.date(),
    idSilobolsa: joi.string(),
    posicion: joi.number(),
    ultimoReporte: IReporteSilobolsaDTOValidation,
});

// export const IDispositivoSilobolsaDTOSchema = j2s(IDispositivoSilobolsaDTOValidation).swagger;

export interface IDispositivoSilobolsaDTO extends IDispositivoDTO {
    idUltimoReporte: string;
    fechaAsignacion: string;
    idSilobolsa: string;
    posicion: number;
    // Populate
    ultimoReporte?: IReporteSilobolsaDTO;
}
