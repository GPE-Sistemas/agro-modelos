import { IDispositivoDTO } from './dispositivo';

export interface IAlertaDTO {
    _id: string;
    codigo: number;
    fecha: string;
    deveui: string;
    idAsignado?: string;
    //
    dispositivo: IDispositivoDTO;
    //
    descripcion: string;
}
