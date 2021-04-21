import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const ILoteSilobolsaDTOValidation = joi.object<ILoteSilobolsaDTO>().keys({
    _id: joi.string().required(),
    nombre: joi.string().required(),
    idEstablecimiento: joi.string().required(),
    //
    establecimiento: IEstablecimientoDTOValidation
});

export const ILoteSilobolsaDTOSwagger = j2s(ILoteSilobolsaDTOValidation).swagger;

export interface ILoteSilobolsaDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDTO;
}
