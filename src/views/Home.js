import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import {Container} from "reactstrap";
// sections for this page
import Dictamenes from "views/home-sections/DictamenesDeCalificacion.js"
import Noticias from "views/home-sections/NoticiasFinanzas.js"
import CountryName from "views/HomeCountry.js"; 


export default function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <div className="wrapper">
        <IndexHeader />
        <div className="main" >
        <Container style={{margin:0, minWidth:"100%" }}> 
        <Dictamenes/>
        <Noticias/>
        </Container>
        </div>
      </div>
    </>
  );
}


