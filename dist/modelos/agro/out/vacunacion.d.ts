import joi from 'joi';
import { IAnimalDTO } from './animal';
import { IEstablecimientoDTO } from './establecimiento';
import { ITipoVacunaDTO } from './tipoVacuna';
export declare const IVacunacionDTOValidation: joi.ObjectSchema<IVacunacionDTO>;
export declare const IVacunacionDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IVacunacionDTO {
    _id: string;
    idAnimal: string;
    idTipoVacuna: string;
    idEstablecimiento: string;
    fecha: string;
    dosis: string;
    producto: string;
    observaciones: string;
    animal?: IAnimalDTO;
    tipoVacuna?: ITipoVacunaDTO;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=vacunacion.d.ts.map