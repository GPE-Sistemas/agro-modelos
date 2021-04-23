import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ITipoBajaDTO, ITipoBajaDTOValidation } from './tipoBaja';

export const IBajaDTOValidation = joi.object<IBajaDTO>({
    _id: joi.string(),
    fecha: joi.date(),
    idTipoBaja: joi.string(),
    observaciones: joi.string(),
    //
    tipoBaja: ITipoBajaDTOValidation,
});

export const IBajaDTOSwagger = j2s(IBajaDTOValidation).swagger;

export interface IBajaDTO {
    _id: string;
    fecha: string;
    idTipoBaja: string;
    observaciones: string;
    //
    tipoBaja?: ITipoBajaDTO;
}
