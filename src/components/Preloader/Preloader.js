import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <span className="preloader__circle"></span>
      <h2 className="preloader__title">Идет поиск новостей...</h2>
    </div>
  );
}

export default Preloader;
