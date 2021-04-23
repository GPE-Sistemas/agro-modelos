import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivoCaravanaDTO, IDispositivoCaravanaDTOValidation } from './dispositivo';

export const IAlertaCaravanaDTOValidation = joi.object<IAlertaCaravanaDTO>({
    _id: joi.string(),
    codigo: joi.number(),
    fecha: joi.date(),
    deveui: joi.string(),
    idAsignado: joi.string(),
    //
    dispositivo: IDispositivoCaravanaDTOValidation,
    //
    descripcion: joi.string(),
});

export const IAlertaCaravanaDTOSwagger = j2s(IAlertaCaravanaDTOValidation).swagger;

export interface IAlertaCaravanaDTO {
    _id: string;
    codigo: number;
    fecha: string;
    deveui: string;
    idAsignado?: string;
    //
    dispositivo?: IDispositivoCaravanaDTO;
    //
    descripcion: string;
}
