import React, {useState, useEffect} from "react";
import Dictamenes from "./components/CardDictamenes.js"
// reactstrap components
import { Button,Row } from "reactstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components"; 
import axios from 'axios'
export default function DictamenesDeCaificacion() {
   
  const [dictamenes, setDictamenes] = useState([]); 
   useEffect(()=> {
    getJson(); 
    
  },[])
   const getJson= async () => {
   const {data}= await axios.get("https://www.finanzasdigital.com/traeposts.php?token=aHcT639@/$muzk56&pagina=0&numNoticias=6&categoriaIncluir=7667,-7014");
    setDictamenes(data)
  
 
   }
   const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40
     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1 ,
      partialVisibilityGutter: 30
    },
  };
    
    return( 
      <div className="dictamenes"> 
         <div className="dictamenes-title"
         >
             <h2 > 
            DICTAMENES DE CALIFICACION 
            </h2>

         </div>
         
  

         < div className="row" > 
             <Button className="btn-round" color="info"
             style={{width:"10rem", fontSize:"1.2rem"}}
             > Ver más </Button>
         </div>
         </div>
  ); 
}

