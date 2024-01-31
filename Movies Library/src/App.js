import { useState, useEffect } from "react";
import "./app.css";
import Logo from "./Logo.png";
import MovieData from "./movieData";
import WatchedMoviesSummaryList from "./WatchedMoviesSummaryList";
import MovieItem from "./MovieItem";
import Footer from "./footer";

const movies = [
  {
    title: "Journey Through Time",
    author: "Alex Green",
    duration: "120 minutes",
    cast: ["John Doe", "Jane Smith", "Alice Johnson"],
    type: "Science Fiction",
    budget: "$120 million",
    summary:
      "In 'Journey Through Time,' a group navigates historical epochs via time travel, facing dilemmas and paradoxes while uncovering time's mysteries. Their journey through various eras offers insights into history's pivotal moments, challenging their perceptions of the past, present, and future in a thrilling sci-fi adventure.",
    release_date: "2024",
    imageUrl:
      "https://m.media-amazon.com/images/I/91hnIlyM3aL._AC_UF1000,1000_QL80_.jpg",
    rating: 7.8,
    id: 1,
  },
  {
    title: "Mystery at the Manor",
    author: "Sarah Brown",
    duration: "105 minutes",
    cast: ["Emily White", "David Black", "Michael Grey"],
    type: "Mystery",
    budget: "$90 million",
    summary:
      "Set in a grand mansion, 'Mystery at the Manor' weaves a tale of a detective unraveling a labyrinth of secrets. Amidst hidden rooms and shadowy figures, the story blends suspense with intrigue, revealing a complex plot involving family legacies, concealed truths, and a mysterious past.",
    release_date: "2023",
    imageUrl:
      "https://m.media-amazon.com/images/I/91hnIlyM3aL._AC_UF1000,1000_QL80_.jpg",
    rating: 8,
    id: 2,
  },
  {
    title: "Lost in the Wild",
    author: "Henry Forest",
    duration: "115 minutes",
    cast: ["Kyle Woods", "Laura Fields", "Tom Mountain"],
    type: "Adventure",
    budget: "$80 million",
    summary:
      "'Lost in the Wild' chronicles a gripping survival tale in treacherous wilderness. Stranded after an accident, the group faces nature's wrath, battling harsh conditions and wildlife. Through their ordeal, they uncover resilience and camaraderie, forging bonds that redefine their understanding of survival and humanity.",
    release_date: "2024",
    imageUrl:
      "https://m.media-amazon.com/images/I/91hnIlyM3aL._AC_UF1000,1000_QL80_.jpg",
    rating: 7.3,
    id: 3,
  },
  {
    title: "Echoes of the Future",
    author: "Linda Visionary",
    duration: "130 minutes",
    cast: ["Mark Time", "Sophia Tomorrow", "Neil Space"],
    type: "Sci-Fi Drama",
    budget: "$150 million",
    summary:
      "'Echoes of the Future' explores a world where AI shapes daily life. This futuristic narrative delves into the ethical complexities of AI-human interactions, challenging characters to confront their beliefs about autonomy, morality, and the essence of being human in an increasingly artificial world.",
    release_date: "2024",
    imageUrl:
      "https://m.media-amazon.com/images/I/91hnIlyM3aL._AC_UF1000,1000_QL80_.jpg",
    rating: 9.5,
    id: 4,
  },
  {
    title: "The Haunted Lighthouse",
    author: "Emma Specter",
    duration: "98 minutes",
    cast: ["Lucas Storm", "Hannah Gale", "Ivan Waves"],
    type: "Horror",
    budget: "$50 million",
    summary:
      "In 'The Haunted Lighthouse,' a secluded lighthouse's new keepers face unexplained phenomena. They delve into its haunted history, encountering ghostly apparitions and a curse. The film artfully combines horror elements with a psychological exploration of isolation, fear, and the eerie legacy of the lighthouse.",
    release_date: "2023",
    imageUrl:
      "https://m.media-amazon.com/images/I/91hnIlyM3aL._AC_UF1000,1000_QL80_.jpg",
    rating: 9.2,
    id: 5,
  },
  {
    title: "Undercover High",
    author: "Mike Laugh",
    duration: "112 minutes",
    cast: ["Chloe Young", "Ryan Senior", "Megan Teen"],
    type: "Comedy",
    budget: "$60 million",
    summary:
      "'Undercover High' humorously depicts undercover agents infiltrating a high school. Balancing their mission with teenage drama, the agents navigate awkward situations, unexpected friendships, and high school challenges. The film cleverly juxtaposes espionage with the comical realities of adolescent life, offering laughs and action.",
    release_date: "2024",
    imageUrl:
      "https://m.media-amazon.com/images/I/91hnIlyM3aL._AC_UF1000,1000_QL80_.jpg",

    rating: 9.3,
    id: 6,
  },
  {
    title: "The Lost Empire",
    author: "Robert Quest",
    duration: "140 minutes",
    cast: ["Arthur King", "Elena Queen", "Knight Lance"],
    type: "Historical Adventure",
    budget: "$200 million",
    summary:
      "Embarking on a quest for a mythical empire, 'The Lost Empire' blends adventure with mystery. The protagonists traverse exotic landscapes, deciphering ancient clues and facing adversaries. Their journey reveals secrets of a bygone civilization, intertwining action, discovery, and the allure of lost treasures.",
    release_date: "2024",
    imageUrl:
      "https://m.media-amazon.com/images/I/91hnIlyM3aL._AC_UF1000,1000_QL80_.jpg",
    rating: 8.8,
    id: 7,
  },
  {
    title: "Racing Hearts",
    author: "Olivia Fast",
    duration: "125 minutes",
    cast: ["Speed McFast", "Lily Swift", "Miles Runner"],
    type: "Action Romance",
    budget: "$95 million",
    summary:
      "Set in the high-stakes world of racing, 'Racing Hearts' combines action with romance. As racers compete on the track, a passionate love story unfolds off it. The film captures the intensity of racing, the rivalry among competitors, and the complexities of love in a competitive world.",
    release_date: "2023",
    imageUrl:
      "https://m.media-amazon.com/images/I/91hnIlyM3aL._AC_UF1000,1000_QL80_.jpg",
    rating: 8.5,
    id: 8,
  },
];

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm === "") {
      setFilteredMovies(movies);
    } else {
      setIsLoadingMovies(true);
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(debouncedSearchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
      setIsLoadingMovies(false);
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const selectMovie = (movie) => {
    setIsLoadingDetails(true);
    setSelectedMovie(null);

    setTimeout(() => {
      setSelectedMovie(movie);
      setIsLoadingDetails(false);
    }, 500);
  };

  const resultText = filteredMovies.length === 1 ? "result" : "results";
  const noResults =
    searchTerm && !isLoadingMovies && filteredMovies.length === 0;

  const groupMoviesByLetter = (movies) => {
    return movies.reduce((acc, movie) => {
      const firstLetter = movie.title[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(movie);
      return acc;
    }, {});
  };

  const groupedMovies = groupMoviesByLetter(filteredMovies);

  return (
    <div>
      <header className="header">
        <a>
          <img className="logo" src={Logo} alt="Omnifood logo" />
        </a>
        <input
          className="title-input"
          type="text"
          id="myTextField"
          name="text_input"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search movies..."
        />

        {searchTerm && (
          <h3 className="results">
            Found {filteredMovies.length} {resultText}
          </h3>
        )}
      </header>

      <main className="background">
        <section className="main-part">
          <div className="grid-container">
            <div className="grid-item">
              <div className="sidebar">
                <ul className="movie-list">
                  {isLoadingMovies ? (
                    <span className="loadingFromInput">Loading movies...</span>
                  ) : noResults ? (
                    <span className="loadingFromInput">No movies found.</span>
                  ) : (
                    filteredMovies.map((movie) => (
                      <li
                        key={movie.id}
                        className="movie-item"
                        onClick={() => selectMovie(movie)}
                      >
                        <img
                          src={movie.imageUrl}
                          alt={movie.title}
                          className="movie-image"
                        />
                        <h3 className="movie-title">{movie.title}</h3>
                        <p className="movie-release-date">
                          📅 {movie.release_date}
                        </p>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
            <div className="grid-item">
              <WatchedMoviesSummaryList />
              {isLoadingDetails ? (
                <p className="loading">Loading details...</p>
              ) : (
                selectedMovie && <MovieData movie={selectedMovie} />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
