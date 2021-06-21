import joi from 'joi';
import { IIcono } from '../in/icono';
import { IEspecieDTO } from './especie';
export declare const ICategoriaDTOValidation: joi.ObjectSchema<ICategoriaDTO>;
export declare const ICategoriaDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface ICategoriaDTO {
    _id: string;
    nombre: string;
    idEspecie: string;
    sexo?: boolean;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
    especie?: IEspecieDTO;
}
//# sourceMappingURL=categoria.d.ts.map