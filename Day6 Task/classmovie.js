//Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

class Movie {
    constructor(title, studio, rating) {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
printname(){
    return this.title;
}    
}
let m1=new Movie("Jurassic World Dominion", "Universal Pictures", "PG-13");
console.log(m1);
let m2=new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(m2);
console.log(`Movie title is : ${m1.printname()}, ${m2.printname()}`);