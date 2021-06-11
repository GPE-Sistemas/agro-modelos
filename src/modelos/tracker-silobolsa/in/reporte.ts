import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IReporteTrackerSilobolsaValidation = joi.object<IReporteTrackerSilobolsa>({
    deveui: joi.string().required(),
    idSilobolsa: joi.string(),
    fecha: joi.date().required(),
    alarma: joi.boolean(),
});

export const IReporteTrackerSilobolsaSwagger = j2s(IReporteTrackerSilobolsaValidation).swagger;

export interface IReporteTrackerSilobolsa {
    deveui: string;
    idSilobolsa?: string;
    fecha: string;
    alarma: boolean;
}
