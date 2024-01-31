import WatchedMovie from "./WatchedMoviesSummaryList";

import React from "react";

function WatchedMoviesList() {
  return (
    <ul className="watched-movie-item">
      <h3 className="movie-title">MOVIES YOU WATCHED</h3>
      <div className="dynamic-data">
        <p>1 movies</p>
        <p>⭐ 9.2</p>
        <p>⏳ 169 min</p>
      </div>
    </ul>
  );
}

export default WatchedMoviesList;
