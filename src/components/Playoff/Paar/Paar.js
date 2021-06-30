import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './paar.module.scss';

const Paar = (props) => {
  const { container, flag, input, colon } = styles;

  const { homeScore, awayScore, homeFlag, awayFlag, winner } = props.data;

  const [inputValue, setInputValue] = useState('');

  const clsContainer = classNames(
    container,
    styles[`container_${props.color}`],
    props.final ? styles[`container_final`] : null,
  );

  let clsInputHome = classNames(input);
  let clsInputAway = classNames(input);

  if (winner === 'home') {
    clsInputHome = classNames(input, styles[`input_win`]);
    clsInputAway = classNames(input, styles[`input_lose`]);
  } else if (winner === 'away') {
    clsInputHome = classNames(input, styles[`input_lose`]);
    clsInputAway = classNames(input, styles[`input_win`]);
  }

  // const getWinner = () => {};

  return (
    <div className={clsContainer}>
      <img src={homeFlag} className={flag} alt={'flag'} />
      <input className={clsInputHome} defaultValue={homeScore} name="home" />
      <p className={colon}>:</p>
      <input className={clsInputAway} defaultValue={awayScore} name="away" />
      <img src={awayFlag} className={flag} alt={'flag'} />
    </div>
  );
};

export default Paar;
