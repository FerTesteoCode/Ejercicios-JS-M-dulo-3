/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

/*
1. Habría que hacer un bucle en el que cada vez que encontrase una letra, hiciera un contador para cada una de ellas 
2. Después habría que compararlas, si son iguales todas es true, pero si no es false 
3. Hago una constante con el mensaje
*/

function isIsogram(txt) {
    txt = txt.toLowerCase().replaceAll(' ', '');
    const repetitions = {};
 
 
    txt.split('').forEach(char => {
        if (Object.keys(repetitions).includes(char)) {
            repetitions[char] += 1;
        } else {
            repetitions[char] = 1;
        }
    })
 
    return Object.values(repetitions).findIndex(value => value !== 2) === -1;
}
 
showContent(17, isIsogram('aabsdfsdfsdb')); 

