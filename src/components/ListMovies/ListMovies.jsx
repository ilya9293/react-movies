import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function ListMovies({ movies }) {
  const location = useLocation();

  return (
    <ul className="listTrendMovies">
      {movies.map(({ name, title, id }) => {
        return (
          <li key={id} className="listTrendMovies__item">
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
              className="listTrendMovies__link"
            >
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
