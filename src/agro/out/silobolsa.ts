import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivoSilobolsaDTO, IDispositivoSilobolsaDTOValidation } from '../../silobolsa/out/dispositivo';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';
import { ILoteSilobolsaDTO, ILoteSilobolsaDTOValidation } from './lote-silobolsa';

export const ISilobolsaDTOValidation = joi.object<ISilobolsaDTO>({
    _id: joi.string().required(),
    idEstablecimiento: joi.string().required(),
    idLote: joi.string().required(),
    deveuiDispositivos: joi.array().items(joi.string()),
    numero: joi.string().required(),
    metros: joi.number().required(),
    especie: joi.string().required(),
    cosecha: joi.string().required(),
    producto: joi.string().required(),
    fechaConfeccion: joi.date().required(),
    //
    dispositivos: joi.array().items(IDispositivoSilobolsaDTOValidation),
    establecimiento: IEstablecimientoDTOValidation,
    lote: ILoteSilobolsaDTOValidation,
});

export const ISilobolsaDTOSwagger = j2s(ISilobolsaDTOValidation).swagger;

export interface ISilobolsaDTO {
    _id: string;
    idEstablecimiento: string;
    idLote: string;
    deveuiDispositivos: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: string;
    //
    dispositivos?: IDispositivoSilobolsaDTO[];
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteSilobolsaDTO;
}
