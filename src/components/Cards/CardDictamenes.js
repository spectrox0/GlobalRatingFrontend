import React,{useState, useEffect} from 'react';
import {  Link } from 'react-router-dom';
import {MDBCardTitle , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter} from "mdbreact";
export default function CardDictamenes({
    id,
    date,
    imageUrl,
    postUrl,
    title
   
  }) { 
   

      return  (
       <MDBCard to={{
        pathname: '/dictamen',
        search: `?id=${id}`}} 
        className="card-dictamen" 
         style= 
         {{background:`url(${imageUrl}) no-repeat center`,
         backgroundSize:"contain",
        }}
         tag={Link}>
        


        <MDBCardBody>
          </MDBCardBody>
        <MDBCardFooter>
            <MDBCardTitle><strong>{title}</strong></MDBCardTitle>
        </MDBCardFooter>
         </MDBCard>
        
    ); 
   

  }
