import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IReporteSensorNivel, IReporteSensorNivelValidation } from '../../sensor-nivel';

export const ISensorNivelValidation = joi.object<ISensorNivel>({
    activo: joi.boolean(),
    deveui: joi.string(),
    fechaCreacion: joi.date(),
    ubicacion: ICoordenadasValidation,
    idEstablecimiento: joi.string(),
    idLote: joi.string(),
    nombre: joi.string(),
    offset: joi.number(),
    ultimoReporte: IReporteSensorNivelValidation,
});

export const ISensorNivelSwagger = j2s(ISensorNivelValidation).swagger;

export interface ISensorNivel {
    activo?: boolean;
    deveui?: string;
    fechaCreacion?: string;
    ubicacion?: ICoordenadas;
    idEstablecimiento?: string;
    idLote?: string;
    nombre?: string;
    offset?: number;
    ultimoReporte?: IReporteSensorNivel;
}
