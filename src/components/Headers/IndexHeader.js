/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import Carousel from "./Carousel.js";
function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div 
      style={{
        minHeight: "10rem",
        height: "25rem"
      }}className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/carr_img03.jpg") + ")"
          }}
          ref={pageHeader}
        >
        </div>
        
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/pic_logoGR.svg")}
              style={{ width:"30rem", maxWidth:"60%" ,transform:"translateY(4rem)"}}
            ></img>
          
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
