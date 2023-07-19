import styled from "styled-components";
import ButtonComponent from "../common/button/button-component";
import { useState, useEffect } from "react";

const SliderStyled = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 88px;

  .slider {
    margin: auto;
  }
  .slider-container {
    overflow: hidden;
    display: block;
    justify-content: center;
    /* white-space: nowrap; */
    display: flex;
    gap: 1rem;
    scroll-behavior: smooth;
    margin: auto;
  }

  .slider-slide img {
    display: inline-block;
    min-width: 10vw;
    object-fit: cover;
    border-radius: 1rem;
    height: 180px;
  }
  .work-title {
    font-size: 26px;
    line-height: 33px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    text-align: center;
    margin-bottom: 32px;
  }
  .eachImgSlider:hover {
    filter: brightness(110%);
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    .slider-slide img {
      display: inline-block;
      min-width: 540px;
      object-fit: cover;
      border-radius: 1rem;
      height: 360px;
    }
  }
`;

const BulletSliderStyled = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 32px;
`;

function ImgSlider({ imgLink }) {
  return (
    <div className="slider-slide">
      <img className="eachImgSlider" src={imgLink} alt="" />
    </div>
  );
}

function Slider({ id }) {
  // const [nextSlide, SetNextSlide] = useState("frist");
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const handleMediaQueryChange = (mediaQuery) => {
    console.log(mediaQuery, "mediaQuery");
    setIsMobile(mediaQuery.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const images = [
    "https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/image-slide-1.jpg",
    "https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/image-slide-2.jpg",
    "https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/image-slide-3.jpg",
    "https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/image-slide-4.jpg",
    "https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/image-slide-5.jpg",
  ];

  const buttonRight =
    "https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/icon-arrow-right.svg";
  const buttonLeft =
    "https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/icon-arrow-left.svg";
  return (
    <SliderStyled id={id}>
      <h3 className="work-title">My Work</h3>
      <div className="slider">
        <div className="slider-container">
          {isMobile ? (
            <>
              <ImgSlider imgLink={images[slideIndex]} />
              <ImgSlider imgLink={images[slideIndex + 1]} />
            </>
          ) : (
            <>
              <ImgSlider imgLink={images[slideIndex - 1]} />
              <ImgSlider imgLink={images[slideIndex]} />
              <ImgSlider imgLink={images[slideIndex + 1]} />
            </>
          )}
        </div>
        <BulletSliderStyled>
          <ButtonComponent link={buttonLeft} onClick={prevSlide} />
          <ButtonComponent link={buttonRight} onClick={nextSlide} />
        </BulletSliderStyled>
      </div>
    </SliderStyled>
  );
}

export default Slider;
