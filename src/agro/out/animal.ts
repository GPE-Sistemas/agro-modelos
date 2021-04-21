import joi from 'joi';
import j2s from 'joi-to-swagger';

import { IDispositivoCaravanaDTO } from '../../caravana/out/dispositivo';
import { IBajaDTO, IBajaDTOValidation } from './baja';
import { ICategoriaDTO, ICategoriaDTOValidation } from './categoria';
import { ICorralDTO, ICorralDTOValidation } from './corral';
import { IEspecieDTO, IEspecieDTOValidation } from './especie';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';
import { IEventoEspecificoDTO } from './eventoEspecifico';
import { IGrupoDTO, IGrupoDTOValidation } from './grupo';
import { ILoteAnimalDTO, ILoteAnimalDTOValidation } from './lote-animal';
import { IPesajeDTO } from './pesaje';
import { IRazaDTO, IRazaDTOValidation } from './raza';
import { IServicioDTO } from './servicio';
import { ISubcategoriaDTO, ISubcategoriaDTOValidation } from './subcategoria';
import { ITratamientoDTO } from './tratamiento';
import { IVacunacionDTO } from './vacunacion';

export const IAnimalDTOValidation = joi.object<IAnimalDTO>({
    _id: joi.string().required(),
    caravana: joi.string().required(),
    dientes: joi.number(),
    sexo: joi.boolean(),
    fechaNacimiento: joi.date(),
    fechaAlta: joi.date(),
    foto: joi.string(),
    idBaja: joi.string(),
    idCategoria: joi.string(),
    idCorral: joi.string(),
    deveuiDispositivo: joi.string(),
    idEspecie: joi.string(),
    idEstablecimiento: joi.string(),
    idGrupos: joi.array().items(joi.string()),
    idLote: joi.string(),
    idMadre: joi.string(),
    idPadre: joi.string(),
    idRaza: joi.string(),
    idSubcategoria: joi.string(),
    // Populate
    baja: IBajaDTOValidation,
    categoria: ICategoriaDTOValidation,
    corral: ICorralDTOValidation,
    // dispositivo: IDispositivoCara
    especie: IEspecieDTOValidation,
    establecimiento: IEstablecimientoDTOValidation,
    grupos: joi.array().items(IGrupoDTOValidation),
    lote: ILoteAnimalDTOValidation,
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
    caravana: string;
    deveuiDispositivo?: string;
    dientes: number;
    fechaNacimiento?: string;
    fechaAlta?: string;
    foto?: string;
    idBaja?: string;
    idCategoria?: string;
    idCorral?: string;
    idEspecie?: string;
    idEstablecimiento?: string;
    idGrupos?: string[];
    idLote?: string;
    idMadre?: string;
    idPadre?: string;
    idRaza?: string;
    idSubcategoria?: string;
    sexo?: boolean;
    // Populate
    baja?: IBajaDTO;
    categoria?: ICategoriaDTO;
    corral?: ICorralDTO;
    dispositivo?: IDispositivoCaravanaDTO;
    especie: IEspecieDTO;
    establecimiento?: IEstablecimientoDTO;
    grupos?: IGrupoDTO[];
    lote?: ILoteAnimalDTO;
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
}
