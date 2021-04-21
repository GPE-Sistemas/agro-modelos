import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAnimalDTO, IAnimalDTOValidation } from './animal';

export const IEventoEspecificoDTOValidation = joi.object<IEventoEspecificoDTO>({
    _id: joi.string(),
    idAnimal: joi.string(),
    fecha: joi.date(),
    titulo: joi.string(),
    observaciones: joi.string(),
    //
    animal: IAnimalDTOValidation
});

export const IEventoEspecificoDTOSwagger = j2s(IEventoEspecificoDTOValidation).swagger;

export interface IEventoEspecificoDTO {
    _id: string;
    idAnimal: string;
    fecha: string;
    titulo: string;
    observaciones: string;
    //
    animal?: IAnimalDTO;
}
