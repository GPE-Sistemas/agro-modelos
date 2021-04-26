import joi from 'joi';
import { IAnimalDTO } from './animal';
export declare const IEventoEspecificoDTOValidation: joi.ObjectSchema<IEventoEspecificoDTO>;
export declare const IEventoEspecificoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IEventoEspecificoDTO {
    _id: string;
    idAnimal: string;
    fecha: string;
    titulo: string;
    observaciones: string;
    animal?: IAnimalDTO;
}
//# sourceMappingURL=eventoEspecifico.d.ts.map