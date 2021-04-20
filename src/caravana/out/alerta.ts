import { IDispositivoCaravanaDTO } from './dispositivo';

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
