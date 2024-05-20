import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/TMDBService";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId, setMovieCast);
  }, [movieId]);

  return (
    <>
      <ul className={css.movieCastList}>
        {movieCast?.cast?.map((cast) => (
          <li key={cast.id}>
            {cast?.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
                width="100"
              />
            )}
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieCast;
