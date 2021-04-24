import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IDispositivoAdminDTOValidation = joi.object<IDispositivoAdminDTO>({
    _id: joi.string(),
    applicationServerId: joi.string(),
    deviceName: joi.string().required(),
    deveui: joi.string().required(),
    tipo: joi.string().required().valid('Silobolsa', 'Caravana'),
    idLote: joi.string().required(),
    idCliente: joi.string(),
    applicationId: joi.string(),
    deviceProfileId: joi.string(),
});

export const IDispositivoAdminDTOSwagger = j2s(IDispositivoAdminDTOValidation).swagger;

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