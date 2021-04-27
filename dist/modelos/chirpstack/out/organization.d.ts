import joi from 'joi';
export declare const IOrganizationChirpstackDTOValidation: joi.ObjectSchema<IOrganizationChirpstackDTO>;
export declare const IOrganizationChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiOrganizationListItem {
    canHaveGateways: boolean;
    createdAt: string;
    displayName: string;
    id: string;
    name: string;
    updatedAt: string;
}
export interface IOrganizationChirpstackDTO {
    result: apiOrganizationListItem[];
    totalCount: string;
}
//# sourceMappingURL=organization.d.ts.map