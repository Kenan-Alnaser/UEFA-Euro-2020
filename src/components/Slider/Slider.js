import React, { useState } from 'react';
import { arr } from './sliderData.js';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';

const Slider = () => {
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <div className="mainSliderContainer">
        <div className="sliderContainer">
          <button
            type="button"
            className="sliderBtn"
            onClick={() => (value === 0 ? setValue(3) : setValue(value - 1))}
          >
            <BsArrowLeftShort />
          </button>
          <img src={arr[value].img} key={arr.id} />
          {/* <h2>{arr[value].content}</h2> */}

          <button
            type="button"
            className="sliderBtn"
            onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}
          >
            <BsArrowRightShort />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
