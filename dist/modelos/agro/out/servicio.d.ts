import joi from 'joi';
import { IAnimalDTO } from './animal';
import { IEstablecimientoDTO } from './establecimiento';
export declare const IServicioDTOValidation: joi.ObjectSchema<IServicioDTO>;
export declare const IServicioDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface IServicioDTO {
    _id: string;
    idAnimal: string;
    idEstablecimiento: string;
    fechaInicio: string;
    fechaFin: string;
    observaciones: string;
    animal?: IAnimalDTO;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=servicio.d.ts.map