import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IDispositivoAdminValidation = joi.object<IDispositivoAdmin>({
    applicationServerId: joi.string(),
    deveui: joi.string().length(16).required(),
    deviceName: joi.string().required(),
    appkey: joi.string().allow(...['', null]),
    tipo: joi.string().required(),
    idLote: joi.string().required(),
    idCliente: joi.string().allow(''),
    deviceProfileId: joi.string().allow(''),
});

export const IDispositivoAdminSwagger = j2s(IDispositivoAdminValidation).swagger;

export interface IDispositivoAdmin {
    applicationServerId?: string;
    deveui: string;
    deviceName: string;
    appkey: string;
    tipo: string;
    idLote: string;
    idCliente?: string;
    deviceProfileId?: string;
}
