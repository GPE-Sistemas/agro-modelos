import joi from 'joi';
import { IAnimalDTO } from './animal';
import { ITipoVacunaDTO } from './tipoVacuna';
export declare const IVacunacionDTOValidation: joi.ObjectSchema<IVacunacionDTO>;
export declare const IVacunacionDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IVacunacionDTO {
    _id: string;
    idAnimal: string;
    idTipoVacuna: string;
    fecha: string;
    dosis: string;
    producto: string;
    observaciones: string;
    animal?: IAnimalDTO;
    tipoVacuna?: ITipoVacunaDTO;
}
//# sourceMappingURL=vacunacion.d.ts.map