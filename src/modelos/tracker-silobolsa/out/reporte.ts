import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IReporteTrackerSilobolsaDTOValidation = joi.object<IReporteTrackerSilobolsaDTO>({
    _id: joi.string().required(),
    deveui: joi.string().required(),
    idSilobolsa: joi.string(),
    fecha: joi.date().required(),
    alerta: joi.boolean().required(),
});

export const IReporteTrackerSilobolsaDTOSwagger = j2s(IReporteTrackerSilobolsaDTOValidation).swagger;

export interface IReporteTrackerSilobolsaDTO {
    _id: string;
    deveui: string;
    idSilobolsa?: string;
    fecha: string;
    alerta: boolean,
}
