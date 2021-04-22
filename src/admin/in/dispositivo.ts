import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IDispositivoAdminValidation = joi.object<IDispositivoAdmin>({
    deviceName: joi.string().required(),
    deveui: joi.string().required(),
    tipo: joi.string().required(),
    idLote: joi.string().required(),
    idCliente: joi.string(),
    applicationId: joi.string(),
    deviceProfileId: joi.string(),
});

export const IDispositivoAdminSwagger = j2s(IDispositivoAdminValidation).swagger;

export interface IDispositivoAdmin {
    deviceName: string;
    deveui: string;
    tipo: string;
    idLote: string;
    idCliente: string;
    applicationId: string;
    deviceProfileId: string;
}
