const Movie = require("./index");

const addMovie = (input) => {
  const movie = new Movie(
    input.title,
    input.actor,
    input.director,
    input.year,
    input.isGood
  );
  console.log("movie: ", movie);
};

const addMulti = (input) => {
  const movie1 = new Movie(
    input.title1,
    input.actor1,
    input.director1,
    input.year1,
    input.isGood1
  );

  const movie2 = new Movie(
    input.title2,
    input.actor2,
    input.director2,
    input.year2,
    input.isGood2
  );
  console.log("movie: ", movie1, movie2);
};

module.exports = { addMovie, addMulti };
