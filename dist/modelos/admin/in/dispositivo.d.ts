import joi from 'joi';
export declare const IDispositivoAdminValidation: joi.ObjectSchema<IDispositivoAdmin>;
export declare const IDispositivoAdminSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoAdmin {
    idApplicationServer?: string;
    deveui: string;
    deviceName: string;
    descripcion: string;
    appkey?: string;
    tipo: string;
    idLote: string;
    idCliente?: string;
    deviceProfileId?: string;
}
//# sourceMappingURL=dispositivo.d.ts.map