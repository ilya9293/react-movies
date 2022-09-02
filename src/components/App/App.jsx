import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Header from 'components/Header';
import MoviesPage from '../../pages/MoviesPage';

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </>
  );
};
