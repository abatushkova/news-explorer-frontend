import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = (props) => {
  const { mode } = props;

  return (
    <header className={`header header_color_${mode}`}>
      <div className="header__section page__section">
        <Link to="/" className="header__logo">NewsExplorer</Link>
        <input
          type="checkbox"
          id="burger-btn"
          className="header__burger-checkbox"
        />
        <label className="header__burger-icon" htmlFor="burger-btn">
          <span className={`header__burger header__burger_bg_${mode}`}></span>
        </label>
        <NavBar mode={mode} />
      </div>
    </header>
  );
}

export default Header;
