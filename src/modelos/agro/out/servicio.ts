import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAnimalDTO, IAnimalDTOValidation } from './animal';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const IServicioDTOValidation = joi.object<IServicioDTO>({
    _id: joi.string(),
    idAnimal: joi.string(),
    idEstablecimiento: joi.string(),
    fechaInicio: joi.date(),
    fechaFin: joi.date(),
    observaciones: joi.string(),
    //
    animal: IAnimalDTOValidation,
    establecimiento: IEstablecimientoDTOValidation,
});

export const IServicioDTOSchema = j2s(IServicioDTOValidation).swagger;

export interface IServicioDTO {
    _id: string;
    idAnimal: string;
    idEstablecimiento: string;
    fechaInicio: string;
    fechaFin: string;
    observaciones: string;
    //
    animal?: IAnimalDTO;
    establecimiento?: IEstablecimientoDTO;
}
