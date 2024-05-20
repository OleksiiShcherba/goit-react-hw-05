import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/TMDBService";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId, (data) => {
      setReviews(data.results);
    });
  }, [movieId]);

  if (reviews.length == 0) {
    return <p>{"We don't have any reviews for this movie."}</p>;
  }

  return (
    <ul className={css.movieReviewsList}>
      {reviews.map((review) => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieReviews;
