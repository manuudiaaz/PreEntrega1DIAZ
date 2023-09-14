// main.js

// Función para verificar si un número es par o impar
function verificarParImpar() {
    var numero = parseInt(document.getElementById("numeroInput").value);

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
    } else {
        if (numero % 2 === 0) {
            document.getElementById("resultado").innerHTML = numero + " es un número par.";
        } else {
            document.getElementById("resultado").innerHTML = numero + " es un número impar.";
        }
    }
}

// Ciclo para imprimir números del 1 al 10 en una lista
var listaNumeros = document.getElementById("listaNumeros");
for (var i = 1; i <= 10; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = i;
    listaNumeros.appendChild(listItem);
}
