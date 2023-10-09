import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './menu.module.scss';

function Menu() {
  const linksObject = [
    { id: 0, title: 'Главная', path: '/', isActive: false },
    { id: 1, title: 'Обо мне', path: '/about', isActive: false },
    { id: 2, title: 'Работы', path: '/portfolio', isActive: false },
    { id: 3, title: 'Цены', path: '/price', isActive: false },
    { id: 4, title: 'Контакты', path: '/contacts', isActive: false },
  ];

  const [links, setLinks] = useState(linksObject);

  const onActive = (id) => {
    const newLinksObject = linksObject.map((item) => {
      if (item.id === id) {
        item.isActive = true;
      } else item.isActive = false;
      return item;
    });
    setLinks(newLinksObject);
  };

  return (
    <div className={style.menu}>
      <ul className={style.menu__list}>
        {links.map(({ id, title, path, isActive }) => {
          return (
            <Link
              onClick={() => onActive(id)}
              className={
                isActive ? style.menu__listLink + ' ' + style.menu__listLink_active : style.menu__listLink
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
