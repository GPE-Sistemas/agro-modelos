import { ICategoriaDTO } from './categoria';

export interface ISubcategoriaDTO {
    _id: string;
    nombre: string;
    pesoMin?: number;
    pesoMax?: number;
    idCategoria: string;
    categoria?: ICategoriaDTO;
}
