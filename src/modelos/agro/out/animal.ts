import joi from 'joi';
import j2s from 'joi-to-swagger';

import { IDispositivoCaravanaDTO, IDispositivoCaravanaDTOValidation } from '../../caravana/out/dispositivo';
import { IBajaDTO, IBajaDTOValidation } from './baja';
import { ICategoriaDTO, ICategoriaDTOValidation } from './categoria';
import { IEspecieDTO, IEspecieDTOValidation } from './especie';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';
import { IEventoEspecificoDTO } from './eventoEspecifico';
import { IGrupoDTO, IGrupoDTOValidation } from './grupo';
import { ILoteDTO, ILoteDTOValidation } from './lote';
import { IPesajeDTO } from './pesaje';
import { IRazaDTO, IRazaDTOValidation } from './raza';
import { IServicioDTO } from './servicio';
import { ISubcategoriaDTO, ISubcategoriaDTOValidation } from './subcategoria';
import { ITratamientoDTO } from './tratamiento';
import { IVacunacionDTO } from './vacunacion';

export const IAnimalDTOValidation = joi.object<IAnimalDTO>({
    _id: joi.string().required(),
    activo: joi.boolean(),
    caravana: joi.string().required(),
    deveui: joi.string(),
    dientes: joi.number(),
    fechaNacimiento: joi.date(),
    fechaAlta: joi.date(),
    foto: joi.string(),
    idBaja: joi.string(),
    idCategoria: joi.string(),
    idEspecie: joi.string(),
    idEstablecimiento: joi.string(),
    idGrupo: joi.string(),
    idLote: joi.string(),
    idMadre: joi.string(),
    idPadre: joi.string(),
    idRaza: joi.string(),
    idSubcategoria: joi.string(),
    sexo: joi.boolean(),
    // Populate
    baja: IBajaDTOValidation,
    categoria: ICategoriaDTOValidation,
    dispositivo: IDispositivoCaravanaDTOValidation,
    especie: IEspecieDTOValidation,
    establecimiento: IEstablecimientoDTOValidation,
    grupo: IGrupoDTOValidation,
    lote: ILoteDTOValidation,
    // madre: IAnimalDTOValidation,
    // padre: IAnimalDTOValidation,
    raza: IRazaDTOValidation,
    subcategoria: ISubcategoriaDTOValidation,
    // Eventos
    // vacunaciones: joi.array().items(IVacunacionDTOValidation),
    // tratamientos: joi.array().items(ITratamientoDTOValidation),
    // eventosEspecificos: joi.array().items(IEventoEspecificoDTOValidation),
    // pesajes: joi.array().items(IPesajeDTOValidation),
    // servicios: joi.array().items(IServicioDTOValidation),
});

export const IAnimalDTOSwagger = j2s(IAnimalDTOValidation).swagger;

export interface IAnimalDTO {
    _id: string;
    activo: boolean;
    caravana: string;
    deveui?: string;
    dientes: number;
    fechaNacimiento?: string;
    fechaAlta?: string;
    foto?: string;
    idBaja?: string;
    idCategoria?: string;
    idEspecie?: string;
    idEstablecimiento?: string;
    idGrupo?: string;
    idLote?: string;
    idMadre?: string;
    idPadre?: string;
    idRaza?: string;
    idSubcategoria?: string;
    sexo?: boolean;
    // Populate
    baja?: IBajaDTO;
    categoria?: ICategoriaDTO;
    especie?: IEspecieDTO;
    establecimiento?: IEstablecimientoDTO;
    grupo?: IGrupoDTO;
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
    servicios?: IServicioDTO[];
    //
    dispositivo?: IDispositivoCaravanaDTO;
}
