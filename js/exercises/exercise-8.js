/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/



function alphArray(alphabet) {

    let abcArray = []; 

    for (let i=0; i < alphabet.length; i++) {
        let char = alphabet.charAt(i);
        let position = alphabet.indexOf(char) + 1;
        let formattedArray = `${char}=${position}`;
        abcArray.push(formattedArray);
    }
    return abcArray;


}


const alphabet = "abcdefghijklmnopqrstuvwxyz";

showContent(8, alphArray(alphabet));