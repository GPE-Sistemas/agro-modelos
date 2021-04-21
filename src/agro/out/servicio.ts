import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAnimalDTO, IAnimalDTOValidation } from './animal';

export const IServicioDTOValidation = joi.object<IServicioDTO>({
    _id: joi.string(),
    idAnimal: joi.string(),
    fecha: joi.date(),
    inicio: joi.boolean(),
    observaciones: joi.string(),
    //
    animal: IAnimalDTOValidation
});

export const IServicioDTOSchema = j2s(IServicioDTOValidation).swagger;

export interface IServicioDTO {
    _id: string;
    idAnimal: string;
    fecha: string;
    inicio: boolean;
    observaciones: string;
    //
    animal?: IAnimalDTO;
}
