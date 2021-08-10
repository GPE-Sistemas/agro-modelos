export interface IQueryParams {
    // Para paginacion
    page?: number;
    limit?: number;
    sort?: string;
    // Filtros
    _id?: string; // Para buscar por _id
    search?: string; // Cadena de texto a buscar por regExp
    searchFields?: string; // Nombre de los campo donde se buscará, es un arreglo pero se debe enviar como string JSON.stringify(searchFieldsArray)
    desde?: number; // Para filtrar por fecha mayores a desde (formato timestamp en ms)
    hasta?: number; // Para filtrar por fecha menores a hasta (formato timestamp en ms)
    dateField?: string; // Nombre del campo de la fecha
    [key: string]: any; // Cualquier campo de busca de forma literal, ej: estado: "nueva"
}
