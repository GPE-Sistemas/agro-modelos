import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IDispositivoSilobolsaDTO, IDispositivoSilobolsaDTOValidation } from '../../silobolsa/out/dispositivo';
import { IReporteSilobolsaDTO } from '../../silobolsa/out/reporte';
import { IReporteTrackerSilobolsaDTO } from '../../tracker-silobolsa/out/reporte';
import { IDispositivoTrackerSilobolsaDTO, IDispositivoTrackerSilobolsaDTOValidation } from '../../tracker-silobolsa';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';
import { ILoteDTO, ILoteDTOValidation } from './lote';

export const ISilobolsaDTOValidation = joi.object<ISilobolsaDTO>({
    _id: joi.string().required(),
    idEstablecimiento: joi.string().required(),
    idLote: joi.string(),
    deveuiLanzas: joi.array().items(joi.string()),
    deveuiTrackers: joi.array().items(joi.string()),
    numero: joi.string().required(),
    metros: joi.number().required(),
    especie: joi.string().required(),
    cosecha: joi.string().required(),
    producto: joi.string().required(),
    fechaConfeccion: joi.date().required(),
    humedadConfeccion: joi.number(),
    activa: joi.boolean(),
    fechaDesmantelacion: joi.date(),
    ubicacion: ICoordenadasValidation,
    tas: joi.number(),
    //
    lanzas: joi.array().items(IDispositivoSilobolsaDTOValidation),
    trackers: joi.array().items(IDispositivoTrackerSilobolsaDTOValidation),
    establecimiento: IEstablecimientoDTOValidation,
    lote: ILoteDTOValidation,
});

export const ISilobolsaDTOSwagger = j2s(ISilobolsaDTOValidation).swagger;

export interface ISilobolsaDTO {
    _id: string;
    idEstablecimiento: string;
    idLote: string;
    deveuiLanzas: string[];
    deveuiTrackers: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: string;
    humedadConfeccion: number;
    activa: boolean;
    fechaDesmantelacion: string;
    ubicacion: ICoordenadas;
    tas: number;
    // Populate
    lanzas?: IDispositivoSilobolsaDTO[];
    trackers?: IDispositivoTrackerSilobolsaDTO[];
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteDTO;
    // Aggregate
    reporteLanza?: IReporteSilobolsaDTO;
    reportesLanza?: IReporteSilobolsaDTO[];
    reporteTracker?: IReporteTrackerSilobolsaDTO;
    reportesTracker?: IReporteTrackerSilobolsaDTO[];
}
