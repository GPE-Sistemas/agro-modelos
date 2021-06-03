import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IReporteCorrectoraDTOValidation = joi.object<IReporteCorrectoraDTO>({
    _id: joi.string().required(),
    deveui: joi.string().required(),
    numeroSerie: joi.string(),
    fecha: joi.date().required(),
    corrected: joi.number(),
    uncorrected: joi.number(),
    presion: joi.number(),
    temperatura: joi.number(),
});

export const IReporteCorrectoraDTOSwagger = j2s(IReporteCorrectoraDTOValidation).swagger;

export interface IReporteCorrectoraDTO {
    _id: string;
    deveui: string;
    numeroSerie: string;
    fecha: string;
    corrected?: number;
    uncorrected?: number;
    presion?: number;
    temperatura?: number;
}
