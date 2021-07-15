import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IIcono } from '../in/icono';
import { IEstablecimientoDTO } from './establecimiento';
export declare const IPuntoInteresDTOValidation: joi.ObjectSchema<IPuntoInteresDTO>;
export declare const IPuntoInteresDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPuntoInteresDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    coordenadas: ICoordenadas;
    icono: IIcono;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=puntoInteres.d.ts.map