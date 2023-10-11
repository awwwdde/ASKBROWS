import React, { useState } from 'react';

import './main.scss';

import img from '../../graphics/images/main_img.png';

function Main() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="main">
      <div className="main__left">
        <h1 className="main__title">Askbrows</h1>
        <p className="main__subtitle">Ламинирование & Окрашивания бровей</p>
        <button className="main__btn" onClick={() => setModalActive(!modalActive)}>
          Запись онлайн
        </button>
      </div>
      <div
        className={modalActive ? 'main__blur main__blur_active' : 'main__blur'}
        onClick={() => setModalActive(!modalActive)}
      ></div>
      <div className={modalActive ? 'main__modal main__modal_active' : 'main__modal'}>
        <h2 className="main__modal-title">Я вам перезвоню!</h2>
        <input className="main__modal-item" type="text" placeholder="Ваше имя" />
        <input className="main__modal-item" type="tel" placeholder="Ваш телефон" />
        <textarea
          className="main__modal-item main__modal-text"
          name=""
          id=""
          placeholder="Ваше сообщение..."
        ></textarea>
        <button className="main__modal-item main__modal-btn">Записаться</button>
      </div>
      <div className="main__right">
        <img src={img} alt="" className="main-right__img" />
      </div>
    </div>
  );
}

export default Main;
