import { IEstablecimientoDTO } from './establecimiento';

export interface ILoteDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDTO;
}
