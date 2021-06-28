import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = ({ logo }) => {
  return (
    <React.Fragment>
      {logo}
      <Navbar id="home" />
    </React.Fragment>
  );
};

export default Header;
