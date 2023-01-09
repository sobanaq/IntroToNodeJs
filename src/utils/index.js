const movieArray = [];

class Movie {
  constructor(
    inputTitle,
    inputActor = "Not Specified",
    inputDirector,
    inputYear,
    inputIsGood
  ) {
    this.title = inputTitle;
    this.actor = inputActor;
    this.director = inputDirector;
    this.year = inputYear;
    this.isGood = inputIsGood;
  }
  add() {
    // movieArray.push(this);
    // console.log(movieArray);
    return this;
  }
}

module.exports = Movie;
