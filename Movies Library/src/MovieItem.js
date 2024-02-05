import React from "react";

function MovieItem({ movie, onAddToLibrary, isAdded }) {
  return (
    <li className="movie-item" onClick={() => onAddToLibrary(movie)}>
      <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-release-date">📅 {movie.release_date}</p>
      
    </li>
  );
}

export default MovieItem;
