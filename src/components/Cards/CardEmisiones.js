import React from 'react'; 
import {MDBCardTitle ,
    MDBCard, 
    MDBBtn, 
    MDBCardBody,
    MDBCardText ,
    MDBCardFooter,
    MDBCardImage, 
    MDBTooltip
       , MDBCollapse
    } from "mdbreact"; 

export default function CardEmision ({title , dictamen, providencia , prospecto, fecha}) {
    return ( <MDBCard
          className="cardEmision" > 
    
     
     <MDBCardBody> 
     <MDBCardTitle> {title} </MDBCardTitle>
     <div className="btns">  
      <MDBTooltip placement="top"> 
       <MDBBtn className="btn-estadistica "/> 
        <div> Dictamen </div>
        </MDBTooltip>
        <MDBTooltip placement="top"> 
     <MDBBtn className="btn-estadistica "/> 
     <div> Prospecto </div>
      </MDBTooltip>
      <MDBTooltip>
     <MDBBtn className="btn-estadistica "/> 
     <div> Providencia </div>
      </MDBTooltip>
         </div>
     </MDBCardBody>
    </MDBCard>); 
}