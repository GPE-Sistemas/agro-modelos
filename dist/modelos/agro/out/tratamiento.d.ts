import joi from 'joi';
import { IDiagnosticoDTO } from './diagnostico';
import { ITipoTratamientoDTO } from './tipoTratamiento';
import { IAnimalDTO } from './animal';
export declare const ITratamientoDTOValidation: joi.ObjectSchema<ITratamientoDTO>;
export declare const ITratamientoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ITratamientoDTO {
    _id: string;
    idAnimal: string;
    idDiagnostico: string;
    idTipoTratamiento: string;
    fecha: string;
    producto: string;
    observaciones: string;
    animal?: IAnimalDTO;
    diagnostico?: IDiagnosticoDTO;
    tipoTratamiento?: ITipoTratamientoDTO;
}
//# sourceMappingURL=tratamiento.d.ts.map