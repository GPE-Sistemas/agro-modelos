import joi from 'joi';
export declare const IMetadatosValidation: joi.ObjectSchema<IMetadatos>;
export declare const IMetadatosSchema: import("joi-to-swagger").SwaggerSchema;
export interface IMetadatos {
    gatewayID: string;
    timestamp: string;
    rssi: number;
    loRaSNR: number;
    location: {
        altitude: number;
        latitude: number;
        longitude: number;
    };
}
//# sourceMappingURL=metadatos.d.ts.map