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
import axios from 'axios'; 
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
  React.useEffect( ()=> {
    initGA();
    getJson(); 
  },[]);
   const [noticias,setNoticias] = React.useState(); 
   const [dictamenes,setDictamenes]= React.useState(); 

  const getJson= async () => {
    const {data} = await axios.get("https://www.finanzasdigital.com/traeinfo.php?token=aHcT639@/$muzk56&pagina1=0&numNoticias1=3&categoriaIncluir1=-7667,-41,-1574,-7014&largo1=400&pagina2=0&numNoticias2=6&categoriaIncluir2=7667,-7014&largo2=0")
      setNoticias(data.slice(0,3));
      setDictamenes(data.slice(3,9));
   }
  return (
    <div className="homeContainer">  
      
        <IndexHeader />
        <div className="main" >
      <Dictamenes dictamenes= {dictamenes} />
      <Noticias noticias= {noticias} />
        
        </div>
    
    </div>
  );
}


