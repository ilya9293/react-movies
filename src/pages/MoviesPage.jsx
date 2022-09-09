import ListMovies from 'components/ListMovies';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { apiSearch } from '../services/api';

// import PropTypes from 'prop-types';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setmovies] = useState([]);
  const [isClickSubmit, setIsClickSubmit] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const handleInputChange = e => setQuery(e.target.value);

  const handleSearchMovies = e => {
    e.preventDefault();
    history.push({
      ...location,
      search: `query=${query}`,
    });
    setIsClickSubmit(true);
  };

  useEffect(() => {
    if (!isClickSubmit) return;

    const getSearchMovies = async () => {
      try {
        const { results } = await apiSearch(query);
        if (!results.length) {
          alert('Not Found. Please, change request');
          return;
        }
        setmovies(results);
      } catch (error) {
        alert('Something went wrong');
      } finally {
        setIsClickSubmit(false);
      }
    };

    getSearchMovies();
  }, [isClickSubmit, query]);

  const queryPath = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!queryPath) return;
    setQuery(queryPath);
    setIsClickSubmit(true);
  }, [queryPath]);

  return (
    <section className="sectionForm">
      <form className="formMovies" onSubmit={handleSearchMovies}>
        <input
          onChange={handleInputChange}
          value={query}
          type="text"
          placeholder="type movie"
          className="formMovies__field"
        />
        <button type="submit" className="formMovies__btn">
          Search
        </button>
      </form>
      {!!movies.length && <ListMovies movies={movies} />}
    </section>
  );
}

// MoviesPage.propTypes = {};

export default MoviesPage;
