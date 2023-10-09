import React from 'react';

import './main.scss';

import img from '../../graphics/images/main_img.png';

function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <h1 className="main__title">Askbrows</h1>
        <p className="main__subtitle">Ламинирование & Окрашивания бровей</p>
        <button className="main__btn">Запись онлайн</button>
      </div>
      <div className="main-right">
        <img src={img} alt="" className="main-right__img" />
      </div>
    </div>
  );
}

export default Main;
