import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IReporteCorrectoraValidation = joi.object<IReporteCorrectora>({
    deveui: joi.string().required(),
    numeroSerieCorrectora: joi.string(),
    fecha: joi.date().required(),
    corrected: joi.number(),
    uncorrected: joi.number(),
    presion: joi.number(),
    temperatura: joi.number(),
});

export const IReporteCorrectoraSwagger = j2s(IReporteCorrectoraValidation).swagger;

export interface IReporteCorrectora {
    deveui: string;
    numeroSerieCorrectora: string;
    fecha: string;
    corrected?: number;
    uncorrected?: number;
    presion?: number;
    temperatura?: number;
}
