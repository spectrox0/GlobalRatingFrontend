import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from "mdbreact";
import Img1 from "./../../assets/img/carousel/Carousel 1.png";
import Img2 from "./../../assets/img/carousel/Carousel 2.png";
import Img3 from "./../../assets/img/carousel/Carousel 3.png";

const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={false}
      className="z-depth-2"
      interval={3000}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="img-carousel d-block w-100"
              src={Img1}
              alt="First slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="img-carousel d-block w-100"
              src={Img2}
              alt="First slide"
            />

            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="img-carousel d-block w-100"
              src={Img3}
              alt="First slide"
            />

            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default CarouselPage;
