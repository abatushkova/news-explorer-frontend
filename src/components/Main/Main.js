import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <PopupWithForm />
      <SearchForm />
      <About />
      <NewsCardList />
      <Preloader />
      <NotFound />
    </div>
  );
};

export default Main;
