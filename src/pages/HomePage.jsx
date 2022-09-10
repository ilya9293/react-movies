import notify from 'services/tostify';
// import PropTypes from 'prop-types';
import { apiTrends } from '../services/api';
import { useEffect, useState } from 'react';
import ListMovies from 'components/ListMovies';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const { results } = await apiTrends();
        setMovies(results);
      } catch (error) {
        notify('Something went wrong');
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <section>
      <h1 className="titleTrend">Trending today</h1>
      <ListMovies movies={movies} />
    </section>
  );
}

// HomePage.propTypes = {};

export default HomePage;
