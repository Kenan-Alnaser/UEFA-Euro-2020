import React from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../../logo.json";

const Header = () => {
  const logo = Logo.map((obj) => {
    const { logo } = obj;
    return <img className="logo" alt="logo" src={logo}></img>;
  });
  return (
    <React.Fragment>
      {logo}
      <Navbar />
    </React.Fragment>
  );
};

export default Header;
