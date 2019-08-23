import React from "react";
import styled from "styled-components";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={false}
      className="z-depth-2"
      slide
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
          <ContainerCarousel>
		  <h6 className="h6-responsive">Obligaciones y titularizaciones</h6>
		  </ContainerCarousel>
          </MDBView>
          <MDBCarouselCaption>
           
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
          <ContainerCarousel>
		  <h6 className="h6-responsive">Obligaciones y titularizaciones</h6>
		  </ContainerCarousel>
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
          <ContainerCarousel>
		  <h6 className="h6-responsive">Obligaciones y titularizaciones</h6>
		  </ContainerCarousel>
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

const ContainerCarousel = styled.div`
   width:100%; 
   padding: 0.7rem; 
   margin: 0 ; 
   font-family: 'Ovo', serif;
    
   h6{ 
    font-family: 'Ovo', serif;
    font-size: 1rem; 
    }

`