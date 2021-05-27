import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IMetadatos, IMetadatosValidation } from '../metadatos';

export const IDispositivoValidation = joi.object<IDispositivo>({
    adr: joi.boolean(),
    deveui: joi.string(),
    deviceName: joi.string(),
    dr: joi.number(),
    fCnt: joi.number(),
    fechaUltimoUplink: joi.date(),
    metadatos: joi.array().items(IMetadatosValidation),
    red: joi.string(),
    tipo: joi.string(),
    idUltimoComando: joi.string(),
});

export const IDispositivoSwagger = j2s(IDispositivoValidation).swagger;

export interface IDispositivo {
    adr: boolean;
    deveui: string;
    deviceName: string;
    dr: number;
    fCnt: string;
    fechaUltimoUplink: string;
    metadatos: IMetadatos[];
    red: string;
    tipo?: string;
    idUltimoComando?: string;
}
