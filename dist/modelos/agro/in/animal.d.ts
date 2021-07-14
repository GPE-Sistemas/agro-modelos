import joi from 'joi';
export declare const IAnimalValidation: joi.ObjectSchema<IAnimal>;
export declare const IAnimalSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAnimal {
    activo?: boolean;
    caravana: string;
    deveui?: string;
    dientes?: number;
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
}
//# sourceMappingURL=animal.d.ts.map