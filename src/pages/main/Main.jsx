import React, { useRef, useState } from 'react';

import './main.scss';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

function Main() {
  const [modalActive, setModalActive] = useState(false);
  const nodeRef = useRef(null);
  const locPath = useLocation().pathname;

  return (
    <div className="main">
      <div className="main__left">
        <h1 className="main__title">Askbrows</h1>
        <p className="main__subtitle">Ламинирование и окрашивания бровей</p>
        <button className="main__btn" onClick={() => setModalActive(!modalActive)}>
          Записаться
        </button>
      </div>
      <div className={modalActive ? 'main__blur main__blur_active' : 'main__blur'}>
        <div className="main__modal-close" onClick={() => setModalActive(!modalActive)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
            <path d="M30.4141 30.2832L2.01748 2.11169" stroke="#474747" stroke-width="4" stroke-linecap="round" />
            <path d="M30.2969 2L2.12536 30.3966" stroke="#474747" stroke-width="4" stroke-linecap="round" />
          </svg>
        </div>
        <div className={modalActive ? 'main__modal main__modal_active' : 'main__modal'}>
          <h2 className="main__modal-title">Быстрая запись ко мне на процедуру</h2>
          <input className="main__modal-item" type="text" placeholder="Ваше имя" />
          <input className="main__modal-item" type="tel" placeholder="Ваш номер" />
          <textarea
            className="main__modal-item main__modal-text"
            name=""
            id=""
            placeholder="Ваше сообщение..."
          ></textarea>
          <button className="main__modal-item main__modal-btn">Записаться</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
