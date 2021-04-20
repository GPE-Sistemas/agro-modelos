import joi from 'joi';
import { IMetadatos } from '../metadatos';

export const IDispositivoDTOValidation = joi.object<IDispositivoDTO>({
    deveui: joi.string().length(16).required(),
    deviceName: joi.string().required(),
});

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
