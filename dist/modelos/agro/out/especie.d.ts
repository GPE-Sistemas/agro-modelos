import joi from 'joi';
import { IIcono } from '../in/icono';
export declare const IEspecieDTOValidation: joi.ObjectSchema<IEspecieDTO>;
export declare const IEspecieDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IEspecieDTO {
    _id: string;
    nombre: string;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
}
//# sourceMappingURL=especie.d.ts.map