import React, { useState } from 'react';
import Title from '../../components/title/Title';

import './contacts.scss';

import tg from '../../graphics/icons/Telegram.svg';
import vk from '../../graphics/icons/VK.svg';
import inst from '../../graphics/icons/Instagram.svg';
import arrow from '../../graphics/icons/arrow.svg';

function Contacts() {
  const [servicesActive, setServicesActive] = useState(false);

  const services = [
    { id: 0, title: 'Комплекс окрашивания бровей' },
    { id: 1, title: 'Комплекс ламинирования бровей' },
    { id: 2, title: 'Комплекс ламинирования ресниц' },
  ];
  return (
    <div className="contacts">
      <Title>Контакты</Title>
      <div className="contacts__inner">
        <div className="contacts__info">
          <p className="contacts__info-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum pa
          </p>
          <div className="contacts__info-socials">
            <div className="contacts__left-socials-item">
              <img src={tg} alt="" />
            </div>
            <div className="contacts__left-socials-item">
              <img src={vk} alt="" />
            </div>
            <div className="contacts__left-socials-item">
              <img src={inst} alt="" />
            </div>
          </div>
        </div>
        <form className="contacts__form">
          <input className="contacts__form-item" placeholder="Ваше имя" required type="text" name="name" />
          <input className="contacts__form-item" placeholder="Ваш номер телефона" required type="tel" name="tel" />
          <div
            className={
              servicesActive
                ? 'contacts__form-item contacts__form-services contacts__form-item contacts__form-services_active'
                : 'contacts__form-item contacts__form-services'
            }
          >
            <span className="contacts__form-services-title" onClick={() => setServicesActive(!servicesActive)}>
              Выберите услугу
            </span>
            <ul className="contacts__form-services-list">
              {services.map(({ id, title }) => {
                return (
                  <li key={id} className="contacts__form-services-list-item">
                    {title}
                  </li>
                );
              })}
            </ul>
            <img
              src={arrow}
              alt=""
              className={
                servicesActive
                  ? 'contacts__form-services-arrow contacts__form-services-arrow_active'
                  : 'contacts__form-services-arrow'
              }
            />
          </div>
          <textarea
            className="contacts__form-item contacts__form-text"
            placeholder="Ваше сообщение..."
            required
            name=""
            id=""
          ></textarea>
          <button className="contacts__form-item contacts__form-btn">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
