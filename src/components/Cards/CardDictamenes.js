import React,{useState, useEffect} from 'react';
import {  Link } from 'react-router-dom';
import {MDBCardTitle , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter} from "mdbreact";
export default function CardDictamenes({
   postId,
    featuredImage,
    date,
    title
   
  }) { 
   

      return  (
       <MDBCard to={{
        pathname: '/dictamen',
        search: `?id=${postId}`}} 
        className="card-dictamen" 
         style= 
         {{background:`url(${featuredImage.sourceUrl}) no-repeat center`,
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
