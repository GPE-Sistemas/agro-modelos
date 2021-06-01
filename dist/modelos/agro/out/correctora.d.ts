import joi from 'joi';
import { IDispositivoCorrectoraDTO } from '../../correctoras';
export declare const ICorrectoraDTOValidation: joi.ObjectSchema<ICorrectoraDTO>;
export declare const ICorrectoraDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface ICorrectoraDTO {
    _id: string;
    numeroSerie?: string;
    deveui?: string;
    modelo?: string;
    fechaAsignacion: string;
    firmware?: string;
    bateria: number;
    dispositivo?: IDispositivoCorrectoraDTO;
}
//# sourceMappingURL=correctora.d.ts.map