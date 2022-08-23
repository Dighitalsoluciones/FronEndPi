export class encabezado{
    id?: number;
    fotoperfil: String;
    nombre: String;
    titulo: String;
    direccion: String;

    constructor(fotoperfil: String, nombre: String, titulo: String, direccion: String){
        this.fotoperfil = nombre;
        this.nombre = nombre;
        this.titulo = titulo;
        this.direccion = direccion;
    }
}