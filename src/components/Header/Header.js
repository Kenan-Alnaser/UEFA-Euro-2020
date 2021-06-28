import React from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../../logo.json";

const Header = () => {
  const logo = Logo.map((obj) => {
    const { id, logo } = obj;
    return <img key={id} className="logo" alt="logo" src={logo}></img>;
  });
  return (
    <React.Fragment>
      {logo}
      <Navbar />
    </React.Fragment>
  );
};

export default Header;
