import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const ICorrectoraValidation: joi.ObjectSchema<ICorrectora>;
export declare const ICorrectoraSchema: import("joi-to-swagger").SwaggerSchema;
export interface ICorrectora {
    numeroSerie?: string;
    deveui?: string;
    modelo?: string;
    fechaAsignacion: string;
    firmware?: string;
    bateria: number;
    activa?: boolean;
    ubicacion?: ICoordenadas;
    idEstablecimiento?: string;
    idLote?: string;
}
//# sourceMappingURL=correctora.d.ts.map