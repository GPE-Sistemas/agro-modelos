import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IComentarioAlerta, IComentarioAlertaValidation, IEstadoAlerta, IEstadoAlertaValidation, IReporteAlerta, IReporteAlertaValidation } from '../in/alerta';

export const IAlertaDTOValidation = joi.object<IAlertaDTO>({
    _id: joi.string(),
    aplicacion: joi.string(),
    nivel: joi.number(),
    idAsignado: joi.string(),
    nombreAsignado: joi.string(),
    tipo: joi.string().valid('tecnica', 'seguridad', 'reporte'),
    fecha: joi.date(),
    estadoActual: joi.string(),
    archivada: joi.boolean(),
    comentarios: IComentarioAlertaValidation,
    estados: IEstadoAlertaValidation,
    reportes: IReporteAlertaValidation,
});

export const IAlertaDTOSwagger = j2s(IAlertaDTOValidation).swagger;

export interface IAlertaDTO {
    _id: string;
    aplicacion: string;
    nivel: number;
    idAsignado: string;
    nombreAsignado: string;
    tipo: 'tecnica' | 'seguridad' | 'reporte';
    fecha: string;
    estadoActual: string;
    archivada: boolean;
    comentarios: IComentarioAlerta[];
    estados: IEstadoAlerta[];
    reportes: IReporteAlerta[];
}
