import { IEstablecimientoDTO } from './establecimiento';

export interface ILoteAnimalDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDTO;
}
