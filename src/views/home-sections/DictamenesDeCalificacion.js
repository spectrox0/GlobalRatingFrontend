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
    
    return( <DictamenesContainer> 
         <div className="title-dictamenes"
         >
             <h4 > 
            DICTAMENES DE CALIFICACION 
            </h4>
             <div className="underline"></div>
         </div>
         
    <Carousel 
  swipeable={true}
  draggable={true} 
  showDots={false}
  centerMode={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5s"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px" 
  >
    <Dictamenes {...dictamenes[0]} /> 
    <Dictamenes {...dictamenes[1]} /> 
    <Dictamenes {...dictamenes[2]} /> 
    <Dictamenes {...dictamenes[3]} /> 
    <Dictamenes {...dictamenes[4]} /> 
    <Dictamenes {...dictamenes[5]} /> 
</Carousel>

         < div className="row" > 
             <Button className="btn-round" color="info"
             style={{width:"10rem", fontSize:"1.2rem"}}
             > Ver más </Button>
         </div>
    </DictamenesContainer>); 
}

const DictamenesContainer = styled.div`
margin:0; 
padding:0; 
 width:100%; 
.title-dictamenes {
  display: flex ; 
  flex-direction:column; 
  position: relative; 
  left:0; 
  justify-content:center; 
  align-items: center; 
  width: 45%; 
  min-width:20rem; 
  height: 4rem; 
  background-color: #2CA8FF; 
  padding: 1rem; 
  margin: 1rem 0 1rem 0; 
  border-top-right-radius: 500px; 
  border-bottom-right-radius: 500px; 

  h4 {
    margin:0; 
    fontFamily: 'Ovo', serif; 
    font-size: 1.2rem; 
    text-align: center; 
    color: #FFFFFF; 
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
  }
  .underline {
    background-color: #151F42; 
    width: 45%; 
    min-width: 5rem; 
    min-height: 0.2rem; 
    margin: 0; 
    box-shadow: 0px 4px 4px rgba(50, 121, 151, 0.44); 
    transform: "matrix(1, 0, 0, -1, 0, 0)"
  }
}
.row {
  margin: 0 2rem 0 0; 
  display: flex; 
  justify-content: flex-end; 
}

`