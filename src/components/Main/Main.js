import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Author from '../Author/Author';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';
import './Main.css';

const Main = (props) => {
  const { mode, onLoginClick } = props;

  return (
    <>
      <Header
        mode={mode.WHITE}
        onLoginClick={onLoginClick}
      />
      <main>
        <SearchForm />
        <NewsCardList />
        <Author />
      </main>
    </>
  );
};

export default Main;
