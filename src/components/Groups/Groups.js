// Import area
import React, { Component } from 'react';
import Slider from 'react-slick';
import TeamGroup from '../Group/TeamGroup';

// Groups function
const Groups = ({ groups }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <React.Fragment>
      <div>
        <div>
          <h1>GROUPS</h1>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
        <Slider {...settings}>
          <div>
            <h2>Group A</h2>
            <TeamGroup group="Group A" />
          </div>
          <div>
            <h2>Group B</h2>
            <TeamGroup group="Group B" />
          </div>
          <div>
            <h2>Group C</h2>
            <TeamGroup group="Group C" />
          </div>
          <div>
            <h2>Group D</h2>
            <TeamGroup group="Group D" />
          </div>
          <div>
            <h2>Group E</h2>
            <TeamGroup group="Group E" />
          </div>

          <div>
            <h2>Group F</h2>
            <TeamGroup group="Group F" />
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};

// Groups export
export default Groups;
