import joi from 'joi';
import { IMetadatos } from '../metadatos';
import { IComandoDTO } from './comando';
export declare const IDispositivoDTOValidation: joi.ObjectSchema<IDispositivoDTO>;
export declare const IDispositivoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoDTO {
    _id: string;
    adr: boolean;
    deveui: string;
    deviceName: string;
    dr: number;
    fCnt: number;
    fechaUltimoUplink: string;
    metadatos: IMetadatos[];
    red: string;
    tipo?: string;
    idUltimoComando?: string;
    ultimoComando?: IComandoDTO;
}
//# sourceMappingURL=dispositivo.d.ts.map