import React from 'react';

import Group from '../../groups.json';

function TeamGroup({ group }) {
  return (
    <div>
      {Group.filter((el) => el.group === group).map((country, index) => {
        // const { id, flag, games, goalsscored, goalsrecived, score, team } = country;
        // console.log(flag);

        return (
          <li key={country.id}>
            <div>
              <span>{index + 1} </span>
              <img src={country.flag} alt="flag" />
              <span> {country.team}</span>
            </div>
            <div>
              <div>
                <span>P </span>
                <span> +/- </span>
                <span> Pts</span>
              </div>

              <div>
                <span>{country.games} </span>
                <span> {country.goalsscored - country.goalsrecived} </span>
                <span> {country.score}</span>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default TeamGroup;
