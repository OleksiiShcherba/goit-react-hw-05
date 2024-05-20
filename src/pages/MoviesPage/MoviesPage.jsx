import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { searchMovie } from "../../services/TMDBService";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query.length > 0) {
      searchMovie(query, (data) => {
        setMovies(data.results);
      });
    }
  }, [query]);

  const moviesList = useMemo(() => {
    if (movies.length === 0) return [];

    return movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
    }));
  }, [movies]);

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ query: event.target.search.value });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList moviesList={moviesList} />}
    </>
  );
};
export default MoviesPage;
