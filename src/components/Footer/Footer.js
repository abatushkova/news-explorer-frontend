import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../../images/github.svg';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer page__section">
      <div className="footer__nav">
        <Link
          to="/"
          className="footer__link"
        >
          Главная
        </Link>
        <a
          href="https://praktikum.yandex.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Яндекс.Практикум
        </a>
      </div>
      <div className="footer__social">
        <a
          href="https://github.com/abatushkova"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.facebook.com/alena.batushkova"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
        >
          <FacebookIcon />
        </a>
      </div>
      <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
    </footer>
  );
}

export default Footer;
