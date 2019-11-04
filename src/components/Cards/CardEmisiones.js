import React from 'react'; 
import {MDBCardTitle , MDBCard, MDBBtn, MDBCardBody, MDBCardText , MDBCardFooter, MDBCardImage, MDBCollapse} from "mdbreact"; 

export default function CardEmision ({title , dictamen, providencia , prospecto, fecha}) {
    return ( <MDBCard
          className="cardEmision" > 
    
     
     <MDBCardBody> 
     <MDBCardTitle> titulo emision </MDBCardTitle>
         <MDBBtn> Dictamen </MDBBtn>
         <MDBBtn> Providencia </MDBBtn>
         <MDBBtn> Prospecto </MDBBtn>
     </MDBCardBody>
    </MDBCard>); 
}