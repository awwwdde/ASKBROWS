import React from 'react';

import style from './footer.module.scss';

import vkIcon from '../../graphics/icons/VK.svg';
import tgIcon from '../../graphics/icons/Telegram.svg';
import instIcon from '../../graphics/icons/Instagram.svg';

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.footer__socials}>
        <li className={style.footer__socialsItem}>
          <a href="#" target="_blank" className={style.footer__socialsItemLink}>
            <img src={vkIcon} alt="" />
          </a>
        </li>
        <li className={style.footer__socialsItem}>
          <a href="#" target="_blank" className={style.footer__socialsItemLink}>
            <img src={tgIcon} alt="" />
          </a>
        </li>
        <li className={style.footer__socialsItem}>
          <a href="#" target="_blank" className={style.footer__socialsItemLink}>
            <img src={instIcon} alt="" />
          </a>
        </li>
      </ul>
      <div className={style.footer__tel}>
        <a href="tel:+79296407430" className={style.footer__telLink}>
          8 929 640 7430
        </a>
      </div>
    </footer>
  );
}

export default Footer;
