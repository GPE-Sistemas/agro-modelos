import { ICoordenadas } from '../../';
import { IEstablecimientoDTO } from './establecimiento';

export interface ICorralDTO {
    _id: string;
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
