import React from 'react';
import './Button.css';

const Button = ({ ...props }) => {
  const {
    type,
    disabled,
    btnClass,
    name,
    clickHandler,
    children,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`button ${btnClass}`}
      {...(type !== 'submit' && { onClick: clickHandler})}
    >
      {children ? children : name}
    </button>
  );
};

export default Button;
