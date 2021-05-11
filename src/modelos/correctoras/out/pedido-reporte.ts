import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPedidoReporteDTOValidation = joi.object<IPedidoReporteDTO>().keys({
    _id: joi.string().required(),
    numeroSerie: joi.string().required(),
    timestamp: joi.date().required(),
    aplicado: joi.boolean().required(),
    fechaCreacion: joi.date().required(),
});

export const IPedidoReporteDTOSchema = j2s(IPedidoReporteDTOValidation).swagger;

export interface IPedidoReporteDTO {
    _id: string;
    numeroSerie: string;
    timestamp: string;
    fechaCreacion?: string;
    aplicado?: boolean;
}
