import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivoCorrectoraDTO, IDispositivoCorrectoraDTOValidation } from '../../correctoras';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';
import { ILoteDTO, ILoteDTOValidation } from './lote';

export const ICorrectoraDTOValidation = joi.object<ICorrectoraDTO>().keys({
    _id: joi.string().required(),
    numeroSerie: joi.string().required(),
    deveui: joi.string().required(),
    modelo: joi.string(),
    fechaAsignacion: joi.date(),
    firmware: joi.string(),
    bateria: joi.number(),
    activa: joi.boolean(),
    ubicacion: ICoordenadasValidation,
    idEstablecimiento: joi.string(),
    idLote: joi.string(),
    //
    dispositivo: IDispositivoCorrectoraDTOValidation,
    establecimiento: IEstablecimientoDTOValidation,
    lote: ILoteDTOValidation,
});

export const ICorrectoraDTOSchema = j2s(ICorrectoraDTOValidation).swagger;

export interface ICorrectoraDTO {
    _id: string;
    numeroSerie?: string;
    deveui?: string;
    modelo?: string;
    fechaAsignacion: string;
    firmware?: string;
    bateria: number;
    activa?: boolean;
    ubicacion?: ICoordenadas;
    idEstablecimiento: string;
    idLote: string;
    //
    dispositivo?: IDispositivoCorrectoraDTO;
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteDTO;
}
