import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAnimalDTO, IAnimalDTOValidation } from './animal';

export const IPesajeDTOValidation = joi.object<IPesajeDTO>({
    _id: joi.string(),
    idAnimal: joi.string(),
    fecha: joi.date(),
    peso: joi.number(),
    observaciones: joi.string(),
    //
    animal: IAnimalDTOValidation
});

export const IPesajeDTOSwagger = j2s(IPesajeDTOValidation).swagger;

export interface IPesajeDTO {
    _id: string;
    idAnimal: string;
    fecha: string;
    peso: number;
    observaciones: string;
    //
    animal?: IAnimalDTO;
}
