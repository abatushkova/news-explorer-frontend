import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { ReactComponent as LogoutIcon } from '../../images/logout.svg';
import './NavBar.css';

const NavBar = (props) => {
  const { mode } = props;
  const menuClass = `menu menu_theme_${mode}`;
  const listClass = `menu__list menu__list_bg_${mode}`;
  const linkClass = `menu__link menu__link_color_${mode}`;
  const iconClass = `menu__logout-icon menu__logout-icon_color_${mode}`;

  return (
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
        {mode === 'black' && (
          <li className="menu__item">
            <NavLink
              exact to="/saved-news"
              className={linkClass}
              activeClassName="menu__link_active"
            >
              Сохранённые статьи
            </NavLink>
          </li>
        )}
        <li className="menu__item">
          <Button
            type="button"
            btnClass="menu__btn"
          >
            {mode === 'black' ? (
              <>
                Грета
                <LogoutIcon
                  className={iconClass}
                />
              </>
            ) : (
              "Авторизоваться"
            )}
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
