import { useEffect, useState } from "react";
import apiConfig from "../api/apiConfig";
import fetchMovies from "../utils/fetchMovies";
import Card from "../components/Card";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("");

  useEffect(() => {
    setFetchStatus("Fetch Loading...");
    const api = `${apiConfig.baseUrl}/movie/popular?api_key=${apiConfig.apiKey}&page=1`;
    const controller = new AbortController();
    (async () => {
      const moviesData = await fetchMovies(api, controller);
      const moviesResults = moviesData?.results;
      console.log(moviesResults);

      if (!moviesResults) {
        setFetchStatus("An error occurred.");
      } else if (moviesResults.length === 0) {
        setFetchStatus("No movies found.");
      } else {
        setFetchStatus("");
        setMoviesList(moviesResults);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="app">
      <h1>Movie list TMDB API</h1>
      <div className="grid-container">
        {!fetchStatus && moviesList ? (
          moviesList.map((movie) => (
            <Card
              key={movie.id}
              image={movie.backdrop_path}
              title={movie.title}
              overview={movie.overview}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>{fetchStatus}</p>
        )}
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

export default Home;
