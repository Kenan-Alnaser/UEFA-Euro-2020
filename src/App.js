// Import area
import React from 'react';
import Header from './components/Header/Header';
import Groups from './components/Groups/Groups';
import Footer from './components/Footer/Footer';
import { getMatches } from './api';
import Logo from './logo.json';
import Group from './groups.json';

// App function
function App() {
  // Logo
  const logo = Logo.map((obj) => {
    const { id, logo } = obj;
    return <img key={id} className="logo" alt="logo" src={logo}></img>;
  });
  // Groups
  const listGroups = Group.map((obj) => {
    const { id, team, flag, games, goalsscored, goalsrecived, score, group } = obj;
    const goals = goalsscored - goalsrecived;

    if (group === 'Group A')
      return (
        <li key={id}>
          <div>
            <span>{id + 1} </span>
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
              <span> {goals} </span>
              <span> {score}</span>
            </div>
          </div>
        </li>
      );
  });

  return (
    <React.Fragment>
      <Header logo={logo} />
      <Groups listGroups={listGroups} />
      <Footer />
    </React.Fragment>
  );
}

// App export
export default App;
