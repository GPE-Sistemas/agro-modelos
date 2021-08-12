import joi from 'joi';
import { IDiagnosticoDTO } from './diagnostico';
import { ITipoTratamientoDTO } from './tipoTratamiento';
import { IAnimalDTO } from './animal';
import { IEstablecimientoDTO } from './establecimiento';
export declare const ITratamientoDTOValidation: joi.ObjectSchema<ITratamientoDTO>;
export declare const ITratamientoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ITratamientoDTO {
    _id: string;
    idAnimal: string;
    idDiagnostico: string;
    idTipoTratamiento: string;
    idEstablecimiento: string;
    fecha: string;
    producto: string;
    observaciones: string;
    animal?: IAnimalDTO;
    diagnostico?: IDiagnosticoDTO;
    tipoTratamiento?: ITipoTratamientoDTO;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=tratamiento.d.ts.map