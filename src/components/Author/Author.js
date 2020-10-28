import React from 'react';
import author from '../../images/author.jpg';
import './Author.css';

function Author() {
  return (
    <section className="author page__section">
      <img
        className="author__img"
        src={author}
        alt="Алена Батюшкова"
      />
      <div className="author__info">
        <h2 className="author__title">Об авторе</h2>
        <p className="author__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
        <p className="author__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
      </div>
    </section>
  );
}

export default Author;
