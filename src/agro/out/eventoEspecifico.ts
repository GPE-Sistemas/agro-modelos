import { IAnimalDTO } from './animal';

export interface IEventoEspecificoDTO {
    _id: string;
    idAnimal: string;
    fecha: string;
    titulo: string;
    observaciones: string;
    //
    animal?: IAnimalDTO;
}
