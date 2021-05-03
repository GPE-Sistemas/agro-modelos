import joi from 'joi';
export declare const IOrganizationDetailChirpstackDTOValidation: joi.ObjectSchema<IOrganizationDetailChirpstackDTO>;
export declare const IOrganizationDetailChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiOrganization {
    canHaveGateways: boolean;
    displayName: string;
    id: string;
    maxDeviceCount: number;
    maxGatewayCount: number;
    name: string;
}
export interface IOrganizationDetailChirpstackDTO {
    createdAt: string;
    organization: apiOrganization;
    updatedAt: string;
}
//# sourceMappingURL=organization-detail copy.d.ts.map