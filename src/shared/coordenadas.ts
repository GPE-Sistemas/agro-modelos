import joi from 'joi';
// import j2s from 'joi-to-swagger';

export const ICoordenadasValidation = joi.object<ICoordenadas>({
    lat: joi.number().required(),
    lng: joi.number().required(),
});

export interface ICoordenadas {
    lat: number;
    lng: number;
}
