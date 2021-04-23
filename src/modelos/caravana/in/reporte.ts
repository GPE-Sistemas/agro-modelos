import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared/coordenadas';

export const IReporteCaravanaValidation = joi.object<IReporteCaravana>({
    deveui: joi.string().required(),
    fecha: joi.date().required(),
    idAsignado: joi.string(),
    ubicacion: ICoordenadasValidation,
});

export const IReporteCaravanaSwagger = j2s(IReporteCaravanaValidation).swagger;

export interface IReporteCaravana {
    deveui: string;
    fecha: string;
    idAsignado: string;
    ubicacion: ICoordenadas;
}
