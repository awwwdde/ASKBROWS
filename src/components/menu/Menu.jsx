import React from 'react';

import style from './menu.module.scss';

function Menu() {
  return (
    <div className={style.menu}>
      <ul className={style.menu__list}>
        <li className={style.menu__listItem}>
          <a href="#" className={style.menu__listItemLink}>
            Главная
          </a>
        </li>
        <li className={style.menu__listItem}>
          <li className={style.menu__listItem}>
            <a href="#" className={style.menu__listItemLink}>
              Обо мне
            </a>
          </li>
          <li className={style.menu__listItem}>
            <a href="#" className={style.menu__listItemLink}>
              Работы
            </a>
          </li>
          <li className={style.menu__listItem}>
            <a href="#" className={style.menu__listItemLink}>
              Цены
            </a>
          </li>
          <li className={style.menu__listItem}>
            <a href="#" className={style.menu__listItemLink}>
              Контакты
            </a>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
