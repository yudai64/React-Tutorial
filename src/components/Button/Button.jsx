import './button.css'
import PropTypes from 'prop-types';
import { useState } from 'react';

const Button = ({
  children,
  color = 'default',
  size='base',
  backgroundColor,
  // handleClick
}) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('clicked');
  }

  return (
    <button
      className={`${color} ${size}`}
      style={backgroundColor && {backgroundColor}}
      onClick={handleClick}
    >
      {children} {message}
    </button>
  );
}

export default Button;

// Button.propTypes = {
//   color: PropTypes.oneOf(['primary', 'default', 'danger']),
//   size: PropTypes.oneOf(['sm', 'base', 'lg']),
//   onClick: PropTypes.func.isRequired,
// }
