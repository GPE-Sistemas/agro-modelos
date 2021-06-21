import joi from 'joi';
import { IIcono } from './icono';
export declare const ICategoriaValidation: joi.ObjectSchema<ICategoria>;
export declare const ICategoriaSchema: import("joi-to-swagger").SwaggerSchema;
export interface ICategoria {
    nombre: string;
    idEspecie: string;
    sexo?: boolean;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
}
//# sourceMappingURL=categoria.d.ts.map