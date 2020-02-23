"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coche = /** @class */ (function () {
    function Coche(marca) {
        this.marca = marca;
    }
    Coche.prototype.getMarca = function () {
        return this.marca;
    };
    return Coche;
}());
exports.Coche = Coche;
