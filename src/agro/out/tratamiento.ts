import { IAnimalDTO } from './animal';
import { IDiagnosticoDTO } from './diagnostico';
import { ITipoTratamientoDTO } from './tipoTratamiento';

export interface ITratamientoDTO {
    _id: string;
    idAnimal: string;
    idDiagnostico: string;
    idTipoTratamiento: string;
    fecha: string;
    producto: string;
    observaciones: string;
    animal?: IAnimalDTO;
    diagnostico?: IDiagnosticoDTO;
    tipoTratamiento?: ITipoTratamientoDTO;
}
