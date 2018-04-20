"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var punto_1 = require("./punto");
var Rectangulo = /** @class */ (function () {
    function Rectangulo(v1, v3) {
        this._vertice1 = v1;
        this._vertice2 = new punto_1.Punto(v1.GetX(), v1.GetY());
        this._vertice3 = v3;
        this._vertice4 = new punto_1.Punto(v3.GetX(), v3.GetY());
        this._ladoUno = Math.abs(v1.GetX() - v3.GetX());
        this._ladoDos = Math.abs(v1.GetY() - v3.GetY());
        this._perimetro = this.GetPerimetro();
    }
    Rectangulo.prototype.getArea = function () {
        return this._ladoUno * this._ladoDos;
    };
    Rectangulo.prototype.GetPerimetro = function () {
        return this._ladoUno * 2 + this._ladoDos * 2;
    };
    Rectangulo.prototype.ToString = function () {
        return "";
    };
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
