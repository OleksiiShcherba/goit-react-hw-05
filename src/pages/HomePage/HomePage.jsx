import { useState, useEffect, useMemo } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../services/TMDBService";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies(
      (data) => {
        setTrendingMovies(data.results);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const moviesList = useMemo(() => {
    if (trendingMovies.length === 0) return [];

    return trendingMovies.map((movie) => ({
      id: movie.id,
      title: movie.title,
    }));
  }, [trendingMovies]);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList moviesList={moviesList} />
    </div>
  );
};
export default HomePage;
