import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const ILoteDTOValidation = joi.object<ILoteDTO>({
    _id: joi.string().required(),
    nombre: joi.string().required(),
    idEstablecimiento: joi.string().required(),
    //
    establecimiento: IEstablecimientoDTOValidation,
});

export const ILoteDTOSwagger = j2s(ILoteDTOValidation).swagger;

export interface ILoteDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDTO;
}
