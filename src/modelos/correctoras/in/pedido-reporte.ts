import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPedidoReporteValidation = joi.object<IPedidoReporte>().keys({
    numeroSerie: joi.string().required(),
    timestamp: joi.date().required(),
    aplicado: joi.boolean().required(),
    fechaCreacion: joi.date().required(),
});

export const IPedidoReporteSchema = j2s(IPedidoReporteValidation).swagger;

export interface IPedidoReporte {
    numeroSerie: string;
    timestamp: string;
    fechaCreacion?: string;
    aplicado?: boolean;
}
