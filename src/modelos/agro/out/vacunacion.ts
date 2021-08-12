import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAnimalDTO, IAnimalDTOValidation } from './animal';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';
import { ITipoVacunaDTO, ITipoVacunaDTOValidation } from './tipoVacuna';

export const IVacunacionDTOValidation = joi.object<IVacunacionDTO>({
    _id: joi.string(),
    idAnimal: joi.string(),
    idTipoVacuna: joi.string(),
    idEstablecimiento: joi.string(),
    fecha: joi.date(),
    producto: joi.string(),
    dosis: joi.string(),
    observaciones: joi.string(),
    //
    animal: IAnimalDTOValidation,
    tipoVacuna: ITipoVacunaDTOValidation,
    establecimiento: IEstablecimientoDTOValidation,
});

export const IVacunacionDTOSwagger = j2s(IVacunacionDTOValidation).swagger;

export interface IVacunacionDTO {
    _id: string;
    idAnimal: string;
    idTipoVacuna: string;
    idEstablecimiento: string;
    fecha: string;
    dosis: string;
    producto: string;
    observaciones: string;
    //
    animal?: IAnimalDTO;
    tipoVacuna?: ITipoVacunaDTO;
    establecimiento?: IEstablecimientoDTO;
}
