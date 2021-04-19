import { ICoordenadas } from '../../';

export interface IEstablecimientoDTO {
    _id: string;
    nombre: string;
    coordenadas?: ICoordenadas[][];
}
