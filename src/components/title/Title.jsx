import React from 'react';

import style from './title.module.scss';

function Title({ children }) {
  return <h2 className={style.title}>{children}</h2>;
}

export default Title;
