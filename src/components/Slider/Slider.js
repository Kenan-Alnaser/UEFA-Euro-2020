import React from 'react';

const Slider = () => {
  let slide_index = 1;
  //   displaySlides(slide_index);
  function nextSlide(n) {
    displaySlides((slide_index += n));
  }
  return (
    <React.Fragment>
      <div className="slidercontainer">
        <div className="showSlide fade">
          <img src="images/img1.jpg" />
          <div className="content">Lorem ipsum dolor sit amet</div>
        </div>
        <div className="showSlide fade">
          <img src="images/img2.jpg" />
          <div className="content">Lorem ipsum dolor sit amet</div>
        </div>

        <div className="showSlide fade">
          <img src="images/img3.jpg" />
          <div className="content">Lorem ipsum dolor sit amet</div>
        </div>
        <div className="showSlide fade">
          <img src="images/img4.jpg" />
          <div className="content">Lorem ipsum dolor sit amet</div>
        </div>
        {/* <!-- Navigation arrows -->   */}
        <a className="left" onclick={nextSlide(-1)}>
          ❮
        </a>
        <a className="right" onclick={nextSlide(1)}>
          ❯
        </a>
      </div>
    </React.Fragment>
  );
};

export default Slider;
