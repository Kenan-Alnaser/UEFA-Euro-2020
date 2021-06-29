// Import area
import React from 'react';
import Group from '../../groups.json';

// TeamGroup function
function TeamGroup({ group }) {
  return (
    <div>
      {Group.filter((el) => el.group === group).map((country, index) => {
        const { id, flag, games, goalsscored, goalsrecived, score, team } = country;

        return (
          <li key={id}>
            <div>
              <span>{index + 1} </span>
              <img src={flag} alt="flag" />
              <span> {team}</span>
            </div>
            <div>
              <div>
                <span>P </span>
                <span> +/- </span>
                <span> Pts</span>
              </div>

              <div>
                <span>{games} </span>
                <span> {goalsscored - goalsrecived} </span>
                <span> {score}</span>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}

// TeamGroup export
export default TeamGroup;
