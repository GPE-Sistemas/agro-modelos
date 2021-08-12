import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAnimalDTO, IAnimalDTOValidation } from './animal';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const IEventoEspecificoDTOValidation = joi.object<IEventoEspecificoDTO>({
    _id: joi.string(),
    idAnimal: joi.string(),
    idEstablecimiento: joi.string(),
    fecha: joi.date(),
    titulo: joi.string(),
    observaciones: joi.string(),
    //
    animal: IAnimalDTOValidation,
    establecimiento: IEstablecimientoDTOValidation,
});

export const IEventoEspecificoDTOSwagger = j2s(IEventoEspecificoDTOValidation).swagger;

export interface IEventoEspecificoDTO {
    _id: string;
    idAnimal: string;
    idEstablecimiento: string;
    fecha: string;
    titulo: string;
    observaciones: string;
    //
    animal?: IAnimalDTO;
    establecimiento?: IEstablecimientoDTO;
}
