import { ICoordenadas } from '../../';
// import { IDispositivoDTO } from './dispositivo';

export interface IReporteDTO {
    _id: string;
    deveui: string;
    fecha: string;
    idAsignado?: string;
    ubicacion: ICoordenadas;
    //
    // dispositivo?: IDispositivoDTO;
}
