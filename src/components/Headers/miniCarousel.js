import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={false}
	  className="z-depth-2"
	  slide
    >
	  <MDBCarouselInner style={{
		  background: "rgba(12, 117, 158, 0.637)",
	      borderRadius:"10px"}}>
        <MDBCarouselItem itemId="1">
          <MDBView >
			  <div style={{width:"100%",padding:"0.7rem", margin:"0"}}>
		  <h6 className="h6-responsive">Riesgo bancario y Aseguradoras</h6>
		  </div>
          <MDBMask overlay="black-light" />
          </MDBView>
         
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
		  <div style={{width:"100%",padding:"0.7rem", margin:"0"}}>
		  <h6 className="h6-responsive">Obligaciones y titularizaciones</h6>
		  </div>
          <MDBMask overlay="black-strong" />
          </MDBView>
         
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
		  <div style={{width:"100%",padding:"0.7rem", margin:"0"}}>
		  <h6 className="h6-responsive">Evaluacion de Riesgo</h6>
		  </div>
          <MDBMask overlay="black-slight" />
          </MDBView>
         
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;