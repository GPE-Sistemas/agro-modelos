import joi from 'joi';
export declare const IDispositivoAdminValidation: joi.ObjectSchema<IDispositivoAdmin>;
export declare const IDispositivoAdminSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoAdmin {
    applicationServerId?: string;
    deviceName: string;
    deveui: string;
    tipo: 'Silobolsa' | 'Caravana';
    idLote: string;
    idCliente?: string;
    applicationId?: string;
    deviceProfileId?: string;
}
//# sourceMappingURL=dispositivo.d.ts.map