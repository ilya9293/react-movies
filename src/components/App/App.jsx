import HomePage from 'components/HomePage';
import Header from 'components/Header';
import { Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Route path="/">
        <HomePage />
      </Route>
    </>
  );
};
