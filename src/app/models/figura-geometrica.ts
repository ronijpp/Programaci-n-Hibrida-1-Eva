"esport"
abstract class FiguraGeometrica {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    abstract CalcularPerimetro(): number;
}