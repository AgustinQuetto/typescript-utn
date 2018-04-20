export class Punto {
    private _x : number;
    private _y : number;

    public constructor(x : number, y : number) {
        this._x = x;
        this._y = y;
    }

    public GetX(){
        return this._x;
    }

    public GetY(){
        return this._y;
    }
}