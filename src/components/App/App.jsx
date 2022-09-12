import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header';
// import MoviesPage from '../../pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import NotFoundPage from 'pages/NotFoundPage';
// import HomePage from '../../pages/HomePage';
const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "Home___page" */),
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage' /* webpackChunkName: "Movies___page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage' /* webpackChunkName: "MovieDetails___page" */
  ),
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage' /* webpackChunkName: "NotFound___page" */),
);

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path={'/movies/:movieId'}>
            <MovieDetailsPage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
