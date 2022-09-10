import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, onClick }) {
  return (
    <button onClick={onClick} className="button">
      Go back to {name === '/movies' ? 'Movies' : 'Home'}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
