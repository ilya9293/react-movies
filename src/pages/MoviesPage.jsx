import { useState } from 'react';
// import PropTypes from 'prop-types';

function MoviesPage() {
  const [query, setQuery] = useState('');

  const handleInputChange = e => setQuery(e.target.value);

  return (
    <section className="sectionForm">
      <form className="formMovies">
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
    </section>
  );
}

// MoviesPage.propTypes = {};

export default MoviesPage;
