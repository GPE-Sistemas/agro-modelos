import joi from 'joi';
import { IAnimalDTO } from './animal';
import { IEstablecimientoDTO } from './establecimiento';
export declare const IEventoEspecificoDTOValidation: joi.ObjectSchema<IEventoEspecificoDTO>;
export declare const IEventoEspecificoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IEventoEspecificoDTO {
    _id: string;
    idAnimal: string;
    idEstablecimiento: string;
    fecha: string;
    titulo: string;
    observaciones: string;
    animal?: IAnimalDTO;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=eventoEspecifico.d.ts.map