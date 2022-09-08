import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { apiCast } from '../../services/api';
import { useParams } from 'react-router-dom';
import avatar from '../../images/avatar.jpg';

function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await apiCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        alert('Something went wrong');
      }
    };
    getCast();
  }, [movieId]);

  return (
    <ul className="listCast">
      {movieCast.map(({ name, character, profile_path, id }) => {
        return (
          <li key={id} className="listCast__item">
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : avatar
              }
              alt={name}
              className="listCast__img"
            />
            <p className="listCast__name">{name}</p>
            <p className="listCast__character">{`Character: ${character}`}</p>
          </li>
        );
      })}
    </ul>
  );
}

// Cast.propTypes = {};

export default Cast;
