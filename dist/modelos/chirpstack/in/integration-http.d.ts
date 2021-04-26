import joi from 'joi';
export declare const IIntegrationHTTPChirpstackValidation: joi.ObjectSchema<IIntegrationHTTPChirpstack>;
export declare const IIntegrationHTTPChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IIntegrationHTTPChirpstack {
    integration: {
        ackNotificationURL?: string;
        applicationID: string;
        errorNotificationURL?: string;
        eventEndpointURL: string;
        headers?: {
            key: string;
            value: string;
        }[];
        integrationNotificationURL?: string;
        joinNotificationURL?: string;
        locationNotificationURL?: string;
        marshaler?: 'JSON' | 'PROTOBUF' | 'JSON_V3';
        statusNotificationURL?: string;
        txAckNotificationURL?: string;
        uplinkDataURL?: string;
    };
}
//# sourceMappingURL=integration-http.d.ts.map