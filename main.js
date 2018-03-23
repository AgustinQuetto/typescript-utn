var mensaje = "HOLA MUNDO!!!Puedo mostrar comillas 'simples' Y comillas \"dobles\"";
console.log(mensaje);
console.log("-----------------");
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
meses.forEach(function (element, index) {
    console.log('Mes: ' + element + ' | Numero: ' + index);
});
console.log("-----------------");
function ejercicio3(miNumero, miString) {
    if (miString) {
        for (var index = 0; index < miNumero; index++) {
            console.log(miString);
        }
    }
    else {
        console.log(miNumero - miNumero * 2);
    }
}
ejercicio3(5);
ejercicio3(5, "Agustin");
console.log("-----------------");
function ejercicio4(miNumero) {
    if (miNumero % 2 == 1)
        console.log("El n\u00FAmero " + miNumero + " es impar , siendo " + miNumero + " el n\u00FAmero recibido como par\u00E1metro.");
    else
        console.log("El n\u00FAmero " + miNumero + " es par , siendo " + miNumero + " el n\u00FAmero recibido como par\u00E1metro.");
}
ejercicio4(5);
ejercicio4(4);
console.log("-----------------");
var nombre = "agustin";
var apellido = "quetto";
function ejercicio5(nombre, apellido) {
    console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1) + ", " + apellido.toUpperCase());
}
ejercicio5(nombre, apellido);
console.log("-----------------");
function sacarCubo(numero) {
    return numero * numero;
}
function aCubo(numero) {
    console.log(sacarCubo(numero));
}
aCubo(3);
console.log("-----------------");
function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}
function tomarPrimos() {
    var encontrados = 0;
    for (var i = 2; i < 1000; i++) {
        if (primo(i)) {
            encontrados++;
            console.log(i);
        }
        if (encontrados == 20) {
            break;
        }
    }
}
tomarPrimos();
console.log("-----------------");
function factorial(n) {
    var total = 1;
    for (var i = 1; i <= n; i++) {
        total = total * i;
    }
    return console.log(total);
}
factorial(8);
console.log("-----------------");
function factorialOCubo(numero) {
    if (numero > 0) {
        return factorial(numero);
    }
    else if (numero < 0) {
        return aCubo(numero);
    }
    else {
        console.log("Ingreso un 0 y no es positivo ni negativo.");
    }
}
factorialOCubo(20);
factorialOCubo(-20);
factorialOCubo(0);
console.log("-----------------");
