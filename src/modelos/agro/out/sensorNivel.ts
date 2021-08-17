import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivoSensorNivelDTO } from '../../sensor-nivel';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';
import { ILoteDTO, ILoteDTOValidation } from './lote';

export const ISensorNivelDTOValidation = joi.object<ISensorNivelDTO>({
    _id: joi.string(),
    activo: joi.boolean(),
    deveui: joi.string(),
    fechaCreacion: joi.date(),
    ubicacion: ICoordenadasValidation,
    idEstablecimiento: joi.string(),
    idLote: joi.string(),
    nombre: joi.string(),
    offset: joi.number(),
    //
    establecimiento: IEstablecimientoDTOValidation,
    lote: ILoteDTOValidation
});

export const ISensorNivelDTOSwagger = j2s(ISensorNivelDTOValidation).swagger;

export interface ISensorNivelDTO {
    _id: string;
    activo: boolean;
    deveui: string;
    fechaCreacion: string;
    ubicacion: ICoordenadas;
    idEstablecimiento: string;
    idLote: string;
    nombre: string;
    offset: number;
    // Populate
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteDTO;
    //
    dispositivo?: IDispositivoSensorNivelDTO;
}
