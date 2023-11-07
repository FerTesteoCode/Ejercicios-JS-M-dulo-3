/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/


function getRandom(min, max) {
    return Math.floor(Math.random() * 100);
}
    const randomArray = [];

    for (let i = 1; i <= 10; i++ ) {
        randomArray.push(getRandom(0, 100));
    }

    let NumeroMin = Math.min(...randomArray)
    let NumeroMax = Math.max(...randomArray)

    let resultado = "The array is" + randomArray + "The minimum is" + NumeroMin + "," + "The maximun is" + NumeroMax;

    showContent(6, resultado); 

