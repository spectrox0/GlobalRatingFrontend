import React, {useState, useEffect} from "react";
import Dictamenes from "./components/CardDictamenes.js"
// reactstrap components
import { Button,Row } from "reactstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import $ from "jquery";

export default function DictamenesDeCaificacion() {
   const [dictamenes, setDictamenes] = useState([]); 
   const [isLoading, setLoading] = useState(true); 
 
   useEffect(()=> {
    getJson(); 
    
  },[])
   const getJson= () => {
    $.ajax({
      dataType: 'json',
      type: "GET",
      url : "https://www.finanzasdigital.com/traeposts.php?token=aHcT639@/$muzk56&pagina=0&numNoticias=6&categoriaIncluir=7667,-7014"
  })
  .then(
    function(data) {
      setDictamenes(data); 
      setLoading(false); 
  }
  ).catch( err => { 
    throw new Error("error"); 
  });
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
    
    return( <> 
     <Row className="" >
         <div
          style= {{display:"flex",
           flexDirection:"column",
           position:"relative",
           left:"0",
            justifyContent:"center",
            alignItems:"center",
            width:"45%",
            minWidth:"20rem",
            height:"4rem",
            backgroundColor:"#2CA8FF",
            padding:"1rem",
            margin:"1rem 0 1rem 0",
            borderTopRightRadius:"500px",
            borderBottomRightRadius:"500px"
          }}>
             <h4 style={{
            margin:"0",
            fontFamily:"'Ovo', serif",
            fontSize: "1.2rem",
            textAlign:"center",
            color:"white",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}> 
            DICTAMENES DE CALIFICACION 
            </h4>
             <div style={{ 
            backgroundColor:"#151F42",
             width:"45%",
            minWidth:"5rem",
            minHeight:"0.2rem",
            margin:"0",
            boxShadow: "0px 4px 4px rgba(50, 121, 151, 0.44)",
           transform: "matrix(1, 0, 0, -1, 0, 0)"
           }}> </div>
         </div>
         </Row> 
         
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

         <Row style={{ margin:"0 2rem 0 0",
         display:"flex",
         justifyContent:"flex-end" }}> 
             <Button className="btn-round" color="info"
             style={{width:"10rem", fontSize:"1.2rem"}}
             > Ver más </Button>
         </Row>
    </>); 
}