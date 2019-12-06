import React from "react";
import styled from "styled-components";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={7}
      showControls={false}
      showIndicators={false}
      interval={2000}
      onHoverStop={false}
      slide
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <div className="container-title">
              <h3 className="h3-responsive">Evaluación de Riesgo</h3>
            </div>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <div className="container-title">
              <h3 className="h3-responsive">Papeles Comerciales</h3>
            </div>
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <div className="container-title">
              <h3 className="h3-responsive">Obligaciones Quirografarias</h3>
            </div>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <div className="container-title">
              <h3 className="h3-responsive">
                Títulos de Participación / Titularizaciones
              </h3>
            </div>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <div className="container-title">
              <h3 className="h3-responsive">Pagarés Bursátiles</h3>
            </div>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <div className="container-title">
              <h3 className="h3-responsive">
                Riesgo Bancario y de Empresas de Seguro
              </h3>
            </div>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="7">
          <MDBView>
            <div className="container-title">
              <h3 className="h3-responsive">Acciones Preferidas</h3>
            </div>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default CarouselPage;
