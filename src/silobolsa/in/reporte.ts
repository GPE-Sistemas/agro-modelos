import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IReporteSilobolsaValidation = joi.object<IReporteSilobolsa>({
    deveui: joi.string().required(),
    idSilobolsa: joi.string(),
    fecha: joi.date().required(),
    co2: joi.number(),
    temperatura: joi.number(),
    humedad: joi.number(),
    bateria: joi.number(),
    // Calculados
    bateriaPorc: joi.number(),
    co2Porc: joi.number(),
    humedadPorc: joi.number(),
    temperaturaGrados: joi.number(),
    humedadEquilibrio: joi.number(),
});

export const IReporteSilobolsaSwagger = j2s(IReporteSilobolsaValidation).swagger;

export interface IReporteSilobolsa {
    deveui: string;
    idSilobolsa?: string;
    fecha: string;
    co2: number;
    temperatura: number;
    humedad: number;
    bateria: number;
    // Calculados
    bateriaPorc: number;
    co2Porc: number;
    humedadPorc: number;
    temperaturaGrados: number;
    humedadEquilibrio?: number;
}