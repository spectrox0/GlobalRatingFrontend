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
      className="z-depth-2"
      slide
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <ContainerCarousel>
              <h3 className="h3-responsive">Evaluación de Riesgo</h3>
            </ContainerCarousel>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <ContainerCarousel>
              <h3 className="h3-responsive">Papeles Comerciales</h3>
            </ContainerCarousel>
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <ContainerCarousel>
              <h3 className="h3-responsive">Obligaciones Quirografarias</h3>
            </ContainerCarousel>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <ContainerCarousel>
              <h3 className="h3-responsive">
                Títulos de Participación / Titularizaciones
              </h3>
            </ContainerCarousel>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <ContainerCarousel>
              <h3 className="h3-responsive">Pagarés Bursátiles</h3>
            </ContainerCarousel>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <ContainerCarousel>
              <h3 className="h3-responsive">
                Riesgo Bancario y de Empresas de Seguro
              </h3>
            </ContainerCarousel>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="7">
          <MDBView>
            <ContainerCarousel>
              <h3 className="h3-responsive">Acciones Preferidas</h3>
            </ContainerCarousel>
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default CarouselPage;

const ContainerCarousel = styled.div`
  width: 100%;
  padding: 0.7rem;
  margin: 0;
  font-family: "Ovo", serif;

  h6 {
    font-family: "Ovo", serif;
    font-size: 1rem;
  }
`;
