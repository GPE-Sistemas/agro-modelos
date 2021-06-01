import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared/coordenadas';

export const IReporteCaravanaValidation = joi.object<IReporteCaravana>({
    deveui: joi.string().required(),
    fecha: joi.date().required(),
    idAnimal: joi.string(),
    ubicacion: ICoordenadasValidation,
    dentroCorral: joi.boolean(),
    dentroEstablecimiento: joi.boolean(),
});

export const IReporteCaravanaSwagger = j2s(IReporteCaravanaValidation).swagger;

export interface IReporteCaravana {
    deveui: string;
    fecha: string;
    idAnimal: string;
    ubicacion: ICoordenadas;
    dentroCorral?: boolean;
    dentroEstablecimiento?: boolean;
}
