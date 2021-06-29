import React from "react";
import Data from "../../menu.json";

const Navbar = () => {
  const navMenu = Data.map((obj) => {
    const { id, name, target } = obj;
    return (
      <li key={id}>
        <a href={target}>{name}</a>
      </li>
    );
  });

  return (
    <React.Fragment>
      <nav>{navMenu}</nav>
    </React.Fragment>
  );
};

export default Navbar;
