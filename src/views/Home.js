import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexHeader from "components/Headers/IndexHeader.js";
// sections for this page
import Dictamenes from "views/home-sections/DictamenesDeCalificacion.js"
import Noticias from "views/home-sections/NoticiasFinanzas.js"

import styled from 'styled-components'; 

import {initGA} from './helpers/initGA.js';
import {MDBContainer} from 'mdbreact'
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
  React.useEffect(()=> {
    initGA();
  },[]);
  return (
    <div className="homeContainer">  
      
        <IndexHeader />
        <div className="main" >
         <Dictamenes/>
        <Noticias/>
        </div>
    
    </div>
  );
}


