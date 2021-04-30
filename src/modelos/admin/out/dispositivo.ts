import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IApplicationServerDTO, IClienteDTO } from '../';
import { IApplicationServerDTOValidation } from './application-server';
import { IClienteDTOValidation } from './cliente';
import { ILoteDispositivoDTO, ILoteDispositivoDTOValidation } from './lote-dispositivo';

export const IDispositivoAdminDTOValidation = joi.object<IDispositivoAdminDTO>({
    _id: joi.string(),
    idApplicationServer: joi.string(),
    deviceName: joi.string().required(),
    deveui: joi.string().required(),
    tipo: joi.string().required(),
    idLote: joi.string().required(),
    idCliente: joi.string(),
    deviceProfileId: joi.string(),
    //
    applicationServer: IApplicationServerDTOValidation,
    lote: ILoteDispositivoDTOValidation,
    cliente: IClienteDTOValidation,
});

export const IDispositivoAdminDTOSwagger = j2s(IDispositivoAdminDTOValidation).swagger;

export interface IDispositivoAdminDTO {
    _id: string;
    idApplicationServer: string;
    deviceName: string;
    deveui: string;
    tipo: string;
    idLote: string;
    idCliente: string;
    deviceProfileId: string;
    applicationServer?: IApplicationServerDTO;
    lote?: ILoteDispositivoDTO,
    cliente?: IClienteDTO,
}
