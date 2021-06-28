import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import { getMatches } from './api';

function App() {
  // getMatches('FINISHED');
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}

export default App;
