import { ICoordenadas } from '../../';

export interface IReporteCaravanaDTO {
    _id: string;
    deveui: string;
    fecha: string;
    idAsignado?: string;
    ubicacion: ICoordenadas;
}
