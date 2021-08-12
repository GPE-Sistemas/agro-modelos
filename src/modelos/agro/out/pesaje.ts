import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAnimalDTO, IAnimalDTOValidation } from './animal';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const IPesajeDTOValidation = joi.object<IPesajeDTO>({
    _id: joi.string(),
    idAnimal: joi.string(),
    idEstablecimiento: joi.string(),
    fecha: joi.date(),
    peso: joi.number(),
    observaciones: joi.string(),
    //
    animal: IAnimalDTOValidation,
    establecimiento: IEstablecimientoDTOValidation,
});

export const IPesajeDTOSwagger = j2s(IPesajeDTOValidation).swagger;

export interface IPesajeDTO {
    _id: string;
    idAnimal: string;
    idEstablecimiento: string;
    fecha: string;
    peso: number;
    observaciones: string;
    //
    animal?: IAnimalDTO;
    establecimiento?: IEstablecimientoDTO;
}
