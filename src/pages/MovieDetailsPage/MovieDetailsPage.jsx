import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../services/TMDBService";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navigationItem, isActive && css.navigationItemActive);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId, setMovie, (error) => {
        toast.error(error);
      });
    }
  }, [movieId]);

  if (Object.keys(movie).length == 0) {
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  }

  return (
    <>
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
            <NavLink to={`/movies/${movieId}/cast`} className={buildLinkClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              className={buildLinkClass}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
