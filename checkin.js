//Phil Hofer
//1/27/2015
//checkin.js
//This program creates a function for the video-rental kiosk 
//program so that a returned movie is deleted from the rented 
//movies list and is added back to the available movies list.

function checkin(movie) {
  //This line removes the checked-in movie from the list of movies
  //that are currently checked out.
  rentedMovieList.remove(movie);
  //This line adds the movie to the list of movies currently available.
  movieList.append(movie);
}
