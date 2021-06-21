import joi from 'joi';
import { IIcono } from './icono';
export declare const IEspecieValidation: joi.ObjectSchema<IEspecie>;
export declare const IEspecieSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IEspecie {
    nombre: string;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
}
//# sourceMappingURL=especie.d.ts.map