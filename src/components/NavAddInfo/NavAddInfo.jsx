import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavAddInfo({ path, name }) {
  return (
    <NavLink to={path} className={'listInfo__link'}>
      {name}
    </NavLink>
  );
}

NavAddInfo.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavAddInfo;
