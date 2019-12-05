import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";
import Img1 from './../../assets/img/carousel/Carousel 1.png'
import Img2 from './../../assets/img/carousel/Carousel 2.png'
import Img3 from './../../assets/img/carousel/Carousel 3.png'

const CarouselPage = () => {
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={false}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="img-carousel"
              src={Img1}
              alt="First slide"
             
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
           
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="img-carousel"
              src={Img2}
              alt="Second slide"
             
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="img-carousel"
              src={Img3}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
           
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;