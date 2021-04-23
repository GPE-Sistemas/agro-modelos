import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICategoriaDTO, ICategoriaDTOValidation } from './categoria';

export const ISubcategoriaDTOValidation = joi.object<ISubcategoriaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    pesoMin: joi.number(),
    pesoMax: joi.number(),
    idCategoria: joi.string(),
    //
    categoria: ICategoriaDTOValidation
});

export const ISubcategoriaDTOSchema = j2s(ISubcategoriaDTOValidation).swagger;

export interface ISubcategoriaDTO {
    _id: string;
    nombre: string;
    pesoMin?: number;
    pesoMax?: number;
    idCategoria: string;
    //
    categoria?: ICategoriaDTO;
}
