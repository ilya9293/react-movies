import React from 'react';
import PropTypes from 'prop-types';

function HomePage() {
  return (
    <section>
      <h1 className="titleTrend">Trending today</h1>
      <ul className="listTrendMovies">
        <li className="listTrendMovies__item">
          <a href="#" className="listTrendMovies__link">
            Dora and the lost
          </a>
        </li>
        <li className="listTrendMovies__item">
          <a href="#" className="listTrendMovies__link">
            Dora and the lost
          </a>
        </li>
      </ul>
    </section>
  );
}

HomePage.propTypes = {};

export default HomePage;
