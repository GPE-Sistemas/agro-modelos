import { IAnimalDTO } from './animal';
import { ITipoVacunaDTO } from './tipoVacuna';

export interface IVacunacionDTO {
    _id: string;
    idAnimal: string;
    idTipoVacuna: string;
    fecha: string;
    dosis: string;
    producto: string;
    observaciones: string;
    //
    animal?: IAnimalDTO;
    tipoVacuna?: ITipoVacunaDTO;
}
