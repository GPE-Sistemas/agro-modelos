import joi from 'joi';
import { IMetadatos } from '../metadatos';
export declare const IDispositivoValidation: joi.ObjectSchema<IDispositivo>;
export declare const IDispositivoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivo {
    adr: boolean;
    deveui: string;
    deviceName: string;
    dr: number;
    fCnt: number;
    fechaUltimoUplink: string;
    metadatos: IMetadatos[];
    red: string;
    tipo?: string;
    idUltimoComando: string;
}
//# sourceMappingURL=dispositivo.d.ts.map