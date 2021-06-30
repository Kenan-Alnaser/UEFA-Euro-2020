import React from 'react';

import Arrow from './up-arrow.svg';
import classes from './scrollUp.module.scss';

const ScrollUp = () => {
  const scrollToHead = () => {
    const anchorElement = document.querySelector('.logo');
    if (anchorElement && anchorElement.offsetTop) anchorElement.scrollIntoView();
  };

  return (
    <div>
      <img className={classes.arrow} src={Arrow} alt="arrow up" onClick={scrollToHead} />
    </div>
  );
};

export default ScrollUp;
