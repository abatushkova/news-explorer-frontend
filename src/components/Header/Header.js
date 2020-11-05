import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const {
    mode,
    onLoginClick,
    loggedIn,
    onSignOut,
  } = props;

  return (
    <header className={`header header_color_${mode}`}>
      <div className="header__section page__section">
        <Link to="/" className="header__logo">NewsExplorer</Link>
        <NavBar
          mode={mode}
          openLogin={onLoginClick}
          loggedIn={loggedIn}
          signOut={onSignOut}
          user={currentUser}
        />
      </div>
    </header>
  );
}

export default Header;
