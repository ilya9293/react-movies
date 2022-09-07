import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ListMovies({ movies }) {
  return (
    <ul className="listTrendMovies">
      {movies.map(({ name, title, id }) => {
        return (
          <li key={id} className="listTrendMovies__item">
            <Link to={`/movies/${id}`} className="listTrendMovies__link">
              {name} {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

ListMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default ListMovies;
