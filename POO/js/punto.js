"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this._x = x;
        this._y = y;
    }
    Punto.prototype.GetX = function () {
        return this._x;
    };
    Punto.prototype.GetY = function () {
        return this._y;
    };
    return Punto;
}());
exports.Punto = Punto;
