import React from 'react';
import { useTouchSlider } from './useTouchSlider';

interface Props {}

function Container({ children }) {
  return <div className="touch-slider">{children}</div>;
}

function Slide({ children }) {
  return <div className="slide">{children}</div>;
}

export const TouchSlider = (props: Props) => {
  const { setSliderRef } = useTouchSlider('slide');

  return (
    <Container>
      <div ref={setSliderRef} className="touch-slider-container">
        <Slide>
          <h2>Iphone</h2>
          <h4>$499</h4>
          <div className="slide__img-container">
            <img src="/images/site/boombox.jpg" alt="slide" />
          </div>

          <a href="#" className="link-btn">
            Buy Now
          </a>
        </Slide>

        <Slide>
          <h2>Headphones</h2>
          <h4>$499</h4>
          <div className="slide__img-container">
            <img src="/images/site/market.jpg" alt="slide" />
          </div>

          <a href="#" className="link-btn">
            Buy Now
          </a>
        </Slide>

        <Slide>
          <h2>Offer</h2>
          <h4>$499</h4>
          <div className="slide__img-container">
            <img src="/images/site/boombox.jpg" alt="slide" />
          </div>

          <a href="#" className="link-btn">
            Buy Now
          </a>
        </Slide>
      </div>
    </Container>
  );
};

TouchSlider.Slide = Slide;
