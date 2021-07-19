import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IReporteSensorNivelDTOValidation = joi.object<IReporteSensorNivelDTO>({
    _id: joi.string().required(),
    deveui: joi.string().required(),
    fecha: joi.date().required(),
    distancia: joi.number(),
});

export const IReporteSensorNivelDTOSwagger = j2s(IReporteSensorNivelDTOValidation).swagger;

export interface IReporteSensorNivelDTO {
    _id: string;
    deveui: string;
    fecha: string;
    distancia: number;
}
