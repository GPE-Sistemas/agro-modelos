import { ITipoTratamientoDTO } from './tipoTratamiento';

export interface IBajaDTO {
    _id: string;
    fecha: string;
    idTipoBaja: string;
    observaciones: string;
    //
    tipoBaja?: ITipoTratamientoDTO;
}
