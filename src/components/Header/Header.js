import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = ({ logo }) => {
  return (
    <React.Fragment>
      <div className="header">
        {logo}
        <Navbar id="home" />
      </div>
    </React.Fragment>
  );
};

export default Header;
