// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

    const directors = movies.filter((movie) => movie.director).map((movie) => movie.director);
    const uniqueDirectors = directors.filter((elem, i, arr) => arr.indexOf(elem) === i);
    
    return uniqueDirectors;
  }
  


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someMovies) {  
  return someMovies.filter((eachMovie) => eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
).lenght;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(lotsOfMovies) {


  if (!lotsOfMovies.length) {
    return 0;
  }

  let total = lotsOfMovies.reduce((m1, m2) => {
    if (m2.rate) {
      return m1 + m2.rate;
    } else {
      return m1;
    }
  },0);

  return (total/lotsOfMovies.length)

}





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(otherMovies) {

  let dramaMovies = otherMovies.filter((eachMovie) => eachMovie.genre.includes("Drama"))
return scoresAverage(dramaMovies);
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(lotsOfMovies) {

  let newArray = [...lotsOfMovies];

  newArray.sort((m1, m2) => {
    if (m1.year > m2.year) {
      return 1;
    } else if (m1.year < m2.year) {
      return -1;
    } else {
      if (m1.title > m2.title) {
        return 1;
      } else if (m2.title > m1.title) {
        return -1;
      }
      return 0;
    }
  });
  return newArray;
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(listOfMovies) {


   return [...lotsOfMovies].sort((m1, m2) => {
      if (m1.title > m2.title) {
        return 1;
      } else if (m1.title < m2.title) {
        return -1;
      } else {
        return 0;
      }
    }).map((eachMovie) => eachMovie.title).slice(0, 20); 

//alternative
/* function orderAlphabetically(listOfMovies) {
  const newListOfMovies = [...listOfMovies];

  if (newListOfMovies.length === 1) {
    return newListOfMovies[0].title;
  }

  if (newListOfMovies.length > 20) {
    newListOfMovies.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      if (a.title === b.title) {
        return 0;
      }
    });

    const listWith20Elements = newListOfMovies.filter(function (item, index) {
      if (index < 20) {
        return item;
      }
    });

    const mappedTitles = listWith20Elements.map(function (item) {
      return item.title;
    });

    return mappedTitles;
  } else {
    const mappedTitles = newListOfMovies.map(function (item) {
      return item.title;
    });

    mappedTitles.sort();

    return mappedTitles;
  } */

}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {



}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(lotsOfMovies) {

  if (!lotsOfMovies.length) return null;

  let masterObject = {};

  





}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
