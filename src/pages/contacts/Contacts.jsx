import React, { useState } from 'react';
import Title from '../../components/title/Title';

import './contacts.scss';

import tg from '../../graphics/icons/Telegram.svg';
import vk from '../../graphics/icons/VK.svg';
import inst from '../../graphics/icons/Instagram.svg';
import arrow from '../../graphics/icons/arrow.svg';

function Contacts() {
  const [servicesActive, setServicesActive] = useState(false);
  const [service, setService] = useState('');

  const services = [
    { id: 0, title: 'Комплекс окрашивания бровей' },
    { id: 1, title: 'Комплекс ламинирования бровей' },
    { id: 2, title: 'Комплекс ламинирования ресниц' },
  ];
  return (
    <div className="contacts">
      <Title>Для вашего удобства, вы можете написать мне через форму обратной связи</Title>
      <div className="contacts__inner">
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
              {!service ? 'Выберите услугу' : service}
            </span>
            <ul className="contacts__form-services-list">
              {services.map(({ id, title }) => {
                return (
                  <li
                    key={id}
                    className={
                      service == title
                        ? 'contacts__form-services-list-item contacts__form-services-list-item_acitve'
                        : 'contacts__form-services-list-item'
                    }
                    onClick={() => {
                      service == title ? setService('') : setService(title);
                      setServicesActive(!servicesActive);
                    }}
                  >
                    {title}
                  </li>
                );
              })}
            </ul>
            <svg
              className={
                servicesActive
                  ? 'contacts__form-services-arrow contacts__form-services-arrow_active'
                  : 'contacts__form-services-arrow'
              }
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="19"
              viewBox="0 0 31 19"
              fill="none"
            >
              <path d="M27.5143 1.75L15.5 16.6138L3.48572 1.75L27.5143 1.75Z" stroke="white" stroke-width="3" />
            </svg>
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
