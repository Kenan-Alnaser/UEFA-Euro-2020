import React, { useState } from 'react';
import { arr } from './lastGamesData';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';

const LastGames = () => {
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <div className="mainLastGamesContainer">
        <div className="lastGamesContainer">
          <div key={arr.id}>
            <div className="team1">
              <img src={arr[value].flag1} /> <h2>{arr[value].team1}</h2>
              <p>{arr[value].score1}</p>
            </div>
            <div className="team2">
              <img src={arr[value].flag2} /> <h2>{arr[value].team2}</h2>
              <p>{arr[value].score2}</p>
            </div>
          </div>
          <button type="button" onClick={() => (value === 0 ? setValue(3) : setValue(value - 1))}>
            <BsArrowLeft />
          </button>
          <button type="button" onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}>
            <BsArrowRightShort />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LastGames;
