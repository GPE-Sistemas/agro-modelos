import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivoCorrectoraDTO, IDispositivoCorrectoraDTOValidation } from '../../correctoras';

export const ICorrectoraDTOValidation = joi.object<ICorrectoraDTO>().keys({
    _id: joi.string().required(),
    numeroSerie: joi.string().required(),
    deveui: joi.string().required(),
    modelo: joi.string(),
    fechaAsignacion: joi.date(),
    firmware: joi.string(),
    bateria: joi.number(),
    //
    dispositivo: IDispositivoCorrectoraDTOValidation
});

export const ICorrectoraDTOSchema = j2s(ICorrectoraDTOValidation).swagger;

export interface ICorrectoraDTO {
    _id: string;
    numeroSerie?: string;
    deveui?: string;
    modelo?: string;
    fechaAsignacion: string;
    firmware?: string;
    bateria: number;
    //
    dispositivo?: IDispositivoCorrectoraDTO;
}
