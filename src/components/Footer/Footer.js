import React from "react";

const Footer = () => {
  return (
    <div className="block">
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
        <h4>ALSO VISIT</h4>
        <ul className="comp-menu-1">
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
            <a href="https://github.com/Kenan-Alnaser" target="_blank">
              Store
            </a>
          </li>
        </ul>
      </div>
      <div className="block footer__four">
        <h4>Tools</h4>
        <ul>
          <li>
            <a href="">RSS feeds</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
