import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";

const MovieList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul>
      {moviesList.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={location.pathname + location.search}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  moviesList: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
