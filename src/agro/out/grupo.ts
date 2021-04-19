import { IEstablecimientoDTO } from './establecimiento';

export interface IGrupoDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDTO;
}
