import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IComandoDTOValidation = joi.object<IComandoDTO>({
    _id: joi.string(),
    deveui: joi.string(),
    deviceName: joi.string(),
    idAsignado: joi.string(),
    nombreAsignado: joi.string(),
    payload: joi.string(),
    puerto: joi.number(),
    fecha: joi.date(),
    usuario: joi.object({
        _id: joi.string(),
        usuario: joi.string()
    }),
    fCnt: joi.string(),
    descripcion: joi.string(),
    valor: joi.string(),
    aplicacion: joi.string(),
});

export const IComandoDTOSwagger = j2s(IComandoDTOValidation).swagger;

export interface IComandoDTO {
    _id: string;
    deveui: string;
    deviceName: string;
    idAsignado: string;
    nombreAsignado: string;
    payload: string;
    puerto: number;
    fecha: string;
    usuario: {
        _id?: string,
        usuario: string,
    };
    fCnt: string;
    descripcion: string;
    valor?: string;
    aplicacion: string;
    //
    estado: string;
}
