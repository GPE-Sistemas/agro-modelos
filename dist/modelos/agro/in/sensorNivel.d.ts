import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const ISensorNivelValidation: joi.ObjectSchema<ISensorNivel>;
export declare const ISensorNivelSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISensorNivel {
    activo?: boolean;
    deveui?: string;
    fechaAsignacion?: string;
    ubicacion?: ICoordenadas;
    idEstablecimiento?: string;
    idLote?: string;
    nombre?: string;
}
//# sourceMappingURL=sensorNivel.d.ts.map