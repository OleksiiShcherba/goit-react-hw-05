import { useEffect, useState } from "react";
import {
  useParams,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { getMovieDetails } from "../../services/TMDBService";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId, setMovie);
    }
  }, [movieId]);

  const navigateBack = () => {
    navigate(location?.state ?? "/", {
      state: location.pathname + location.search,
    });
  };

  if (Object.keys(movie).length == 0) {
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  }

  return (
    <>
      <button onClick={navigateBack} className={css.backButton}>
        ◄ Go Back
      </button>
      <div className={css.movieDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={css.moviePoster}
        />
        <div className={css.briefInformation}>
          <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
          <p>{`User Score ${Math.round(
            (movie.vote_average + Number.EPSILON) * 10
          )}%`}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie?.genres
              ?.map((genreData) => {
                return genreData.name;
              })
              .join(", ")}
          </p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`} state={location?.state ?? "/"}>
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={location?.state ?? "/"}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
