import React, { useState } from 'react';
import Data from '../../slider.json';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';

const Slider = () => {
  const [value, setValue] = useState(0);
  const sliderData = Data.map((obj) => {
    const { id, img, content } = obj;
    return (
      <div>
        <img src={img} key={id} />
        <h2>{content}</h2>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="mainContainer">
        <div className="container">
          {sliderData}
          <button type="button" onClick={() => (value === 0 ? setValue(3) : setValue(value - 1))}>
            <BsArrowLeft />
          </button>
          <button type="button" onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}>
            <BsArrowRightShort />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
