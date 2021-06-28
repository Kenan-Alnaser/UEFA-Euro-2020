import React from 'react';
import Header from './components/Header/Header';
import Groups from './components/Groups/Groups';
import { getMatches } from './api';

function App() {
  // getMatches('FINISHED');
  return (
    <React.Fragment>
      <Header />
      <Groups />
    </React.Fragment>
  );
}

export default App;
