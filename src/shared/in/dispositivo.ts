import joi from 'joi';
import { IMetadatos } from '../metadatos';

export const IDispositivoValidation = joi.object<IDispositivo>({
    deveui: joi.string().length(16).required(),
    deviceName: joi.string().required(),
});

export interface IDispositivo {
    adr: boolean;
    deveui: string;
    deviceName: string;
    dr: number;
    fCnt: number;
    fechaUltimoUplink: string;
    metadatos: IMetadatos[];
    red: string;
}
