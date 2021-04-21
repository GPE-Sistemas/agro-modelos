import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ILogDispositivoValidation = joi.object<ILogDispositivo>({
    fecha: joi.date(),
    deveui: joi.string(),
    puerto: joi.number(),
    payload: joi.string(),
    evento: joi.string(),
    contenido: joi.string(),
});

export const ILogDispositivoSwagger = j2s(ILogDispositivoValidation).swagger;

export interface ILogDispositivo {
    fecha?: string;
    deveui: string;
    puerto: number;
    payload: string;
    evento: string;
    contenido: string;
}
