import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IReporteSensorNivelValidation = joi.object<IReporteSensorNivel>({
    deveui: joi.string(),
    fecha: joi.date(),
    distancia: joi.number(),
});

export const IReporteSensorNivelSwagger = j2s(IReporteSensorNivelValidation).swagger;

export interface IReporteSensorNivel {
    deveui?: string;
    fecha?: string;
    distancia?: number;
}
