import React,{useState, useEffect} from 'react';
import {  Link } from 'react-router-dom';
import {MDBCardTitle , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter , MDBCardImage,} from "mdbreact";
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
        className="card-dictamen2" 
      
         tag={Link}>
        

          {/* 
             style= 
         {{background:`url(${featuredImage.sourceUrl}) no-repeat center`,
         backgroundSize:"contain",
        }} 
        <MDBCardBody>
          </MDBCardBody>
        <MDBCardFooter>
            <MDBCardTitle> {title} </MDBCardTitle>
        </MDBCardFooter>*/ }
    
          <MDBCardImage className="img-fluid" src={featuredImage.sourceUrl} waves />
        


        <MDBCardBody>
       
          <MDBCardTitle>   {title} </MDBCardTitle>
     
          </MDBCardBody>

         </MDBCard>
        
    ); 
   

  }
