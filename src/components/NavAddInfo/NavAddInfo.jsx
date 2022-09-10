import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavAddInfo({ path, name, location }) {
  return (
    <NavLink
      to={{
        pathname: path,
        state: {
          from: location.state?.from,
        },
      }}
      className={'listInfo__link'}
    >
      {name}
    </NavLink>
  );
}

NavAddInfo.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.object,
};

export default NavAddInfo;
