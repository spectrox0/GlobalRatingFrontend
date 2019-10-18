import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";

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
              src={require("./../../assets/img/carousel/Global-ratings.jpg")}
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
              src={require("./../../assets/img/carousel/Global-ratings3.jpg")}
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
              src={require("./../../assets/img/carousel/Global-ratings4-2.jpg")}
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