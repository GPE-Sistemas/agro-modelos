import joi from 'joi';
export declare const ILogDispositivoValidation: joi.ObjectSchema<ILogDispositivo>;
export declare const ILogDispositivoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILogDispositivo {
    fecha?: string;
    deveui: string;
    puerto: number;
    payload: string;
    evento: string;
    contenido: string;
}
//# sourceMappingURL=log-dispositivo.d.ts.map