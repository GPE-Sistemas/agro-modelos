import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ILogDispositivoDTOValidation = joi.object<ILogDispositivoDTO>({
    _id: joi.string(),
    fecha: joi.date(),
    deveui: joi.string(),
    puerto: joi.number(),
    payload: joi.string(),
    evento: joi.string(),
    contenido: joi.string(),
    fCnt: joi.number(),
    deviceName: joi.string(),
    aplicacion: joi.string(),
});

export const ILogDispositivoDTOSwagger = j2s(ILogDispositivoDTOValidation).swagger;

export interface ILogDispositivoDTO {
    _id: string;
    fecha: string;
    deveui: string;
    puerto: number;
    payload: string;
    evento: string;
    contenido: string;
    fCnt: string;
    deviceName: string;
    aplicacion: string;
}
