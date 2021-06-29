import React from "react";
// Importing Images
// import background from "../../../public/img/abstract.jpg";
import logo from "../Footer/logo.png";
import generic from "../Footer/generic-horizontal.webp";

const Footer = () => {
  return (
    <div className="block">
      <img className="Stan" src={logo} alt="logo" />
      <div className="block footer__one">
        <ul className="comp-menu-1">
          <li>
            <a href="#">Latest</a>
          </li>
          <li>
            <a href="#">Fixtures & results</a>
          </li>
          <li>
            <a href="#">Standings</a>
          </li>
          <li>
            <a href="#">Event guide</a>
          </li>
          <li>
            <a href="#">Tickets</a>
          </li>
          <li>
            <a href="#">Teams & players</a>
          </li>
        </ul>
      </div>
      <div className="block footer__two">
        <ul className="comp-menu-1">
          <li>
            <a href="#">Stats</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
        </ul>
      </div>
      <div className="block footer__three">
        <ul className="comp-menu-1">
          <h4 className="giraffe">ALSO VISIT</h4>
          <li>
            <a href="#">UEFA.com</a>
          </li>
          <li>
            <a href="#">Inside UEFA</a>
          </li>
          <li>
            <a href="#">UEFA Foundation</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
        </ul>
      </div>
      <div className="block footer__four">
        <ul className="comp-menu-1">
          <h4 className="giraffe">Tools</h4>
          <li>
            <a href="">RSS feeds</a>
          </li>
        </ul>
      </div>
      <div className="block footer__five">
        <ul className="comp-menu-1">
          <h4 className="giraffe">Developers</h4>
          <li>
            <a href="https://github.com/ceobit" target="_blank">
              Roman Lebedenko
            </a>
          </li>
          <li>
            <a href="https://github.com/iulianSta" target="_blank">
              Iulian Stan
            </a>
          </li>
          <li>
            <a href="https://github.com/AliAbukahil" target="_blank">
              Ali Abukahil
            </a>
          </li>
          <li>
            <a href="https://github.com/Kenan-Alnaser" target="_blank">
              Kenan Alnaser
            </a>
          </li>
        </ul>
      </div>
      <img className="generic" src={generic} alt="generic" />
    </div>
  );
};

export default Footer;
