import joi from 'joi';
import j2s from 'joi-to-swagger';

import { ICoordenadas } from '../..';
import { ICoordenadasValidation } from '../../shared/coordenadas';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const ILoteDTOValidation = joi.object<ILoteDTO>({
    _id: joi.string(),
    color: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idEstablecimiento: joi.string(),
    //
    establecimiento: IEstablecimientoDTOValidation,
});

export const ILoteDTOSwagger = j2s(ILoteDTOValidation).swagger;

export interface ILoteDTO {
    _id: string;
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
