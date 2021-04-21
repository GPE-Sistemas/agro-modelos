import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const ILoteAnimalDTOValidation = joi.object<ILoteAnimalDTO>({
    _id: joi.string().required(),
    nombre: joi.string().required(),
    idEstablecimiento: joi.string().required(),
    //
    establecimiento: IEstablecimientoDTOValidation,
});

export const ILoteAnimalDTOSwagger = j2s(ILoteAnimalDTOValidation).swagger;

export interface ILoteAnimalDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDTO;
}
