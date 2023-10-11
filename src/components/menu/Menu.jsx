import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './menu.module.scss';

function Menu() {
  const links = [
    { id: 0, title: 'Главная', path: '/' },
    { id: 1, title: 'Обо мне', path: '/about' },
    { id: 2, title: 'Работы', path: '/portfolio' },
    { id: 3, title: 'Услуги', path: '/price' },
    { id: 4, title: 'Контакты', path: '/contacts' },
  ];

  const locPath = useLocation().pathname;

  return (
    <div className={style.menu}>
      <ul className={style.menu__list}>
        {links.map(({ id, title, path }) => {
          return (
            <Link
              className={
                path == locPath ? style.menu__listLink + ' ' + style.menu__listLink_active : style.menu__listLink
              }
              to={path}
              key={id}
            >
              {title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
