/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
*/


function isPalindrome(quote) {

quote = quote.toLowerCase(quote);
quote = quote.replaceAll(" ","");

for (let i=0; i < quote.lenght / 2; i++) {
    const lchar = quote.charAt(i);
    const rchar = quote.charAt(quote.lenght -1 -i);
    if (lchar !== rchar) {
        return false
    }
}

return true;
}
const quote = "Dabale arroz a la zorra el abad";

let answer7 = "¿La frase '" + quote + "' es palíndroma? " + isPalindrome(quote);

showContent(7, answer7);