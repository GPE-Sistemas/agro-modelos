import joi from 'joi';
export declare const ILogDispositivoDTOValidation: joi.ObjectSchema<ILogDispositivoDTO>;
export declare const ILogDispositivoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILogDispositivoDTO {
    _id: string;
    fecha: string;
    deveui: string;
    puerto: number;
    payload: string;
    evento: string;
    contenido: string;
}
//# sourceMappingURL=log-dispositivo.d.ts.map