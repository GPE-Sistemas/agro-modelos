import joi from 'joi';
import { IApplicationServerDTO, IClienteDTO } from '../';
import { ILoteDispositivoDTO } from './lote-dispositivo';
export declare const IDispositivoAdminDTOValidation: joi.ObjectSchema<IDispositivoAdminDTO>;
export declare const IDispositivoAdminDTOSwagger: import("joi-to-swagger").SwaggerSchema;
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
    lote?: ILoteDispositivoDTO;
    cliente?: IClienteDTO;
}
//# sourceMappingURL=dispositivo.d.ts.map