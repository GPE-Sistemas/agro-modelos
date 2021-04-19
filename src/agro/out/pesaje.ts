import { IAnimalDTO } from './animal';

export interface IPesajeDTO {
    _id: string;
    idAnimal: string;
    fecha: string;
    peso: number;
    observaciones: string;
    //
    animal?: IAnimalDTO;
}
