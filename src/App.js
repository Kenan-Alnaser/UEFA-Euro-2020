// Import area
import React from 'react';
import Header from './components/Header/Header';
import Groups from './components/Groups/Groups';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import Playoff from './components/Playoff/Playoff';
import { getMatches } from './api';
import Logo from './logo.json';

// App function
function App() {
  // Logo
  const logo = Logo.map((obj) => {
    const { id, logo } = obj;
    return <img key={id} className="logo" alt="logo" src={logo}></img>;
  });

  return (
    <React.Fragment>
      <Header logo={logo} />
      <Playoff />
      <Slider />
      <Groups />
      <Footer />
    </React.Fragment>
  );
}

// App export
export default App;
