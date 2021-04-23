import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IMetadatos, IMetadatosValidation } from '../metadatos';

export const IDispositivoDTOValidation = joi.object<IDispositivoDTO>({
    _id: joi.string(),
    adr: joi.boolean(),
    deveui: joi.string(),
    deviceName: joi.string(),
    dr: joi.number(),
    fCnt: joi.number(),
    fechaUltimoUplink: joi.date(),
    metadatos: joi.array().items(IMetadatosValidation),
    red: joi.string(),
});

export const IDispositivoDTOSwagger = j2s(IDispositivoDTOValidation).swagger;

export interface IDispositivoDTO {
    _id: string;
    //
    adr: boolean;
    deveui: string;
    deviceName?: string;
    dr: number;
    fCnt: number;
    fechaUltimoUplink: string;
    metadatos: IMetadatos[];
    red: string;
}
