import React from 'react';
// import PropTypes from 'prop-types';
import api from '../services/api';
import { useEffect, useState } from 'react';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const { results } = await api();
        setMovies(results);
      } catch (error) {
        alert('Something went wrong');
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <section>
      <h1 className="titleTrend">Trending today</h1>
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
    </section>
  );
}

// HomePage.propTypes = {};

export default HomePage;
