import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IOrganizationValidation = joi.object<IOrganization>({
    organization: joi.object({
        canHaveGateways: joi.boolean(),
        displayName: joi.string(),
        id: joi.string(),
        maxDeviceCount: joi.number(),
        maxGatewayCount: joi.number(),
        name: joi.string(),
    }),
});

export const IOrganizationSwagger = j2s(IOrganizationValidation).swagger;

export interface IOrganization {
    organization: {
        canHaveGateways: boolean,
        displayName: string,
        id: string,
        maxDeviceCount: number,
        maxGatewayCount: number,
        name: string,
    }
}
