import {Punto} from './punto'

export class Rectangulo {
    private _area : number;
    private _ladoUno : number;
    private _ladoDos : number;
    private _perimetro : number;
    private _vertice1 : Punto;
    private _vertice2 : Punto;
    private _vertice3 : Punto;
    private _vertice4 : Punto;

    public constructor(v1 : Punto, v3 : Punto) {
        this._vertice1 = v1;
        this._vertice2 = new Punto(v1.GetX(), v1.GetY());
        this._vertice3 = v3;
        this._vertice4 = new Punto(v3.GetX(), v3.GetY());
        this._ladoUno = Math.abs(v1.GetX() - v3.GetX());
        this._ladoDos = Math.abs(v1.GetY() - v3.GetY());
        this._perimetro = this.GetPerimetro()
    }

    public getArea() : number {
        return this._ladoUno * this._ladoDos;
    }

    public GetPerimetro() : number {
        return this._ladoUno*2 + this._ladoDos*2;
    }

    public ToString() : String {
        return "";
    }

}