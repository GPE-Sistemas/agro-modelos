import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IDispositivoSilobolsaDTO, IDispositivoSilobolsaDTOValidation } from '../../silobolsa/out/dispositivo';
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
    activa: joi.boolean(),
    fechaDesmantelacion: joi.date(),
    ubicacion: ICoordenadasValidation,
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
    activa: boolean;
    fechaDesmantelacion: string;
    ubicacion: ICoordenadas;
    //
    lanzas?: IDispositivoSilobolsaDTO[];
    trackers?: IDispositivoTrackerSilobolsaDTO[];
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteDTO;
}
