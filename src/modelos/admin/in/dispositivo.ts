import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IDispositivoAdminValidation = joi.object<IDispositivoAdmin>({
    applicationServerId: joi.string(),
    deviceName: joi.string().required(),
    deveui: joi.string().length(16).required(),
    tipo: joi.string().required().valid('Silobolsa', 'Caravana'),
    idLote: joi.string().required(),
    idCliente: joi.string().allow(''),
    applicationId: joi.string().allow(''),
    deviceProfileId: joi.string(),
});

export const IDispositivoAdminSwagger = j2s(IDispositivoAdminValidation).swagger;

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
