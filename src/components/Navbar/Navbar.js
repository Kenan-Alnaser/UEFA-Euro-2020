import React from "react";
import Data from "../../menu.json";

const Navbar = () => {
  const navMenu = Data.map((obj) => {
    const { id, name } = obj;
    return <li key={id}>{name}</li>;
  });

  return (
    <React.Fragment>
      <nav>{navMenu}</nav>
    </React.Fragment>
  );
};

export default Navbar;
