import React, { useState } from 'react';

import Paar from './Paar/Paar';
import { initState } from '../../initState';

import styles from './playoff.module.scss';

const Playoff = () => {
  const [games, setGames] = useState(initState);

  return (
    <div className={styles.container}>
      <div className={styles.round16Left}>
        {games.round16.map((paar, index) =>
          index <= 3 ? <Paar key={index} data={paar} color="red" /> : null,
        )}
      </div>
      <div className={styles.quarterFinalsleft}>
        {games.quarterFinals.map((paar, index) =>
          index < 2 ? <Paar key={index} data={paar} color="orange" /> : null,
        )}
      </div>

      <div className={styles.center}>
        <div className={styles.final}>
          <p className={styles.text}>FINAL</p>
          <Paar data={games.final[0]} color="blue" final />
        </div>
        <img
          className={styles.trophy}
          src="https://img.uefa.com/imgml/uefacom/euro2020/logo.png"
          alt={'logo'}
        />
        <div className={styles.semiFinals}>
          <Paar data={games.semiFinals[0]} color="green" />
          <Paar data={games.semiFinals[1]} color="green" />
        </div>
      </div>

      <div className={styles.quarterFinalsRight}>
        {games.quarterFinals.map((paar, index) =>
          index >= 2 ? <Paar key={index} data={paar} color="orange" /> : null,
        )}
      </div>
      <div className={styles.round16Right}>
        {games.round16.map((paar, index) =>
          index > 3 ? <Paar key={index} data={paar} color="red" /> : null,
        )}
      </div>
    </div>
  );
};
export default Playoff;
