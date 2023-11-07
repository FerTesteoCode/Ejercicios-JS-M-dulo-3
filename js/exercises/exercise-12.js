/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/



const filteredDramaMovies = movies.filter(movie => movie.category === "Drama");

const movieTitleDescription = filteredDramaMovies.map(movie => {
    return {
        title: movie.title,
        description: movie.description  
    };
});


showContent(12, movieTitleDescription);

