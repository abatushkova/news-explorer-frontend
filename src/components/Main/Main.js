import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Author from '../Author/Author';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';

const Main = () => {

  return (
    <main>
      <SearchForm />
      <NewsCardList />
      <Author />
    </main>
  );
};

export default Main;
