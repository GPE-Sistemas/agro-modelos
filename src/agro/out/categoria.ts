import { IEspecieDTO } from './especie';
// import joi from 'joi';
// import j2s from 'joi-to-swagger';

// export const ICategoriaDTOValidation = joi.object<ICategoriaDTO>({
//     _id: joi.string(),
//     especie: joi.string(),
// });

// export const ICategoriaDTOSchema = j2s(ICategoriaDTOValidation).swagger;

export interface ICategoriaDTO {
    _id: string;
    nombre: string;
    idEspecie: string;
    sexo?: boolean;
    edadMinMeses?: number;
    edadMaxMeses?: number;
    //
    especie: IEspecieDTO;
}
