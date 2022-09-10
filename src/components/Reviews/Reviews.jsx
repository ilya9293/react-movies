import notify from 'services/tostify';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiReview } from '../../services/api';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await apiReview(movieId);
        setReviews(results);
      } catch (error) {
        //   alert('Something went wrong');
        notify('Something went wrong');
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <ul className="listReview">
      {!!reviews.length ? (
        reviews.map(({ author, content, id }) => {
          return (
            <li key={id} className="listReview__item">
              <h3 className="titleReview">Author: {author}</h3>
              <p className="textReview">{content}</p>
            </li>
          );
        })
      ) : (
        <h3>No reviews</h3>
      )}
    </ul>
  );
}

// Reviews.propTypes = {};

export default Reviews;
