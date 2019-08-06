import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function DictamenesDeCaificacion() {
    return( <> 
     <Row className="" >
         <div className="title title-dictamenes text-center
         justify-content-md-center"
          style= {{display:"flex",
           flexDirection:"column",
           position:"absolute",
           left:"0",
            justifyContent:"center",
            alignItems:"center",
            width:"45%",
            minWidth:"25rem",
            height:"5rem",
            backgroundColor:"#2CA8FF",
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
            DICTAMENES DE CALIFICACION 
            </h4>
             <div style={{ 
            display:"block"
            ,backgroundColor:"#151F42",
             width:"18rem",
            minWidth:"5rem",
            minHeight:"0.2rem",
            margin:"0",
            boxShadow: "0px 4px 4px rgba(50, 121, 151, 0.44)",
           transform: "matrix(1, 0, 0, -1, 0, 0)"}}> </div>
         </div>
         </Row> 
         <Container>
             <Row>
                <div className=""></div>
               
             </Row>
         </Container>
    </>); 
}