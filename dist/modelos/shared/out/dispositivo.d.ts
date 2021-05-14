import joi from 'joi';
import { IMetadatos } from '../metadatos';
export declare const IDispositivoDTOValidation: joi.ObjectSchema<IDispositivoDTO>;
export declare const IDispositivoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoDTO {
    _id: string;
    adr: boolean;
    deveui: string;
    deviceName?: string;
    dr: number;
    fCnt: number;
    fechaUltimoUplink: string;
    metadatos: IMetadatos[];
    red: string;
    tipo?: string;
}
//# sourceMappingURL=dispositivo.d.ts.map