import joi from 'joi';
export declare const IOrganizationChirpstackValidation: joi.ObjectSchema<IOrganizationChirpstack>;
export declare const IOrganizationChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IOrganizationChirpstack {
    organization: {
        canHaveGateways: boolean;
        displayName: string;
        id?: string;
        maxDeviceCount: number;
        maxGatewayCount: number;
        name: string;
    };
}
//# sourceMappingURL=organization.d.ts.map