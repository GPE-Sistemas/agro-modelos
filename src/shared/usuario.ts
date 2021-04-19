export interface IUsuario {
    id?: number;
    email: string;
    clave?: string;
    nombre: string;
    apellido: string;
    rol: string;
    id_cliente?: number;
    activo: boolean;
}
