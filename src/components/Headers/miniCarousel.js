import React from "react";

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
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        additionalTransfrom={0}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={false}
        arrows={false}
        focusOnSelect={false}
        transitionDuration={2000}
        customTransition="all 2s linear"
        containerClass="carousel-container"
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="container-title">
          <h3 className="h3-responsive">Evaluación de Riesgo</h3>
        </div>
        <div className="container-title">
          <h3 className="h3-responsive">Papeles Comerciales</h3>
        </div>
        <div className="container-title">
          <h3 className="h3-responsive">Obligaciones Quirografarias</h3>
        </div>
        <div className="container-title">
          <h3 className="h3-responsive">Títulos de Participación</h3>
        </div>
        <div className="container-title">
          <h3 className="h3-responsive">Pagarés Bursátiles</h3>
        </div>
        <div className="container-title">
          <h3 className="h3-responsive">
            Riesgo Bancario y de Empresas de Seguro
          </h3>
        </div>
        <div className="container-title">
          <h3 className="h3-responsive">Acciones Preferidas</h3>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselPage;
