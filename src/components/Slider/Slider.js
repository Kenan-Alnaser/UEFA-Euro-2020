import React from 'react';
import Slider from '../../slider.json';

const Slider = () => {
  const slider = Slider.map((obj) => {
    const { id, img, content } = obj;
    return (
      <div className="showSlide fade" id={id}>
        <img src={img} />
        <div className="content">{content}</div>
      </div>
    );
  });
  let slide_index = 1;
  displaySlides(slide_index);

  function nextSlide(n) {
    displaySlides((slide_index += n));

    function displaySlides(n) {
      let i;
      let slides = document.getElementsByClassName('showSlide');
      if (n > slides.length) {
        slide_index = 1;
      }
      if (n < 1) {
        slide_index = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[slide_index - 1].style.display = 'block';
    }
  }
  return (
    <React.Fragment>
      <div className="slidercontainer">
        {slider}
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
