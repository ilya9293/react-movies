import React from 'react';
// import PropTypes from 'prop-types';
import NavItem from 'components/NavItem';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="mainMenu">
          <li className="mainMenu__item">
            {<NavItem path={'/'} name={'Home'} />}
          </li>
          <li className="mainMenu__item">
            {<NavItem path={'/movies'} name={'Movies'} />}
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Header.propTypes = {};

export default Header;
