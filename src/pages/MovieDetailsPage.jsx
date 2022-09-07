import React from 'react';
// import PropTypes from 'prop-types';
import { apiOneMovie } from '../services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getOneMovie = async () => {
      try {
        const data = await apiOneMovie(movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        alert('Something went wrong');
      }
    };
    getOneMovie();
  }, [movieId]);

  const {
    poster_path,
    title,
    name,
    release_date,
    popularity,
    overview,
    genres,
  } = movie;

  const realeaseMovie = new Date(release_date).getFullYear();

  return (
    <section className="sectionOneMovie">
      {poster_path && (
        <>
          <div className="info">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              className="poster"
            />
            <div className="containerForInfo">
              <h1 className="mainTitle">
                {title}
                {name} {`(${realeaseMovie})`}
              </h1>
              <p className="userScore">{`User score: ${Math.round(
                popularity * 10,
              )}%`}</p>
              <h2 className="titleOverview">Overview</h2>
              <p className="overview">{overview}</p>
              <h2 className="titleGenres">Genres</h2>
              <ul className="listGenres">
                {genres.map(({ id, name }) => (
                  <li key={id} className="listGenres__item">
                    <p className="listGenres__text">{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="addInfo">
            <h3 className="titleAddInfo">Additional information</h3>
            <ul className="listInfo">
              <li className="listInfo__item">
                <a href="" className="listInfo__link">
                  Cast
                </a>
              </li>
              <li className="listInfo__item">
                <a href="" className="listInfo__link">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
}

// MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
