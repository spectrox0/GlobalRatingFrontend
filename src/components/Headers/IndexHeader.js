/*eslint-disable*/
import React from "react";

// reactstrap components
import { MDBContainer } from "mdbreact";
// core components
import Carousel from "./Carousel.js";
import MiniCarousel from "./miniCarousel.js"; 
function IndexHeader() {

 

  return (
    <>
      <div className="page-header">
        <div className="page-header-filter" > 
        </div>
       
        <div className="page-header-image">
          <Carousel/>
        </div>
        <div className="page-header-mini-carousel">
        <MiniCarousel/> 
        </div>
        
      </div>
    </>
  );
}

export default IndexHeader;
