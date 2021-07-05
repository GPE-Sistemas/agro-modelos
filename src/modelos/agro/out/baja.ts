import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAnimalDTO } from './animal';
import { ITipoBajaDTO, ITipoBajaDTOValidation } from './tipoBaja';

export const IBajaDTOValidation = joi.object<IBajaDTO>({
    _id: joi.string(),
    fecha: joi.date(),
    idTipoBaja: joi.string(),
    idAnimal: joi.string(),
    observaciones: joi.string(),
    //
    tipoBaja: ITipoBajaDTOValidation,
});

export const IBajaDTOSwagger = j2s(IBajaDTOValidation).swagger;

export interface IBajaDTO {
    _id: string;
    fecha: string;
    idTipoBaja: string;
    idAnimal: string;
    observaciones: string;
    //
    tipoBaja?: ITipoBajaDTO;
    animal?: IAnimalDTO;
}
