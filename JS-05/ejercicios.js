// * 1 User profile
var nombreUsuario;
var edadUsuario;
var listaPeliculas;

nombreUsuario = prompt("ingresa tu nombre");
edadUsuario = prompt("ingresa tu edad");
listaPeliculas = prompt("ingresa tus 3 peliculas favoritas, separadas por una coma ");

function mostrar(){
    alert("Nombre: " + nombreUsuario + "\nEdad: " + edadUsuario + "\nPelículas favoritas: " + listaPeliculas);
}
mostrar();
console.log(listaPeliculas);

// *2 Highest number
var numeros = [];
for (var i = 0; i < 10; i++) {
    var numeros = (prompt("Ingresa el número " + (i + 1) + ":"));
    numeros.push(numero);
}

var mayor = numeros[0];
for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
alert("El número mayor es: " + mayor);


// * 3 Alarm
var segundosAlarma = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));
var mensaje = prompt("Ingrese el mensaje a mostrar después de " + segundosAlarma + " segundos:");

function mostrarMensajeDespuesDe(segundos, mensaje) {
    var milisegundos = segundos * 1000;
        setTimeout(function() {
        alert(mensaje);
    }, milisegundos);
}
mostrarMensajeDespuesDe(segundosAlarma, mensaje);


// *4 Palindrome

// *5 Factorial

// * 6 Flat array
function aplanarMatriz(matriz) {
    var aplanada = [];
    
    function procesar(elemento) {
        if (Array.isArray(elemento)) {
            elemento.forEach(procesar);
        } 
        else {
            aplanada.push(elemento);
        }
    }
    
    matriz.forEach(procesar);
    
    return aplanada;
}
var matrizAnidada = [[1, 2, [3, 4]], [5, [6, 7]], 8, [9, 10]];
var matrizAplanada = aplanarMatriz(matrizAnidada);
console.log("Matriz aplanada:", matrizAplanada);

