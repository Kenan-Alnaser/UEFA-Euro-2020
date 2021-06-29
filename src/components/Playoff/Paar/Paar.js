import React from 'react';

import styles from './paar.module.scss';

const state = {
  round16: [
    {
      homeTeam: 'Germany',
      awayTeam: 'Italy',
      homeScore: 2,
      awayScore: 0,
    },
    {
      homeTeam: 'Team3',
      awayTeam: 'Team4',
      homeScore: 1,
      awayScore: 3,
    },
  ],
  quarterFinals: [{ homeTeam: 'Team1', awayTeam: 'Team4', homeScore: 0, awayScore: 1 }],
  semiFinals: [{ homeTeam: 'Team1', awayTeam: 'Team4', homeScore: 0, awayScore: 1 }],
  final: [{ homeTeam: '', awayTeam: '', homeScore: '', awayScore: '' }],
};

const Paar = ({ color }) => {
  const { container, container_red, flag, input, colon } = styles;

  const cls = [];
  cls.push(container);
  if (color === 'red') {
    cls.push(container_red);
  }

  return (
    <div className={cls}>
      <img
        src="https://www.uefa.com/imgml/flags/70x70/CRO.png?imwidth=276"
        className={flag}
        alt={'flag'}
      />
      <input className={input} />
      <p className={colon}>:</p>
      <input className={input} />
      <img
        src="https://www.uefa.com/imgml/flags/70x70/ESP.png?imwidth=280"
        className={flag}
        alt={'flag'}
      />
      {/*{state.round16.map((el, i) => (*/}
      {/*  <p>{JSON.stringify(el)}</p>*/}
      {/*))}*/}
    </div>
  );
};

export default Paar;
