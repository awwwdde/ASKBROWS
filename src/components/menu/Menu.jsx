import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './menu.module.scss';

function Menu() {
  const [burgerActive, setBurgerActive] = useState(false);
  const locPath = useLocation().pathname;
  const links = [
    { id: 0, title: 'Главная', path: '/' },
    { id: 1, title: 'Обо мне', path: '/about' },
    { id: 2, title: 'Работы', path: '/portfolio' },
    { id: 3, title: 'Услуги', path: '/price' },
    { id: 4, title: 'Контакты', path: '/contacts' },
  ];

  return (
    <>
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
      <div className={style.menuMobile}>
        <div className={style.menuMobile__burger} onClick={() => setBurgerActive(true)}>
          <div className={style.menuMobile__burgerItem}></div>
          <div className={style.menuMobile__burgerItem}></div>
          <div className={style.menuMobile__burgerItem}></div>
        </div>
        <ul
          className={
            burgerActive ? style.menuMobile__list + ' ' + style.menuMobile__list_active : style.menuMobile__list
          }
        >
          <div className={style.menuMobile__close} onClick={() => setBurgerActive(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
              <path d="M30.4141 30.2832L2.01748 2.11169" stroke="white" stroke-width="4" stroke-linecap="round" />
              <path d="M30.2969 2L2.12536 30.3966" stroke="white" stroke-width="4" stroke-linecap="round" />
            </svg>
          </div>
          <h3 className={style.menuMobile__listTitle}>Навигация</h3>
          {links.map(({ id, title, path }) => {
            return (
              <Link
                className={
                  path == locPath
                    ? style.menuMobile__listLink + ' ' + style.menuMobile__listLink_active
                    : style.menuMobile__listLink
                }
                to={path}
                key={id}
                onClick={() => setBurgerActive(false)}
              >
                {title}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Menu;
