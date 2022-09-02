import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavItem({ path, name }) {
  return (
    <NavLink
      exact
      to={path}
      className={'mainMenu__label'}
      activeClassName={'active'}
    >
      {name}
    </NavLink>
  );
}

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
