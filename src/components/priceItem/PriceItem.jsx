import React from 'react';

import style from './priceItem.module.scss';

function PriceItem({ title, descr, price }) {
  return (
    <div className={style.priceItem}>
      <h2 className={style.priceItem__title}>{title}</h2>
      <p className={style.priceItem__descr}>{descr}</p>
      <span className={style.priceItem__price}>{price}</span>
    </div>
  );
}

export default PriceItem;
