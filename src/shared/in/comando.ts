import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IComandoValidation = joi.object<IComando>({
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
});

export const IComandoSwagger = j2s(IComandoValidation).swagger;

export interface IComando {
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
}
