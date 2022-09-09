import React from 'react';
// import PropTypes from 'prop-types';
import { apiOneMovie } from '../services/api';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavAddInfo from 'components/NavAddInfo';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import avatar from '../images/avatar.jpg';
import Button from 'components/Button';

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const getOneMovie = async () => {
      try {
        const data = await apiOneMovie(movieId);
        setMovie(data);
      } catch (error) {
        alert('Something went wrong');
      }
    };
    getOneMovie();
  }, [movieId]);

  const {
    id,
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  const realeaseMovie = new Date(release_date).getFullYear();

  const handleBack = () => {
    history.push(location.state.from);
  };

  return (
    <section className="sectionOneMovie">
      <Button onClick={handleBack} name={'movies'} />
      {id && (
        <>
          <div className="info">
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : avatar
              }
              alt={title}
              className="poster"
            />
            <div className="containerForInfo">
              <h1 className="mainTitle">
                {title}
                {name} {`(${realeaseMovie})`}
              </h1>
              <p className="userScore">{`User score: ${Math.round(
                vote_average * 10,
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
            <section className="navAddInfo">
              <h3 className="titleAddInfo">Additional information</h3>
              <ul className="listInfo">
                <li className="listInfo__item">
                  <NavAddInfo
                    path={`${match.url}/cast`}
                    name={'Cast'}
                    location={location}
                  />
                </li>
                <li className="listInfo__item">
                  <NavAddInfo
                    path={`${match.url}/reviews`}
                    name={'Reviews'}
                    location={location}
                  />
                </li>
              </ul>
            </section>
          </div>
          <Switch>
            <Route path={`${match.path}/cast`}>
              <Cast />
            </Route>
            <Route path={`${match.path}/reviews`}>
              <Reviews />
            </Route>
          </Switch>
        </>
      )}
    </section>
  );
}

// MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
