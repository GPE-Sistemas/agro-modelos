import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IReporteSensorNivel } from '../../sensor-nivel';
export declare const ISensorNivelValidation: joi.ObjectSchema<ISensorNivel>;
export declare const ISensorNivelSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISensorNivel {
    activo?: boolean;
    deveui?: string;
    fechaCreacion?: string;
    ubicacion?: ICoordenadas;
    idEstablecimiento?: string;
    idLote?: string;
    nombre?: string;
    offset?: number;
    ultimoReporte?: IReporteSensorNivel;
}
//# sourceMappingURL=sensorNivel.d.ts.map