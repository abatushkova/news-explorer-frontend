import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = (props) => {
  const { mode, onLoginClick } = props;

  return (
    <header className={`header header_color_${mode}`}>
      <div className="header__section page__section">
        <Link to="/" className="header__logo">NewsExplorer</Link>
        <NavBar
          mode={mode}
          openLogin={onLoginClick}
        />
      </div>
    </header>
  );
}

export default Header;
