import {Punto} from './punto'
import {Rectangulo} from './rectangulo'

export class FiguraGeometrica {
    protected _color : string;
    protected _perimetro : number;
    protected _superficie : number;

    public constructor(color : string) {
        this._color = color;
    }
}