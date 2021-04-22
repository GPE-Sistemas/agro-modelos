////////////////////////////
////////// SHARED //////////
////////////////////////////
export * from './shared/ack';
export * from './shared/uplink';
export * from './shared/downlink';
export * from './shared/metadatos';
export * from './shared/coordenadas';
export * from './shared/token';
export * from './shared/filtro';
//
// export * from './shared/in/dispositivo';
// export * from './shared/mongo/dispositivo';
// export * from './shared/out/dispositivo';
//
export * from './shared/in/comando';
export * from './shared/mongo/comando';
export * from './shared/out/comando';
//
export * from './shared/in/log-dispositivo';
export * from './shared/mongo/log-dispositivo';
export * from './shared/out/log-dispositivo';

///////////////////////////////
////////// CHIRPSTACK /////////
///////////////////////////////
export * from './chirpstack/in/application';
export * from './chirpstack/out/application';
//
export * from './chirpstack/in/device-profile';
export * from './chirpstack/out/device-profile';
//
export * from './chirpstack/in/device';
//
export * from './chirpstack/in/gateway-profile';
//
export * from './chirpstack/in/gateway';
//
export * from './chirpstack/in/integration-http';
//
export * from './chirpstack/in/network-server';
//
export * from './chirpstack/in/organization';
//
export * from './chirpstack/in/service-profile';
//

//////////////////////////
////////// ADMIN /////////
//////////////////////////
export * from './admin/in/application-server';
export * from './admin/mongo/application-server';
export * from './admin/out/application-server';
//
export * from './admin/in/cliente';
export * from './admin/mongo/cliente';
export * from './admin/out/cliente';
//
export * from './admin/in/dispositivo';
export * from './admin/mongo/dispositivo';
export * from './admin/out/dispositivo';
//
export * from './admin/in/lote-dispositivo';
export * from './admin/mongo/lote-dispositivo';
export * from './admin/out/lote-dispositivo';
//
export * from './admin/in/usuario';
export * from './admin/mongo/usuario';
export * from './admin/out/usuario';
//

//////////////////////////
////////// AGRO //////////
//////////////////////////
export * from './agro/in/animal';
export * from './agro/mongo/animal';
export * from './agro/out/animal';
//
export * from './agro/in/baja';
export * from './agro/mongo/baja';
export * from './agro/out/baja';
//
export * from './agro/in/categoria';
export * from './agro/mongo/categoria';
export * from './agro/out/categoria';
//
export * from './agro/in/corral';
export * from './agro/mongo/corral';
export * from './agro/out/corral';
//
export * from './agro/in/diagnostico';
export * from './agro/mongo/diagnostico';
export * from './agro/out/diagnostico';
//
export * from './agro/in/especie';
export * from './agro/mongo/especie';
export * from './agro/out/especie';
//
export * from './agro/in/establecimiento';
export * from './agro/mongo/establecimiento';
export * from './agro/out/establecimiento';
//
export * from './agro/in/eventoEspecifico';
export * from './agro/mongo/eventoEspecifico';
export * from './agro/out/eventoEspecifico';
//
export * from './agro/in/grupo';
export * from './agro/mongo/grupo';
export * from './agro/out/grupo';
//
export * from './agro/in/lote-animal';
export * from './agro/mongo/lote-animal';
export * from './agro/out/lote-animal';
//
export * from './agro/in/lote-silobolsa';
export * from './agro/mongo/lote-silobolsa';
export * from './agro/out/lote-silobolsa';
//
export * from './agro/in/pesaje';
export * from './agro/mongo/pesaje';
export * from './agro/out/pesaje';
//
export * from './agro/in/raza';
export * from './agro/mongo/raza';
export * from './agro/out/raza';
//
export * from './agro/in/servicio';
export * from './agro/mongo/servicio';
export * from './agro/out/servicio';
//
export * from './agro/in/silobolsa';
export * from './agro/mongo/silobolsa';
export * from './agro/out/silobolsa';
//
export * from './agro/in/subcategoria';
export * from './agro/mongo/subcategoria';
export * from './agro/out/subcategoria';
//
export * from './agro/in/tipoBaja';
export * from './agro/mongo/tipoBaja';
export * from './agro/out/tipoBaja';
//
export * from './agro/in/tipoTratamiento';
export * from './agro/mongo/tipoTratamiento';
export * from './agro/out/tipoTratamiento';
//
export * from './agro/in/tipoVacuna';
export * from './agro/mongo/tipoVacuna';
export * from './agro/out/tipoVacuna';
//
export * from './agro/in/tratamiento';
export * from './agro/mongo/tratamiento';
export * from './agro/out/tratamiento';
//
export * from './agro/in/vacunacion';
export * from './agro/mongo/vacunacion';
export * from './agro/out/vacunacion';
//

//////////////////////////////
////////// CARAVANA //////////
//////////////////////////////
export * from './caravana/acelerometro';
//
export * from './caravana/in/dispositivo';
export * from './caravana/mongo/dispositivo';
export * from './caravana/out/dispositivo';
//
export * from './caravana/in/alerta';
export * from './caravana/mongo/alerta';
export * from './caravana/out/alerta';
//
export * from './caravana/in/reporte';
export * from './caravana/mongo/reporte';
export * from './caravana/out/reporte';

///////////////////////////////
////////// SILOBOLSA //////////
///////////////////////////////
export * from './silobolsa/in/dispositivo';
export * from './silobolsa/mongo/dispositivo';
export * from './silobolsa/out/dispositivo';
//
export * from './silobolsa/in/alerta';
export * from './silobolsa/mongo/alerta';
export * from './silobolsa/out/alerta';
//
export * from './silobolsa/in/reporte';
export * from './silobolsa/mongo/reporte';
export * from './silobolsa/out/reporte';
