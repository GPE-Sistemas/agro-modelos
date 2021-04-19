// import joi from 'joi';
// import j2s from 'joi-to-swagger';

// export const IEspecieDTOValidation = joi.object<IEspecieDTO>({
//     _id: joi.string(),
//     especie: joi.string(),
// });

// export const IEspecieDTOSchema = j2s(IEspecieDTOValidation).swagger;

export interface IEspecieDTO {
    _id: string;
    nombre: string;
}
