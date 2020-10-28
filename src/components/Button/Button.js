import React from 'react';
import './Buttons.css';

function Button({ ...props }) {
  const {
    type,
    disabled,
    btnClass,
    name,
    clickHandler,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`button ${btnClass}`}
      {...(type !== 'submit' && { onClick: clickHandler})}
    >
      {name}
    </button>
  );
}

export default Button;
