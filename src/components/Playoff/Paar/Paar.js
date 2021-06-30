import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './paar.module.scss';

const Paar = (props) => {
  const { container, flag, input, colon } = styles;

  const { homeScore, awayScore, homeFlag, awayFlag, winner, id } = props.data;

  const [homeValue, setHomeValue] = useState(homeScore);
  const [awayValue, setAwayValue] = useState(awayScore);

  const setValue = (e) => {
    if (e.target.name === 'home') {
      setHomeValue(e.target.value);
    } else {
      setAwayValue(e.target.value);
    }
  };

  let currentWin = winner;

  if (homeValue > awayValue) {
    currentWin = 'home';
    // props.setResult(homeFlag);
  }

  if (homeValue < awayValue) {
    currentWin = 'away';
    // props.setResult(awayFlag);
  }

  const clsContainer = classNames(
    container,
    styles[`container_${props.color}`],
    props.final ? styles[`container_final`] : null,
  );

  let clsInputHome = classNames(input);
  let clsInputAway = classNames(input);

  if (currentWin === 'home') {
    clsInputHome = classNames(input, styles[`input_win`]);
    clsInputAway = classNames(input, styles[`input_lose`]);
  } else if (currentWin === 'away') {
    clsInputHome = classNames(input, styles[`input_lose`]);
    clsInputAway = classNames(input, styles[`input_win`]);
  }

  // const getWinner = () => {};

  return (
    <div className={clsContainer}>
      <img src={homeFlag} className={flag} alt={'flag'} />
      <input
        type="number"
        className={clsInputHome}
        defaultValue={homeScore}
        name="home"
        value={homeValue}
        onChange={setValue}
      />
      <p className={colon}>:</p>
      <input
        type="number"
        className={clsInputAway}
        defaultValue={awayScore}
        name="away"
        value={awayValue}
        onChange={setValue}
      />
      <img src={awayFlag} className={flag} alt={'flag'} />
    </div>
  );
};

export default Paar;
