// Import area
import React from 'react';

import Header from './components/Header/Header';
import Groups from './components/Groups/Groups';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import LastGames from './components/LastGames/LastGames';
import Playoff from './components/Playoff/Playoff';
import { getMatches } from './api';
import Logo from './logo.json';
import ScrollUp from './components/ScrollUp/ScrollUp';

// App function
function App() {
  // Logo
  const logo = Logo.map((obj) => {
    const { id, logo } = obj;
    return <img key={id} className="Stan logo" alt="logo" src={logo}></img>;
  });

  return (
    <React.Fragment>
      <Header logo={logo} />
      <LastGames />
      <Playoff />
      <Slider />
      <Groups />
      <Footer logo={logo} />
      <ScrollUp />
    </React.Fragment>
  );
}

// App export
export default App;
