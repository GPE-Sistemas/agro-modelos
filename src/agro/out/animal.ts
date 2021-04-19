import {
    IBajaDTO, ICorralDTO, IEstablecimientoDTO, IEventoEspecificoDTO, IGrupoDTO, ILoteDTO,
    IPesajeDTO, IServicioDTO, ISubcategoriaDTO, ITratamientoDTO, IVacunacionDTO, ICategoriaDTO,
    IEspecieDTO, IRazaDTO, IDispositivoDTO
} from '../../';

// import joi from 'joi';
// import j2s from 'joi-to-swagger';

// export const IAnimalDTOValidation = joi.object<IAnimalDTO>({
//     _id: joi.string(),
//     especie: joi.string(),
// });

// export const IAnimalDTOSchema = j2s(IAnimalDTOValidation).swagger;

export interface IAnimalDTO {
    _id: string;
    caravana: string;
    dientes: number;
    sexo?: boolean;
    fechaNacimiento?: string;
    fechaAlta?: string;
    foto?: string;
    idBaja?: string;
    idCategoria?: string;
    idCorral?: string;
    idDispositivo?: string;
    idEspecie?: string;
    idEstablecimiento?: string;
    idGrupos?: string[];
    idLote?: string;
    idMadre?: string;
    idPadre?: string;
    idRaza?: string;
    idSubcategoria?: string;
    // Populate
    baja?: IBajaDTO;
    categoria?: ICategoriaDTO;
    corral?: ICorralDTO;
    dispositivo?: IDispositivoDTO;
    especie: IEspecieDTO;
    establecimiento?: IEstablecimientoDTO;
    grupos?: IGrupoDTO[];
    lote?: ILoteDTO;
    madre?: IAnimalDTO;
    padre?: IAnimalDTO;
    raza?: IRazaDTO;
    subcategoria?: ISubcategoriaDTO;
    // Eventos
    vacunaciones?: IVacunacionDTO[];
    tratamientos?: ITratamientoDTO[];
    eventosEspecificos?: IEventoEspecificoDTO[];
    pesajes?: IPesajeDTO[];
    servicios?: IServicioDTO[]
}
