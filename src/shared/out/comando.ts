import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IComandoDTOValidation = joi.object<IComandoDTO>({
    _id: joi.string(),
    deveui: joi.string(),
    payload: joi.string(),
    puerto: joi.number(),
    ejecutado: joi.boolean(),
    error: joi.boolean(),
    timestamp: joi.date(),
    usuario: joi.object({
        _id: joi.string(),
        email: joi.string()
    }),
    fCnt: joi.string(),
    //
    estado: joi.string(),
    comando: joi.string()

});

export const IComandoDTOSwagger = j2s(IComandoDTOValidation).swagger;

export interface IComandoDTO {
    _id: string;
    deveui: string;
    payload: string;
    puerto: number;
    ejecutado: boolean;
    error: boolean;
    timestamp: string;
    usuario: {
        _id: string,
        email: string,
    };
    fCnt: string;
    //
    estado: string;
    comando: string;
}
