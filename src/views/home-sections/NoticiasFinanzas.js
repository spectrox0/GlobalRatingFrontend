import React from "react";
import {useState} from "react"; 
import Noticias from "./components/CardNoticias.js"
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function DictamenesDeCaificacion() {
   const [noticias, setNoticias] = useState(
    [  {id:1, 
      title: "En Subasta Dicom SMC-051-18 se adjudicaron USD 4.530.460,00 a 110 empresas y 378 personas naturales",
      imgUrl:"hola",
      date: new Date().getFullYear(),
      content:"15/8/2014. F.V.I. FONDO DE VALORES INMOBILIARIO, S.A.C.A. se define como una empresa especializada en el negocio inmobiliario y financiero, dedicada a invertir, promover y gerenciar el alquiler de espacios de ce...      "
       }, 
       {id:2, 
        title: "En Subasta Dicom SMC-051-18 se adjudicaron USD 4.530.460,00 a 110 empresas y 378 personas naturales",
        imgUrl:"hola",
        date: new Date().getFullYear(),
        content:"15/8/2014. F.V.I. FONDO DE VALORES INMOBILIARIO, S.A.C.A. se define como una empresa especializada en el negocio inmobiliario y financiero, dedicada a invertir, promover y gerenciar el alquiler de espacios de ce... "
        },
        {id:3, 
            title: "En Subasta Dicom SMC-051-18 se adjudicaron USD 4.530.460,00 a 110 empresas y 378 personas naturales",
            imgUrl:"hola",
            date: new Date().getFullYear(),
            content:"15/8/2014. F.V.I. FONDO DE VALORES INMOBILIARIO, S.A.C.A. se define como una empresa especializada en el negocio inmobiliario y financiero, dedicada a invertir, promover y gerenciar el alquiler de espacios de ce..."
            }, 
            {id:4, 
                title: "En Subasta Dicom SMC-051-18 se adjudicaron USD 4.530.460,00 a 110 empresas y 378 personas naturales",
                imgUrl:"hola",
                date: new Date().getFullYear(),
                content:"15/8/2014. F.V.I. FONDO DE VALORES INMOBILIARIO, S.A.C.A. se define como una empresa especializada en el negocio inmobiliario y financiero, dedicada a invertir, promover y gerenciar el alquiler de espacios de ce...      "
                 }, ]
   ); 
   const NCard =()=> {
       const innerJSX = noticias.map( args => {
           return <Noticias {...args} /> 

       }); 
       return innerJSX; 
   }

    return( <> 
     <Row className="" >
         <div className="title title-dictamenes text-center
         justify-content-md-center"
          style= {{display:"flex",
           flexDirection:"column",
           position:"relative",
           left:"0",
            justifyContent:"center",
            alignItems:"center",
            width:"45%",
            minWidth:"20rem",
            height:"5rem",
            backgroundColor:"#151F42",
            padding:"1.2rem",
            margin:"2rem 0 2rem 0",
            borderTopRightRadius:"500px",
            borderBottomRightRadius:"500px"
          }}>
             <h4 style={{
            margin:"0",
            color:"white",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}> 
            TITULARES FINANZAS DIGITAL 
            </h4>
             <div style={{ 
            
            backgroundColor:"#2CA8FF",
            width:"50%",
            minWidth:"5rem",
            minHeight:"0.2rem",
            margin:"0",
            boxShadow: "0px 4px 4px rgba(44, 168, 255, 0.44)",
           transform: "matrix(1, 0, 0, -1, 0, 0)"
           
           }}> </div>
         </div>
         </Row> 
         <Row style={{ margin:"0 0 2rem 0",
         display:"flex",
         flexDirection:"column",
         justifyContent:"center" ,
         background:"linear-gradient(180deg, #151F42 0%, #000000 100%)",
         borderRadius:"10px"

         }}>

           <Row style={{ margin:"1rem 2rem 2rem 0",
         display:"flex",
         justifyContent:"flex-end"}}> 
            <Button className="btn-round" color="info"
             style={{width:"12rem", fontSize:"1.2rem"}}
             > Más Noticias </Button>
         </Row>
          <Row style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
          <NCard/>
          </Row>
               
         </Row>
       
    </>); 
}