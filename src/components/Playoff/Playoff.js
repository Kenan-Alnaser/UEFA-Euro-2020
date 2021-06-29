import React, { useState } from 'react';
import Paar from './Paar/Paar';

import styles from './playoff.module.scss';

const Playoff = () => {
  const initState = {
    round16: [
      {
        homeTeam: 'Wales',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/WAL.png?imwidth=276',
        awayTeam: 'Denmark',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/DEN.png?imwidth=276',
        homeScore: 0,
        awayScore: 4,
        winner: 'away',
      },
      {
        homeTeam: 'Italy',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/ITA.png?imwidth=276',
        awayTeam: 'Austria',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/AUT.png?imwidth=276',
        homeScore: 2,
        awayScore: 1,
        winner: 'home',
      },
      {
        homeTeam: 'Netherlands',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/NED.png?imwidth=276',
        awayTeam: 'Czech Republic',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/CZE.png?imwidth=276',
        homeScore: 0,
        awayScore: 2,
        winner: 'away',
      },
      {
        homeTeam: 'Belgium',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/BEL.png?imwidth=276',
        awayTeam: 'Portugal',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/POR.png?imwidth=276',
        homeScore: 1,
        awayScore: 0,
        winner: 'home',
      },
      {
        homeTeam: 'Croatia',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/CRO.png?imwidth=276',
        awayTeam: 'Spain',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/ESP.png?imwidth=276',
        homeScore: 3,
        awayScore: 5,
        winner: 'away',
      },
      {
        homeTeam: 'France',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/FRA.png?imwidth=276',
        awayTeam: 'Switzerland',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/SUI.png?imwidth=276',
        homeScore: 3,
        awayScore: 3,
        winner: 'away',
      },
      {
        homeTeam: 'England',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/ENG.png?imwidth=276',
        awayTeam: 'Germany',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/GER.png?imwidth=276',
        homeScore: '',
        awayScore: '',
        winner: '-',
      },
      {
        homeTeam: 'Sweden',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/SWE.png?imwidth=276',
        awayTeam: 'Ukraine',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/UKR.png?imwidth=276',
        homeScore: '',
        awayScore: '',
        winner: '-',
      },
    ],
    quarterFinals: [
      {
        homeTeam: 'Switzerland',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/SUI.png?imwidth=276',
        awayTeam: 'Spain',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/ESP.png?imwidth=276',
        homeScore: '',
        awayScore: '',
        winner: '-',
      },
      {
        homeTeam: 'Belgium',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/BEL.png?imwidth=276',
        awayTeam: 'Italy',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/ITA.png?imwidth=276',
        homeScore: '',
        awayScore: '',
        winner: '-',
      },
      {
        homeTeam: 'Czech Republic',
        homeFlag: 'https://www.uefa.com/imgml/flags/70x70/CZE.png?imwidth=276',
        awayTeam: 'Denmark',
        awayFlag: 'https://www.uefa.com/imgml/flags/70x70/DEN.png?imwidth=276',
        homeScore: '',
        awayScore: '',
        winner: '-',
      },
      {
        homeTeam: '',
        homeFlag: 'https://img.uefa.com/imgml/TP/teams/logos/teamlogo_fallback.svg?imwidth=65',
        awayTeam: '',
        awayFlag: 'https://img.uefa.com/imgml/TP/teams/logos/teamlogo_fallback.svg?imwidth=65',
        homeScore: '',
        awayScore: '',
        winner: '-',
      },
    ],
    semiFinals: [
      {
        homeTeam: '',
        homeFlag: 'https://img.uefa.com/imgml/TP/teams/logos/teamlogo_fallback.svg?imwidth=65',
        awayTeam: '',
        awayFlag: 'https://img.uefa.com/imgml/TP/teams/logos/teamlogo_fallback.svg?imwidth=65',
        homeScore: '',
        awayScore: '',
        winner: '-',
      },
      {
        homeTeam: '',
        homeFlag: 'https://img.uefa.com/imgml/TP/teams/logos/teamlogo_fallback.svg?imwidth=65',
        awayTeam: '',
        awayFlag: 'https://img.uefa.com/imgml/TP/teams/logos/teamlogo_fallback.svg?imwidth=65',
        homeScore: '',
        awayScore: '',
        winner: '-',
      },
    ],
    final: [
      {
        homeTeam: '',
        homeFlag: 'https://img.uefa.com/imgml/TP/teams/logos/teamlogo_fallback.svg?imwidth=65',
        awayTeam: '',
        awayFlag: 'https://img.uefa.com/imgml/TP/teams/logos/teamlogo_fallback.svg?imwidth=65',
        homeScore: '',
        awayScore: '',
        winner: '-',
      },
    ],
  };

  const [games, setGames] = useState(initState);

  // const setResult = (e) => {
  //   setGames()
  // };

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
