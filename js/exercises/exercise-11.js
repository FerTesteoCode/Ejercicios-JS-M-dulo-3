/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

function copyArray(movies) {
    return [...movies];
  }
  
  
  function compare(a, b) {
    if (a.rating < b.rating) {
      return 1; 
    }
    if (a.rating > b.rating) {
      return -1; 
    }
    return 0; 
  }
  
  
  let copiedMovies = copyArray(movies); 
  
  
  copiedMovies.sort(compare);
  
  let sortedMovieTitles = copiedMovies.map(movie => movie.title);
  
  showContent(11, sortedMovieTitles);
  