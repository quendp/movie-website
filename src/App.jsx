import { useEffect, useState } from "react";
import "./App.scss";
import apiConfig from "./api/apiConfig";
import fetchMovies from "./utils/fetchMovies";
import Card from "./components/Card";

const App = () => {
  const [moviesList, setMoviesList] = useState();
  const [fetchStatusMessage, setFetchStatusMessage] = useState("");

  useEffect(() => {
    const api = `${apiConfig.baseUrl}/movie/popular?api_key=${apiConfig.apiKey}&page=1`;
    const controller = new AbortController();
    (async () => {
      const fetchedMovies = await fetchMovies(
        api,
        controller,
        setFetchStatusMessage
      );
      console.log(fetchedMovies);

      setMoviesList(fetchedMovies?.results);

      if (fetchedMovies?.results.length === 0) {
        setFetchStatusMessage("No movies found.");
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="app">
      <h1>Movie list using Grid layout</h1>
      <div className="grid-container">
        {moviesList && moviesList.length > 0 ? (
          moviesList.map((movie) => (
            <Card
              key={movie.id}
              image={movie.backdrop_path}
              title={movie.title}
            />
          ))
        ) : (
          <p>{fetchStatusMessage}</p>
        )}
        {!moviesList && <p>Oops</p>}
      </div>
      <div>
        <p style={{ textAlign: "center", fontSize: "10px" }}>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB logo"
            style={{ width: "50px", marginRight: "15px" }}
          />
          This product uses the TMDB API but is not endorsed or certified by
          TMDB
        </p>
      </div>
    </div>
  );
};

export default App;
