import { IAnimalDTO } from './animal';

export interface IServicioDTO {
    _id: string;
    idAnimal: string;
    fecha: string;
    inicio: boolean;
    observaciones: string;
    //
    animal?: IAnimalDTO;
}
