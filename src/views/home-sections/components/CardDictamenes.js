import React from 'react';
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import "./CardDictamenes.css";
export default function CardDictamenes({
    id,
    imgUrl,
    date,
    title,
    content,
   
  }) { 
      return (
      <Row>
       <div className="CardDic">
        <Col xs="auto" style= {{display:"flex", alignItems:"center", justifyContent:"center"}} > 
        <img 
        src={imgUrl}
         alt="..."/> 
          </Col>
          <Col > 
           
           <div className="TitleDictamen">
           <h4> {title} </h4>
            <div className="overlineTitle" 
            style={{ 
            backgroundColor:"#2CA8FF",
             width:"65%",
            minWidth:"5rem",
            minHeight:"0.2rem",
            margin:"0",
            boxShadow: " 0px 4px 4px rgba(50, 121, 151, 0.44)",
           transform: "matrix(1, 0, 0, -1, 0, 0)"
           
           }}> </div>
           <div className="ContentDictamen">
               <p>
                   {content}
                   
               </p>
           </div>
                </div>
        
         </Col>
       </div>
      </Row>); 
   

  }