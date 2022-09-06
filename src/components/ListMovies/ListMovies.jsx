import React from 'react';
import PropTypes from 'prop-types';

function ListMovies({ movies }) {
  return (
    <ul className="listTrendMovies">
      {movies.map(({ name, title, id }) => {
        return (
          <li key={id} className="listTrendMovies__item">
            <a href="" className="listTrendMovies__link">
              {name} {title}
            </a>
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
