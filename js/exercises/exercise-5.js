/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/

function repetitions(texto) {
    let result = ""
    for (let i=0; i<text.length; i++) {
    let char = text.charAt(i);

    let repeteadChar = char.toLowercase().repeat(i+1);
    let capitalizedChar = repeteadChar.charAt(0).toUpperCase() + repeatedChar.slice(1);

    result += capitalizedChar;
    }
    return result;


}
showContent(5, repetitions("Jaguar")); 
