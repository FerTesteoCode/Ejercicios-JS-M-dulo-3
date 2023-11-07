/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/
function determinarSiglo(año) {
    return Math.ceil(año / 100);
}
showContent(16, determinarSiglo(1456));