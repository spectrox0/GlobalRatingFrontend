import React, {useState} from "react";
import Dictamenes from "./components/CardDictamenes.js"
// reactstrap components
import { Button,Row } from "reactstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function DictamenesDeCaificacion() {
   const [dictamenes, setDictamenes] = useState(
    [  {id:1, 
      title: "REVISION F.V.I. FONDO DE VALORES INMOBILIARIOS",
      imgUrl: require("../../assets/img/pic_ejemplo.jpg"),
      date: new Date().getFullYear(),
      content:"15/8/2014. F.V.I. FONDO DE VALORES INMOBILIARIO, S.A.C.A. se define como una empresa especializada en el negocio inmobiliario y financiero, dedicada a invertir, promover y gerenciar el alquiler de espacios de ce...      "
       }, 
       {id:1, 
        title: "REVISIÓN INELECTRA, S.A.C.A.",
        imgUrl:require("../../assets/img/Logo-Inelectra.jpg"),
        date: new Date().getFullYear(),
        content:"15/8/2014. F.V.I. FONDO DE VALORES INMOBILIARIO, S.A.C.A. se define como una empresa especializada en el negocio inmobiliario y financiero, dedicada a invertir, promover y gerenciar el alquiler de espacios de ce... "
        },
        {id:1, 
            title: "TOYOTA SERVICES DE VENEZUELA, C.A.",
            imgUrl: require("./../../assets/img/Logo-TSV.jpg"),
            date: new Date().getFullYear(),
            content:"15/8/2014. TOYOTA SERVICES DE VENEZUELA, C.A. es una compañía creada en octubre de 2001 con el objeto de otorgar préstamos a concesionarios, personas naturales y jurídicas para facilitar la adquisición de automó..."
            },
            {id:1, 
                title: "REVISION F.V.I. FONDO DE VALORES INMOBILIARIOS",
                imgUrl:require("../../assets/img/pic_ejemplo.jpg"),
                date: new Date().getFullYear(),
                content:"15/8/2014. F.V.I. FONDO DE VALORES INMOBILIARIO, S.A.C.A. se define como una empresa especializada en el negocio inmobiliario y financiero, dedicada a invertir, promover y gerenciar el alquiler de espacios de ce...      "
                 }, ]
   ); 
   const DCard =()=> {
       const innerJSX = dictamenes.map( args => {
           return <Dictamenes {...args} /> 

       }); 
       return innerJSX; 
   }
   const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
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
            height:"3rem",
            backgroundColor:"#2CA8FF",
            padding:"1rem",
            margin:"1rem 0 1rem 0",
            borderTopRightRadius:"500px",
            borderBottomRightRadius:"500px"
          }}>
             <h4 style={{
            margin:"0",
            fontFamily:"'Ovo', serif",
            fontSize: "1rem",
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
  swipeable={false}
  draggable={true}
  centerMode={true} 
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  customTransition="all 1s"
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
    <Dictamenes {...dictamenes[2]} /> 
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