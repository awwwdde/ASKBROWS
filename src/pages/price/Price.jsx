import React from 'react';
import PriceItem from '../../components/priceItem/PriceItem';
import Title from '../../components/title/Title';

import './price.scss';

function Price() {
  const cards = [
    {
      id: 0,
      title: 'Комплекс окрашивания бровей',
      descr: '(уход, архитектура, окрашивание, коррекция)',
      price: '800р',
    },
    {
      id: 1,
      title: 'Комплекс ламинирования бровей',
      descr: '(уход, ламинирование, архитектура, окрашивание, коррекция)',
      price: '1200р',
    },
    {
      id: 2,
      title: 'Комплекс ламинирования ресниц',
      descr: '(ламинирование, окрашивание, уход)',
      price: '1300р',
    },
  ];
  return (
    <div className="price">
      <ul className="price__list">
        {cards.map(({ id, title, descr, price }) => {
          return <PriceItem key={id} title={title} descr={descr} price={price} />;
        })}
      </ul>
    </div>
  );
}

export default Price;
