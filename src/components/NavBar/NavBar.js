import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { ReactComponent as LogoutIcon } from '../../images/logout.svg';
import './NavBar.css';

const NavBar = (props) => {
  const {
    mode,
    openLogin,
    loggedIn,
    signOut,
    user
  } = props;

  const [burgerClass, setBurgerClass] = useState('');

  const menuClass = `menu menu_theme_${mode}`;
  const listClass = `menu__list menu__list_bg_${mode}`;
  const linkClass = `menu__link menu__link_color_${mode}`;
  const iconClass = `menu__logout-icon menu__logout-icon_color_${mode}`;
  const btnClass = `menu__btn menu__btn_border_${mode}`
  
  const toggleBurger = () => {
    if (burgerClass === '') {
      setBurgerClass('burger_active');
    } else {
      setBurgerClass('');
    }
  }
  
  const handleLoginClick = () => {
    openLogin();
    setBurgerClass('');
  }

  return (
    <>
      <button
        type="button"
        className={`burger burger_bg_${mode} ${burgerClass}`}
        onClick={toggleBurger}
      ></button>
      <nav className={menuClass}>
        <ul className={listClass}>
          <li className="menu__item">
            <NavLink
              exact to="/"
              className={linkClass}
              activeClassName="menu__link_active"
            >
              Главная
            </NavLink>
          </li>
          {loggedIn ? (
            <>
              <li className="menu__item">
                <NavLink
                  exact to="/saved-news"
                  className={linkClass}
                  activeClassName="menu__link_active"
                >
                  Сохранённые статьи
                </NavLink>
              </li>
              <li className="menu__item">
                <Button
                  type="button"
                  btnClass={btnClass}
                  clickHandler={signOut}
                >
                  {user.name}
                  <LogoutIcon className={iconClass} />
                </Button>
              </li>
            </>
          ) : (
            <li className="menu__item">
              <Button
                type="button"
                btnClass={btnClass}
                name="Авторизоваться"
                clickHandler={handleLoginClick}
              />
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
