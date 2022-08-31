import React from 'react';
import PropTypes from 'prop-types';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="mainMenu">
          <li className="mainMenu__item">
            <p className="mainMenu__label">Home</p>
          </li>
          <li className="mainMenu__item">
            <p className="mainMenu__label">Movies</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default Header;
