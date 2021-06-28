import React from 'react';

const state = {
  round16: [
    {
      homeTeam: 'Team1',
      awayTeam: 'Team2',
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

const Paar = ({ homeTeam, awayTeam }) => {
  return (
    <div>
      {state.round16.map((el, i) => (
        <p>{JSON.stringify(el)}</p>
      ))}
    </div>
  );
};

export default Paar;
