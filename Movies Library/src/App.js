import { useState, useEffect } from "react";
import "./app.css";
import Logo from "./Logo.png";
import MovieData from "./movieData";
import WatchedMoviesSummaryList from "./WatchedMoviesSummaryList";
import Footer from "./footer";

const movies = [
  {
    title: "The Shawshank Redemption",
    author: "Frank Darabont",
    duration: "142 minutes",
    cast: ["Tim Robbins", "Morgan Freeman"],
    type: "Drama",
    budget: "$25 million",
    summary:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    release_date: "1994",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    rating: 9.3,
    id: 1,
  },
  {
    title: "The Godfather",
    author: "Francis Ford Coppola",
    duration: "175 minutes",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    type: "Crime",
    budget: "$6 million",
    summary:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    release_date: "1972",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 9.2,
    id: 2,
  },
  {
    title: "The Dark Knight",
    author: "Christopher Nolan",
    duration: "152 minutes",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    type: "Action",
    budget: "$185 million",
    summary:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    release_date: "2008",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 9.0,
    id: 3,
  },
  {
    title: "Pulp Fiction",
    author: "Quentin Tarantino",
    duration: "154 minutes",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    type: "Crime",
    budget: "$8 million",
    summary:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    release_date: "1994",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.9,
    id: 4,
  },
  {
    title: "The Great Gatsby",
    author: "Baz Luhrmann",
    duration: "143 minutes",
    cast: ["Leonardo DiCaprio", "Tobey Maguire", "Carey Mulligan"],
    type: "Drama",
    budget: "$105 million",
    summary:
      "A Midwesterner becomes fascinated with his nouveau riche neighbor, who obsesses over his lost love. This adaptation of F. Scott Fitzgerald's classic novel is set in the 1920s and explores themes of decadence, idealism, and the American Dream.",
    release_date: "2013",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_FMjpg_UX1000_.jpg",
    rating: 7.2,
    id: 5,
  },
  {
    title: "Inception",
    author: "Christopher Nolan",
    duration: "148 minutes",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    type: "Science Fiction",
    budget: "$160 million",
    summary:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    release_date: "2010",
    imageUrl: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    rating: 8.8,
    id: 6,
  },
  {
    title: "Fight Club",
    author: "David Fincher",
    duration: "139 minutes",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    type: "Drama",
    budget: "$63 million",
    summary:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    release_date: "1999",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.8,
    id: 7,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    author: "Peter Jackson",
    duration: "201 minutes",
    cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    type: "Fantasy",
    budget: "$94 million",
    summary:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    release_date: "2003",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.9,
    id: 8,
  },
  {
    title: "The Matrix",
    author: "Lana Wachowski, Lilly Wachowski",
    duration: "136 minutes",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    type: "Science Fiction",
    budget: "$63 million",
    summary:
      "A computer programmer discovers that reality as he knows it is a simulation created by machines to subjugate humanity, and he joins a group of rebels to break free.",
    release_date: "1999",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 8.7,
    id: 9,
  },
  {
    title: "The Godfather: Part II",
    author: "Francis Ford Coppola",
    duration: "202 minutes",
    cast: ["Al Pacino", "Robert De Niro", "Robert Duvall"],
    type: "Crime",
    budget: "$13 million",
    summary:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    release_date: "1974",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 9.0,
    id: 10,
  },
  {
    title: "Goodfellas",
    author: "Martin Scorsese",
    duration: "146 minutes",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    type: "Crime",
    budget: "$25 million",
    summary:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    release_date: "1990",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.7,
    id: 11,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "Peter Jackson",
    duration: "178 minutes",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    type: "Fantasy",
    budget: "$93 million",
    summary:
      "A young hobbit, Frodo, who has found the One Ring, embarks on a perilous journey to Mount Doom in order to destroy it and prevent the dark lord Sauron from conquering Middle-earth.",
    release_date: "2001",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    rating: 8.8,
    id: 12,
  },
  {
    title: "Schindler's List",
    author: "Steven Spielberg",
    duration: "195 minutes",
    cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    type: "Drama",
    budget: "$22 million",
    summary:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    release_date: "1993",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 8.9,
    id: 13,
  },
  {
    title: "The Dark Knight Rises",
    author: "Christopher Nolan",
    duration: "164 minutes",
    cast: ["Christian Bale", "Tom Hardy", "Anne Hathaway"],
    type: "Action",
    budget: "$250 million",
    summary:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    release_date: "2012",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
    rating: 8.4,
    id: 14,
  },
  {
    title: "Forrest Gump",
    author: "Robert Zemeckis",
    duration: "142 minutes",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    type: "Drama",
    budget: "$55 million",
    summary:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    release_date: "1994",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    rating: 8.8,
    id: 15,
  },
  {
    title: "The Green Mile",
    author: "Frank Darabont",
    duration: "189 minutes",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    type: "Drama",
    budget: "$60 million",
    summary:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    release_date: "1999",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
    rating: 8.6,
    id: 16,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    author: "Irvin Kershner",
    duration: "124 minutes",
    cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    type: "Science Fiction",
    budget: "$18 million",
    summary:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
    release_date: "1980",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.7,
    id: 17,
  },
  {
    title: "The Matrix Reloaded",
    author: "Lana Wachowski, Lilly Wachowski",
    duration: "138 minutes",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    type: "Science Fiction",
    budget: "$150 million",
    summary:
      "Neo and the rebel leaders race against time to find the Machine City and prevent the machines from digging into Zion's mainframe.",
    release_date: "2003",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 7.2,
    id: 18,
  },
  {
    title: "Gladiator",
    author: "Ridley Scott",
    duration: "155 minutes",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    type: "Action",
    budget: "$103 million",
    summary:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    release_date: "2000",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 8.5,
    id: 19,
  },
  {
    title: "Saving Private Ryan",
    author: "Steven Spielberg",
    duration: "169 minutes",
    cast: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
    type: "War",
    budget: "$70 million",
    summary:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    release_date: "1998",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
    rating: 8.6,
    id: 20,
  },
  {
    title: "The Silence of the Lambs",
    author: "Jonathan Demme",
    duration: "118 minutes",
    cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    type: "Crime",
    budget: "$19 million",
    summary:
      "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    release_date: "1991",
    imageUrl:
      "https://m.media-amazon.com/images/I/51SHYSFNP2L._AC_UF894,1000_QL80_.jpg",
    rating: 8.6,
    id: 21,
  },
  {
    title: "Interstellar",
    author: "Christopher Nolan",
    duration: "169 minutes",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    type: "Science Fiction",
    budget: "$165 million",
    summary:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    release_date: "2014",
    imageUrl:
      "https://m.media-amazon.com/images/I/81sK-HeMjXL._AC_UF1000,1000_QL80_.jpg",
    rating: 8.6,
    id: 22,
  },
  {
    title: "The Pianist",
    author: "Roman Polanski",
    duration: "150 minutes",
    cast: ["Adrien Brody", "Thomas Kretschmann", "Frank Finlay"],
    type: "Drama",
    budget: "$35 million",
    summary:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II.",
    release_date: "2002",
    imageUrl:
      "https://images.moviesanywhere.com/83be0db16d401bf62ecab4c4f8568a4b/a4d71c78-9856-49ef-abd3-db245d6b484f.jpg",
    rating: 8.5,
    id: 23,
  },
  {
    title: "The Usual Suspects",
    author: "Bryan Singer",
    duration: "106 minutes",
    cast: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
    type: "Crime",
    budget: "$6 million",
    summary:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    release_date: "1995",
    imageUrl:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16422_v_v8_aa.jpg",
    rating: 8.5,
    id: 24,
  },
  {
    title: "The Godfather: Part III",
    author: "Francis Ford Coppola",
    duration: "162 minutes",
    cast: ["Al Pacino", "Andy Garcia", "Diane Keaton"],
    type: "Crime",
    budget: "$54 million",
    summary:
      "In the final installment of the Godfather trilogy, an aging Michael Corleone attempts to make his business dealings legitimate, while facing new challenges and betrayals within his family.",
    release_date: "1990",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
    rating: 7.6,
    id: 25,
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
