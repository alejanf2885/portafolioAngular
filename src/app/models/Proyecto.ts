export default class Proyecto {

    constructor(
        public nombre: string,
        public descripcion: string,
        public imagenUrl: string,
        public proyectoUrl: string,
        public tecnologias?: string[]
    ) {}
}