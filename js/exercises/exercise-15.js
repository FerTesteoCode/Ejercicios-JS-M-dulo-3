/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/

/* 1. Tengo que calcular la media aritmética de los ratings de cada película
2. Tengo que seleccionar todas las péliculas que tengan un rating mayor a la media y meterlos en un Array.
3. Dentro de ese array hacer lo del ejercicio 11 o 12*/

function calcularMediaRating(movies) {
    let sumaRatings = 0;

    for(let pelicula of movies) {
        sumaRatings += pelicula.rating;
    }
    return sumaRatings/movies.length;
};

const averageRating = Number.parseFloat(calcularMediaRating(movies)).toFixed(2);

showContent(15, averageRating); 



