import React from 'react';
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import "./CardNoticias.css";
export default function CardDictamenes({
    id,
    imgUrl,
    date,
    title,
    content,
   
  }) { 
      return (
      <>
       <div className="CardNoticias">
        
        <img 
        src={require("../../../assets/img/pic_ejemplo.jpg")}
         alt="..."/> 
           
           <div className="TitleDictamen">
           <h4> {title} </h4>
           <div className="LinkLeer">
             <a href="#"> Leer más</a>
           </div>
                </div>
        
       </div>
      </>); 
   

  }