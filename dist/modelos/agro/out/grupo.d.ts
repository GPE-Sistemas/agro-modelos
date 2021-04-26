import joi from 'joi';
import { IEstablecimientoDTO } from './establecimiento';
export declare const IGrupoDTOValidation: joi.ObjectSchema<IGrupoDTO>;
export declare const IGrupoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IGrupoDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=grupo.d.ts.map