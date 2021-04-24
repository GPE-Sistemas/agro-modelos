import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IMetadatosValidation = joi.object<IMetadatos>({
    gatewayID: joi.string().required(),
    timestamp: joi.date(),
    rssi: joi.number(),
    loRaSNR: joi.number(),
    location: joi.object({
        altitude: joi.number(),
        latitude: joi.number(),
        longitude: joi.number(),
    }),
});

export const IMetadatosSchema = j2s(IMetadatosValidation).swagger;

export interface IMetadatos {
    gatewayID: string;
    timestamp: string;
    rssi: number;
    loRaSNR: number;
    location: {
        altitude: number;
        latitude: number;
        longitude: number;
    };
}
