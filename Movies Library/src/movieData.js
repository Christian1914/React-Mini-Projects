import React from "react";

function MovieData({ movie }) {
  if (!movie) return <div>Select a movie to see its details</div>;

  return (
    <div className="movie-card">
      <div className="img-and-data">
        <img src={movie.imageUrl} alt={movie.title} className="image-movie" />
        <div className="movie-main-data">
          <h2>{movie.title}</h2>
          <div>
            <span>{movie.release_date}</span>
            <span className="dot"> · </span>
            <span>{movie.duration}</span>
          </div>
          <p>{movie.type}</p>
          <p>⭐ {movie.rating} rating</p>
          <button className="add-to-library-button">Add to library</button>
        </div>
      </div>

      <div className="movie-description">
        <p className="movie-summary">{movie.summary}</p>
        <p>Starring {movie.cast.join(", ")}</p>
        <p>Directed by {movie.author}</p>
      </div>
    </div>
  );
}

export default MovieData;
