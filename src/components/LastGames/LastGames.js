import React, { useState } from 'react';
import { arr } from './lastGamesData';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';

const LastGames = () => {
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <div className="mainGamesContainer">
        <div className="gamesContainer">
          <h1>{arr[value].date}</h1>
          <div className="matches" key={arr.id}>
            <button
              type="button"
              className="gamesBtn"
              onClick={() => (value === 0 ? setValue(3) : setValue(value - 1))}
            >
              <BsArrowLeftShort />
            </button>
            <div className="match1">
              <div className="team1">
                <img src={arr[value].flag1} />
                <div className="teamDescription">
                  <h2>{arr[value].team1}</h2>
                </div>
              </div>
              <div className="result">
                <p>{arr[value].score1}</p>
                <p>:</p>
                <p>{arr[value].score2}</p>
              </div>
              <div className="team2">
                <img src={arr[value].flag2} />
                <div className="teamDescription">
                  <h2>{arr[value].team2}</h2>
                </div>
              </div>
            </div>
            <div className="match2">
              <div className="team3">
                <img src={arr[value].flag3} />
                <div className="teamDescription">
                  <h2>{arr[value].team3}</h2>
                </div>
              </div>
              <div className="result">
                <p>{arr[value].score3}</p>
                <p>:</p>
                <p>{arr[value].score4}</p>
              </div>
              <div className="team4">
                <img src={arr[value].flag4} />
                <div className="teamDescription">
                  <h2>{arr[value].team4}</h2>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="gamesBtn"
              onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}
            >
              <BsArrowRightShort />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LastGames;
