import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from "mdbreact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={7}
      showControls={false}
      showIndicators={false}
      className="z-depth-2"
      interval={2000}
      onHoverStop={false}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <div className="d-block w-100">
              <h3 className="h3-responsive">Evaluación de Riesgo</h3>
            </div>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <div className="d-block w-100">
              <h3 className="h3-responsive">Papeles Comerciales</h3>
            </div>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <div className="d-block w-100">
              <h3 className="h3-responsive">Obligaciones Quirografarias</h3>
            </div>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <div className="d-block w-100">
              <h3 className="h3-responsive">Títulos de Participación</h3>
            </div>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <div className="d-block w-100">
              <h3 className="h3-responsive">Pagarés Bursátiles</h3>
            </div>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <div className="d-block w-100">
              <h3 className="h3-responsive">
                Riesgo Bancario y de Empresas de Seguro
              </h3>
            </div>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="7">
          <MDBView>
            <div className="d-block w-100">
              <h3 className="h3-responsive">Acciones Preferidas</h3>
            </div>
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default CarouselPage;
