import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  const {
    mode,
    children,
  } = props;

  return (
    <header className={`header header_color_${mode}`}>
      <div className="header__section page__section">
        <Link to="/" className="header__logo">NewsExplorer</Link>
        {children}
      </div>
    </header>
  );
};

export default Header;
