import joi from 'joi';
import { IDispositivo } from '../../shared/in/dispositivo';
export declare const IDispositivoCorrectoraValidation: joi.ObjectSchema<IDispositivoCorrectora>;
export declare const IDispositivoCorrectoraSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoCorrectora extends IDispositivo {
    firmware: string;
    fechaAsignacion: string;
    numeroSerieCorrectora: string;
    idUltimoReporte: string;
}
//# sourceMappingURL=dispositivo.d.ts.map