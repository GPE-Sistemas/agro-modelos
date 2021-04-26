import joi from 'joi';
export declare const IDispositivoAdminDTOValidation: joi.ObjectSchema<IDispositivoAdminDTO>;
export declare const IDispositivoAdminDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoAdminDTO {
    _id: string;
    applicationServerId: string;
    deviceName: string;
    deveui: string;
    tipo: 'Silobolsa' | 'Caravana';
    idLote: string;
    idCliente: string;
    applicationId: string;
    deviceProfileId: string;
}
//# sourceMappingURL=dispositivo.d.ts.map