import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared/coordenadas';

export const IReporteCaravanaDTOValidation = joi.object<IReporteCaravanaDTO>({
    _id: joi.string().required(),
    deveui: joi.string().required(),
    fecha: joi.date().required(),
    idAnimal: joi.string(),
    ubicacion: ICoordenadasValidation,
    dentroCorral: joi.boolean(),
    dentroEstablecimiento: joi.boolean(),
});

export const IReporteCaravanaDTOSwagger = j2s(IReporteCaravanaDTOValidation).swagger;

export interface IReporteCaravanaDTO {
    _id: string;
    deveui: string;
    fecha: string;
    idAnimal?: string;
    ubicacion: ICoordenadas;
    dentroCorral?: boolean;
    dentroEstablecimiento?: boolean;
}
