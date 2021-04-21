import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IMetadatosValidation } from '../../shared/metadatos';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IAcelerometro } from '../acelerometro';
import { IReporteCaravanaDTO, IReporteCaravanaDTOValidation } from './reporte';

export const IDispositivoCaravanaDTOValidation = joi.object<IDispositivoCaravanaDTO>({
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
    // Especificos Caravana
    acelerometro: joi.string(),
    fechaAsignacion: joi.date(),
    idAsignado: joi.string(),
    idUltimoReporte: joi.string(),
    //
    ultimoReporte: IReporteCaravanaDTOValidation,
    //
    bateria: joi.number()
});

export const IDispositivoCaravanaDTOSwagger = j2s(IDispositivoCaravanaDTOValidation).swagger;

export interface IDispositivoCaravanaDTO extends IDispositivoDTO {
    acelerometro: IAcelerometro;
    fechaAsignacion: string;
    idAsignado: string;
    idUltimoReporte?: string;
    // Populate
    ultimoReporte?: IReporteCaravanaDTO;
    // Calculados
    bateria?: number;
}
