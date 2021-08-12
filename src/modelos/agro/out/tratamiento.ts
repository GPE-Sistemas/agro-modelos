import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDiagnosticoDTO, IDiagnosticoDTOValidation } from './diagnostico';
import { ITipoTratamientoDTO, ITipoTratamientoDTOValidation } from './tipoTratamiento';
import { IAnimalDTO, IAnimalDTOValidation } from './animal';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const ITratamientoDTOValidation = joi.object<ITratamientoDTO>({
    _id: joi.string(),
    idAnimal: joi.string(),
    idDiagnostico: joi.string(),
    idTipoTratamiento: joi.string(),
    idEstablecimiento: joi.string(),
    fecha: joi.date(),
    producto: joi.string(),
    observaciones: joi.string(),
    //
    animal: IAnimalDTOValidation,
    diagnostico: IDiagnosticoDTOValidation,
    tipoTratamiento: ITipoTratamientoDTOValidation,
    establecimiento: IEstablecimientoDTOValidation,
});

export const ITratamientoDTOSwagger = j2s(ITratamientoDTOValidation).swagger;

export interface ITratamientoDTO {
    _id: string;
    idAnimal: string;
    idDiagnostico: string;
    idTipoTratamiento: string;
    idEstablecimiento: string;
    fecha: string;
    producto: string;
    observaciones: string;
    //
    animal?: IAnimalDTO;
    diagnostico?: IDiagnosticoDTO;
    tipoTratamiento?: ITipoTratamientoDTO;
    establecimiento?: IEstablecimientoDTO;
}
