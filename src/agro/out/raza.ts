import { IEspecieDTO } from './especie';

export interface IRazaDTO {
    _id: string;
    nombre: string;
    idEspecie: string;
    //
    especie: IEspecieDTO;
}
