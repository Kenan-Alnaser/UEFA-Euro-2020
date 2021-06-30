// Import area
import React from 'react';
import Group from '../../groups.json';

// TeamGroup function
function TeamGroup({ group }) {
  return (
    <div id="teams" className="team-group">
      {Group.filter((el) => el.group === group).map((country, index) => {
        const { id, flag, games, goalsscored, goalsrecived, score, team } = country;

        return (
          <li key={id}>
            <div className="top">
              <span className="index">{index + 1} </span>
              <img src={flag} alt="flag" />
              <span className="team"> {team}</span>
            </div>
            <div className="bottom">
              <div className="up">
                <span> P </span>
                <span> +/- </span>
                <span> Pts</span>
              </div>

              <div className="down">
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

export default TeamGroup;
